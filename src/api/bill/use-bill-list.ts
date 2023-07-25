import { useQuery } from 'libs/query'
import { QueryKey } from 'libs/query/types'

import { getBillList } from 'schemas/bill/bill-service'


export const useBillList = () => {
  return useQuery({ queryKey: [QueryKey.BILL_LIST], queryFn: getBillList })
}
