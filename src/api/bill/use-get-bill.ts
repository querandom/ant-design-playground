import { useQuery } from '@tanstack/react-query'
import { QueryKey } from 'libs/query/types'
import { getBill } from 'schemas/bill/bill-service'

export const useGetBill = ({ id }: { id: string }) => {
  return useQuery({
    queryKey: [QueryKey.GET_BILL, id],
    queryFn: () => getBill({ id }),
  })
}
