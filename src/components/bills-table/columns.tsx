import { BillsTableColumnType, BillsTableColumnsType } from './types'

export const columns = (
  actions?: BillsTableColumnType,
): BillsTableColumnsType => [
  {
    title: 'Month',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Payment Type',
    dataIndex: 'paymentType',
    key: 'paymentType',
  },
  {
    ...(actions && { title: 'Actions', dataIndex: '', ...actions }),
  },
]
