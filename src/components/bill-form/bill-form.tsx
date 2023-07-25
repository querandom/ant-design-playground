import { Button, Form, FormInstance, Input, InputNumber, Select, Space, Spin } from '../../libs/components'
import { PAYMENT_TYPE } from './types'
import { CreateBillSchemaParams, billCreateSchema } from 'schemas/bill/bill-schema'

import './bill-form.styles.css'

type InitialBillFormValues = Partial<CreateBillSchemaParams>

const DEFAULT_INITIAL_VALUES: InitialBillFormValues = {
  paymentType: PAYMENT_TYPE.CASH
}

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 }
}

const sideLayout = {
  wrapperCol: { offset: 4, span: 16 }
}

interface BillFormProps {
  form?: FormInstance<CreateBillSchemaParams>
  onSubmit?: (values: CreateBillSchemaParams) => void | Promise<void>
  isLoading?: boolean
  initialValues?: InitialBillFormValues
  disableResetOnSuccess?: boolean
}

export const BillForm = ({ onSubmit, isLoading, initialValues = DEFAULT_INITIAL_VALUES, form }: BillFormProps) => {
  return (
    <Form {...layout} form={form} initialValues={initialValues} className="bill-form" onFinish={values => {
        const parsedValues = billCreateSchema.parse(values)
        onSubmit?.(parsedValues)
    }}>
      <Spin spinning={isLoading}>
        <Form.Item name="description" label="Description" rules={[{ required: true, type: 'string' }]}>
          <Input />
        </Form.Item>

        <Form.Item name="amount" label="Amount" rules={[{ required: true, type: 'number' }]}>
          <InputNumber min={1} />
        </Form.Item>

        <Form.Item name="paymentType" label="Payment type" rules={[{ type: 'string' }]}>
          <Select placeholder="Select the payment type">
            <Select.Option value={PAYMENT_TYPE.CASH}>{'Cash'}</Select.Option>
            <Select.Option value={PAYMENT_TYPE.PAY_ONLINE}>{'Pay Online'}</Select.Option>
            <Select.Option value={PAYMENT_TYPE.DIRECT_DEBIT}>{'Direct Debit'}</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item {...sideLayout}>
          <Space direction="horizontal">
            <Button type="primary" htmlType="submit">Submit</Button>
            <Button htmlType="reset">Reset</Button>
          </Space>
        </Form.Item>
      </Spin>
    </Form>
  )
}
