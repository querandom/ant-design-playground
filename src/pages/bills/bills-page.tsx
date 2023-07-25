import { useBillList } from 'api/bill/use-bill-list'
import { BillsTable } from 'components/bills-table'
import { Typography } from 'libs/components'
import { Link } from 'react-router-dom'
import { routes } from 'state/location/routes'

export const BillsPage = () => {
  const { data, isLoading } = useBillList()

  return (
    <>
      <Typography.Title>{'Bill Table'}</Typography.Title>
      <BillsTable
        actions={{
          render: (_, { id }) => {
            return <Link to={`${routes.bills}/${id}`}>{'Details'}</Link>
          },
        }}
        isLoading={isLoading}
        data={data || []}
      />
    </>
  )
}
