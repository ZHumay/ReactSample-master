
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom'
import AntdTable from './AntdTable';
const { Header, Content, Footer } = Layout;

function AntdPage() {
    let navigate = useNavigate();
  return (
  <>
   <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: 1,
                            label: 'Page',
                            onClick: () => navigate('/')
                        },
                        {
                            key: 2,
                            label: 'Add',
                            onClick: () => navigate('/add')

                        }

                    ]
                    }
                />
          
            </Header>
            <Content style={{ padding: '60px 50px' }}>
                <AntdTable/>
                </Content>

            <Footer>

            </Footer>

        </Layout>
  </>
  )
}

export default AntdPage