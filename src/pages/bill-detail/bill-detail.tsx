import { useGetBill } from 'api/bill/use-get-bill'
import { Spin, Typography } from 'libs/components'

interface BillDetailProps {
  id: string
}

export const BillDetail = ({ id }: BillDetailProps) => {
  const { isLoading, data } = useGetBill({ id })

  return (
    <Spin spinning={isLoading}>
      <Typography.Title>Bill Detail</Typography.Title>
      {!data && !isLoading && 'Bill Not Found'}

      <Typography.Title level={2}>ID: {data?.id}</Typography.Title>
      <Typography.Paragraph>Amount: {data?.amount}</Typography.Paragraph>
      <Typography.Paragraph>{data?.description}</Typography.Paragraph>
    </Spin>
  )
}
