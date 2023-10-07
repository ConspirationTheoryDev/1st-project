import { Button, Layout as LayoutAntD, Menu } from 'antd'
import {
  GiSteeltoeBoots,
  GiClothes,
  GiSoccerBall,
  GiCutDiamond,
} from 'react-icons/gi'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { MdWorkspacePremium, MdOutlineContentCut } from 'react-icons/md'
import { useState } from 'react'
import { theme } from 'antd'
import { Category } from './Category/Category'
import { Banner } from '../Banner/Banner'

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
              label: 'Obuwie',
            },
            {
              key: '2',
              icon: <GiClothes />,
              label: 'Odzież',
            },
            {
              key: '3',
              icon: <GiSoccerBall />,
              label: 'Sport',
            },
            {
              key: '4',
              icon: <GiCutDiamond />,
              label: 'Akcesoria',
            },
            {
              key: '5',
              icon: <MdWorkspacePremium />,
              label: 'Premium',
            },
            {
              key: '6',
              icon: <MdOutlineContentCut />,
              label: 'Promocje',
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
          <Category />
        </LayoutAntD.Header>
        <LayoutAntD.Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: token.colorBgLayout,
          }}
        >
          <Banner />
        </LayoutAntD.Content>
      </LayoutAntD>
    </LayoutAntD>
  )
}
