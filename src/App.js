import s from './App.module.css';
import { Layout, theme } from 'antd';
import RouteMapContainer from './Components/RouteMap/RouteMapContainer';

const { Header, Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className={s.mainLayout}>
      <Layout>
        <Header className={s.header} style={{ background: colorBgContainer }} />
        <Content className={s.content} style={{ background: colorBgContainer }}>
          <RouteMapContainer />
        </Content>
        <Footer className={s.footer}>Intelogis ©2023 Created by DKurushin</Footer>
      </Layout>
    </Layout>
  );
}

export default App;
