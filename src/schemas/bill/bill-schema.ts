import { schema } from 'libs/schema'

import { BillStatus } from './types'
import { idField } from 'schemas/commons'

const billStatusSchema = schema.enum([BillStatus.payed, BillStatus.not_payed])

export const billCreateSchema = schema.object({
  description: schema.string().nonempty('Description is required').trim(),
  amount: schema.number().positive(),
  paymentType: schema.string().nonempty('Payment Type is required'),
  status: billStatusSchema.optional(),
})

export const billSchema = billCreateSchema.merge(
  schema.object({
    id: idField,
    date: schema.string(),
    status: billStatusSchema,
  }),
)

export const removeBillSchema = schema.object({
  id: idField,
})
export const billListSchema = schema.array(billSchema)

export type Bill = schema.infer<typeof billSchema>
export type BillList = schema.infer<typeof billListSchema>

export type CreateBillSchemaParams = schema.infer<typeof billCreateSchema>
export type RemoveBillSchemaParams = schema.infer<typeof removeBillSchema>
