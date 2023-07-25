import './App.css'

import { PageContainer } from './layout'
import { QueryClient, QueryClientProvider } from './libs/query'
import { BillsPage } from 'pages/bills'
import { CreateBillPage } from 'pages/create-bill'
import { BillDetailPage } from 'pages/bill-detail'
import { routes } from 'state/location/routes'
import { RouterProvider, createBrowserRouter } from 'state/location/route'
import { Link } from 'react-router-dom'
import { HomePage } from 'pages/home'

const queryClient = new QueryClient()

const ErrorElement = () => {
  return (
    <>
      Error Rendering the page <Link to={routes.home}>Go Home</Link>
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <PageContainer />,
    children: [
      {
        path: routes.home,
        element: <HomePage />,
      },
      {
        path: routes.bills,
        element: <BillsPage />,
      },
      {
        path: routes.billCreate,
        element: <CreateBillPage />,
      },
      {
        path: routes.billDetail,
        element: <BillDetailPage />,
        errorElement: <ErrorElement />,
      },
    ],
  },
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
