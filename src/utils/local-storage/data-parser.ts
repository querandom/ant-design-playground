import { BillList, billListSchema } from 'schemas/bill/bill-schema'

export interface Parser<Data, DataSource = string> {
  parse(data: DataSource): Data
  serialize(data: Data): DataSource
}

export class JSONParser<D = object> implements Parser<D> {
  parse(data: string) {
    try {
      return JSON.parse(data)
    } catch (e) {
      console.error('[JSONParser.parse]', e)
      throw e
    }
  }

  serialize(data: D) {
    try {
      return JSON.stringify(data)
    } catch (e) {
      console.error('[JSONParser.toString]', e)
      throw e
    }
  }
}

export class BillListParser implements Parser<BillList> {
  private internalParser = new JSONParser<BillList>()
  parse(data: string) {
    const objData = this.internalParser.parse(data)
    return billListSchema.parse(objData)
  }

  serialize(data: BillList) {
    return this.internalParser.serialize(data)
  }
}
