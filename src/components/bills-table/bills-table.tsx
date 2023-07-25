import { Table } from 'libs/components'
import { BillsTableProps } from './types'
import { columns } from './columns'

export const BillsTable = ({ data, isLoading, actions }: BillsTableProps) => {
  return (
    <Table
      rowKey="id"
      rowSelection={{ type: 'checkbox', selections: true }}
      dataSource={data}
      columns={columns(actions)}
      loading={isLoading}
    />
  )
}
