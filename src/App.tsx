import { ConfigProvider } from 'antd'
import { Layout } from '@/components/layout/Layout'

import '@/styles/index.scss'

const App = (): JSX.Element => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0ad6ef',
          colorBgContainer: '#9ad8e7',
          colorBgLayout: 'whitesmoke',
        },
      }}
    >
      <Layout />
    </ConfigProvider>
  )
}

export default App
