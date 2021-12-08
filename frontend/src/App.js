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
import EditPost from "./pages/EditPost";

function App() {
  const [postRefresh, setPostRefresh] = useState(true);
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState("");
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
      <Header setSearch={setSearch} search={search} />
      <Container>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home search={search} articles={articles} />
          </Route>
          <Route path="/category/:id" exact>
            <CategoryBase />
          </Route>
          <Route path="/posts/:id" exact>
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
          <Route path="/posts/:id/edit">
            <EditPost
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
            <AllUsers search={search} />
          </Route>
          <Route path="/admin/posts-list">
            <AllPosts
              search={search}
              postRefresh={postRefresh}
              setPostRefresh={setPostRefresh}
              posts={articles}
            />
          </Route>
          <Route path="/admin/category-list">
            <AllCategory search={search} />
          </Route>
        </Switch>
        <Footer />
      </Container>
    </>
  );
}

export default App;
