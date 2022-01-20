import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from "./components/login";
import { AuthProvider, useAuthDispatch, useAuthState } from "./context/context";
import { Layout, Button, Breadcrumb } from "antd";
import { logout } from "./context/actions";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

function Home() {
  const auth = useAuthState();
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();

  return (
    <Layout className="layout">
      <Header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Tweeter</h1>  
        {!auth.user ? (
          <Button type="primary" onClick={() => navigate("./login")}>
            Login
          </Button>
        ) : (
          <Button
            onClick={() => {
              logout(dispatch);
              navigate("/");
            }}
          >
            Logout
          </Button>
        )}
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default App;
