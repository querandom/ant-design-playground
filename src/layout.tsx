import { Outlet, NavLink } from 'libs/router'
import { Layout, Menu, MenuProps } from 'libs/components'
import './layout.css'
import { routes } from 'state/location/routes'
import {
  CreditCardOutlined,
  FormOutlined,
  HomeOutlined,
  TableOutlined,
} from '@ant-design/icons'
import { useLocation } from 'react-router-dom'

const { Header, Footer, Content, Sider } = Layout

interface SidebarLink {
  label: string
  to?: string
  end?: boolean
  icon?: React.ReactNode
  children?: SidebarLink[]
}

type MenuItem = Required<MenuProps>['items'][number]

const menuItems: SidebarLink[] = [
  { to: routes.home, label: 'home', icon: <HomeOutlined /> },
  {
    label: 'Bills',
    icon: <CreditCardOutlined />,
    end: true,
    children: [
      {
        to: routes.bills,
        label: 'Table',
        icon: <TableOutlined />,
        end: true,
      },
      {
        to: routes.billCreate,
        label: 'Create Bill',
        end: true,
        icon: <FormOutlined />,
      },
    ],
  },
]

const createMenuItem = ({
  to,
  end,
  label,
  icon,
  children,
}: SidebarLink): MenuItem => {
  return {
    key: to || label,
    icon,
    label: to ? (
      <NavLink to={to} end={end}>
        {label}
      </NavLink>
    ) : (
      label
    ),
    children: children?.map(createMenuItem),
  }
}

const menuItem: MenuItem[] = menuItems.map(createMenuItem)

export const PageContainer = () => {
  const location = useLocation()
  return (
    <Layout>
      <Sider
        style={{
          minHeight: '100vh',
        }}
        collapsible
      >
        <div
          style={{
            height: '32px',
            margin: '16px',
            background: 'rgba(255,255,255,.2)',
            borderRadius: '6px',
          }}
        />

        <Menu
          defaultSelectedKeys={[location.pathname]}
          theme="dark"
          mode="inline"
          key="label"
          items={menuItem}
        />
      </Sider>
      <Layout>
        <Header>{/* <Typography.Title>Bill</Typography.Title> */}</Header>
        <Content style={{ padding: '20px 50px' }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2023 Created by{' '}
          <a
            href="https://github.com/querandom/"
            target="_blank"
            rel="noreferrer"
          >
            querandom
          </a>
        </Footer>
      </Layout>
    </Layout>
  )
}
