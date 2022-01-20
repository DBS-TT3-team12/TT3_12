import logo from "./logo.svg";
import { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from "./components/login";
import { AuthProvider, useAuthDispatch, useAuthState } from "./context/context";
import { Layout, Button, Breadcrumb } from "antd";
import { logout } from "./context/actions";
import Posts from "./components/Posts.js"
import AddPost from "./components/AddPost"
import EditPost from "./components/EditPost"

import "antd/dist/antd.css";
import "./App.css";

const { Header, Content, Footer } = Layout;

const postDefault = { title: 'Test', desc: 'abcdef', image: 'abc.123' }

function App() {
  const [post, setPost] = useState({})

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home setPost={setPost} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/editpost" element={<EditPost post={post ? post : postDefault} />} />
      </Routes>
    </AuthProvider>
  );
}

function Home({setPost}) {
  const auth = useAuthState();
  const dispatch = useAuthDispatch();
  const navigate = useNavigate();

  const [filterByUser, setFilterByUser] = useState(false);

  function handleEdit(postObject) {
    setPost(postObject)
    navigate("./editpost")
  }

  return (
    <Layout className="layout">
      <Header>
        <h1>Tweeter</h1>
        {auth.user && <h2>You are logged in as {auth.user}.</h2>}
        {!auth.user ? (
          <Button type="primary" onClick={() => navigate("./login")}>
            Login
          </Button>
        ) : (
          <div>
            <Button
              onClick={() => {
                logout(dispatch);
                navigate("/");
              }}
            >
              Logout
            </Button>
            <Button type="primary" onClick={() => navigate("./addPost") } style={{ marginLeft: "4px" }}>
              Upload
            </Button>
            <Button type="primary" onClick={() => setFilterByUser(true) } style={{ marginLeft: "4px" }}>
              My Posts
            </Button>
            <Button type="primary" onClick={() => setFilterByUser(false) } style={{ marginLeft: "4px" }}>
              All Posts
            </Button>
          </div>
        )}
      </Header>
      {auth.user ? <Posts filterByUser={filterByUser} handleEdit={handleEdit} /> :
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
      }
      {/* <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer> */}
    </Layout>
  );
}

export default App;
