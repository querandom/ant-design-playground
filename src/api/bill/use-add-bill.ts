import { UseMutationOptions } from '@tanstack/react-query'
import { useMutation } from 'libs/query'
import { Bill, CreateBillSchemaParams, RemoveBillSchemaParams } from 'schemas/bill/bill-schema'

import { addBill, removeBill } from 'schemas/bill/bill-service'


// TODO: improve this API
export type UseAddBillProps = Omit<UseMutationOptions<Bill, unknown, CreateBillSchemaParams>, 'mutationFn'>
export const useAddBill = (params?: UseAddBillProps) => useMutation({ ...params, mutationFn: addBill })

export type UseRemoveBillProps = Omit<UseMutationOptions<void, unknown, RemoveBillSchemaParams>, 'mutationFn'>
export const useRemoveBill = (params?: UseRemoveBillProps) => useMutation({ ...params, mutationFn: removeBill })
