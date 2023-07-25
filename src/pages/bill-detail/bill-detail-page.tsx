import { useParams } from 'react-router-dom'
import { idField } from 'schemas/commons'
import { BillDetail } from './bill-detail'

export const BillDetailPage = () => {
  const { billId } = useParams()

  return <BillDetail id={idField.parse(billId)} />
}
