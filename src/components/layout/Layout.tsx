import { Button, Layout as LayoutAntD, Menu } from 'antd'
import { GiSteeltoeBoots, GiClothes, GiSoccerBall } from 'react-icons/gi'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { useState } from 'react'
import { theme } from 'antd'

export const Layout = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState<boolean>(true)
  const { token } = theme.useToken()
  return (
    <LayoutAntD>
      <LayoutAntD.Sider
        style={{ backgroundColor: token.colorBgContainer }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <GiSteeltoeBoots />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <GiClothes />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <GiSoccerBall />,
              label: 'nav 3',
            },
          ]}
        />
      </LayoutAntD.Sider>
      <LayoutAntD>
        <LayoutAntD.Header
          style={{
            padding: 0,
            background: token.colorBgLayout,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuUnfold />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </LayoutAntD.Header>
        <LayoutAntD.Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: token.colorBgLayout,
          }}
        >
          Content
        </LayoutAntD.Content>
      </LayoutAntD>
    </LayoutAntD>
  )
}
