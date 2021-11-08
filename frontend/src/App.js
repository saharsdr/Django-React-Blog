import { Container } from "react-bootstrap";

// Import GlobalStyle
// eslint-disable-next-line
import GlobalStyle from "./components/GlobalStyle";

// Import Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav100 from "./components/Nav";

// Import Pages
import Home from "./pages/Home";
import Single from "./pages/Single";
import Login from "./pages/Login";

// Import Router
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div>
      <GlobalStyle />
      <Container>
        <Nav100 />
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/post/:id">
            <Single />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
          {/* </Route> */}
        </Switch>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
