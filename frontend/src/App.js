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

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const { data } = await axios.get("/api/posts/");
      setArticles(data);
      console.log(data);
    }
    fetchPosts();
  }, []);
  const location = useLocation();
  return (
    <>
      {/* <GlobalStyle /> */}
      <Header />
      <Container>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home articles={articles} />
          </Route>
          <Route path="/posts/:id">
            <Single articles={articles} />
          </Route>
        </Switch>
        <Footer />
      </Container>
    </>
  );
}

export default App;
