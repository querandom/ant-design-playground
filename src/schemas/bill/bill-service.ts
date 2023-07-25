import { WebLocalStorage } from 'utils/local-storage'
import {
  Bill,
  CreateBillSchemaParams,
  BillList,
  RemoveBillSchemaParams,
} from './bill-schema'
import { BillStatus } from './types'
import { BillListParser } from 'utils/local-storage/data-parser'

const BILL_LIST_KEY = 'BILL_LIST_KEY'
const billStorage = new WebLocalStorage<BillList>(
  BILL_LIST_KEY,
  [],
  new BillListParser(),
)

export const getBillList = (): Promise<BillList> => {
  return new Promise((resolve) => {
    let result: BillList = []
    try {
      result = billStorage.getItem()
    } catch (e) {
      console.error('[getBillList] Error getting the bill list', e)
    }

    setTimeout(() => {
      resolve(result)
    }, 2000)
  })
}

export const getBill = async ({ id }: Pick<Bill, 'id'>) => {
  const list = await getBillList()
  const bill = list.find(({ id: billId }) => billId === id)

  return bill
}

export const createBill = (billParam: CreateBillSchemaParams): Bill => {
  const bill: Bill = {
    id: `${Math.floor(Math.random() * 1000)}`,
    date: new Date().toISOString(),
    status: BillStatus.not_payed,
    ...billParam,
  }

  return bill
}

export const addBill = async (
  billParam: CreateBillSchemaParams,
): Promise<Bill> => {
  const billList = await getBillList()
  const newBill = createBill(billParam)
  const newList = billList.concat([newBill])

  billStorage.setItem(newList)

  // TODO: remove Sleep function
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(newBill)
    }, 2000)
  })
}

export const removeBill = async ({ id: billId }: RemoveBillSchemaParams) => {
  const billList = await getBillList()
  const filteredList = billList.filter(({ id }) => id !== billId)

  billStorage.setItem(filteredList)
}
