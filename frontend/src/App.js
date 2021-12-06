import { Container } from "react-bootstrap";

// Import Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import Pages
import Home from "./pages/Home";
import Single from "./pages/Single";

import React, { useState, useEffect } from "react";
import axios from "axios";

// Import Router
import { Switch, Route, useLocation } from "react-router-dom";
import Author from "./pages/Author";
import CategoryBase from "./pages/CategoryBase";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewPost from "./pages/NewPost";
import AllUsers from "./pages/Admin/AllUsers";
import AllCategory from "./pages/Admin/AllCategory";
import AllPosts from "./pages/Admin/AllPosts";

function App() {
  const [postRefresh, setPostRefresh] = useState(true);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const { data } = await axios.get("/api/posts/");
      setArticles(data);
    }
    fetchPosts();
  }, [postRefresh]);
  const location = useLocation();
  return (
    <>
      <Header />
      <Container>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home articles={articles} />
          </Route>
          <Route path="/category/:id" exact>
            <CategoryBase />
          </Route>
          <Route path="/posts/:id">
            <Single articles={articles} />
          </Route>
          <Route path="/users/:id">
            <Author postRefresh={postRefresh} setPostRefresh={setPostRefresh} />
          </Route>
          <Route path="/new-post">
            <NewPost
              postRefresh={postRefresh}
              setPostRefresh={setPostRefresh}
            />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/admin/users-list">
            <AllUsers />
          </Route>
          <Route path="/admin/posts-list">
            <AllPosts
              postRefresh={postRefresh}
              setPostRefresh={setPostRefresh}
              posts={articles}
            />
          </Route>
          <Route path="/admin/category-list">
            <AllCategory />
          </Route>
        </Switch>
        <Footer />
      </Container>
    </>
  );
}

export default App;
