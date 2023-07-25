import { useAddBill } from 'api/bill/use-add-bill'

import { BillForm } from 'components/bill-form/bill-form'
import { Form, Typography, notification } from 'libs/components'

export const CreateBillPage = () => {
  const [form] = Form.useForm()
  const { mutate, isLoading } = useAddBill({
    onSuccess: ({ id }) => {
      notification.success({
        message: 'Bill Created',
        // TODO: replace the link with a Link
        description: (
          <>
            A new bill was created <a href={`/bills/${id}`}>Go to Details.</a>
          </>
        ),
      })
      form.resetFields()
    },
  })

  return (
    <>
      <Typography.Title>Create Bill</Typography.Title>
      <BillForm
        form={form}
        isLoading={isLoading}
        onSubmit={async (values) => {
          mutate(values)
        }}
      />
    </>
  )
}
