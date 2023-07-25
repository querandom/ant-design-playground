import { JSONParser, Parser } from './data-parser'

abstract class DBStorage<D> {
  constructor(protected key: string) {}
  abstract getItem(): D
  abstract setItem(data: D): void
}

export class WebLocalStorage<D = object> extends DBStorage<D> {
  private storage = localStorage

  constructor(
    protected key: string,
    private defaultValue: D,
    private parser: Parser<D> = new JSONParser<D>(),
  ) {
    super(key)
  }

  getItem() {
    const data = this.storage.getItem(this.key)
    let result = this.defaultValue

    try {
      if (data) {
        result = this.parser.parse(data)
      }
    } catch (e) {
      console.log('[WebLocalStorage.getItem] error parsing the value', data)
      throw e
    }

    return result
  }

  setItem(serializableData: D): void {
    const serializedData = this.parser.serialize(serializableData)
    this.storage.setItem(this.key, serializedData)
  }
}
