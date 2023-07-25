import type { ColumnsType } from 'antd/es/table'
import { Bill } from 'schemas/bill/bill-schema'

export type BillsTableData = Bill
export type BillsTableColumnsType = ColumnsType<BillsTableData>
export type BillsTableColumnType = BillsTableColumnsType[0]

export interface BillsTableProps {
  actions?: BillsTableColumnType
  isLoading: boolean
  data: BillsTableData[]
}
