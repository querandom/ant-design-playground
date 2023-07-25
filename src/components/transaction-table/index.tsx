import { useBillList } from "api/bill/use-bill-list";

export const BillTable = () => {
  const { data, isLoading } = useBillList()
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Mes</th>
            <th>Estado</th>
            <th>Descripcion</th>
            <th>Monto</th>
            <th>Tipo de Pago</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(bill => {
            return (
              <tr key={bill.id}>
                <td>{bill.date.toString()}</td>
                <td>{bill.status}</td>
                <td>{bill.description}</td>
                <td>{bill.amount}</td>
                <td>{bill.paymentType}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      {isLoading && <div>LOADING</div>}
    </>
  );
}