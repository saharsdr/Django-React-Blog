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

// Import Router
import { Switch, Route, useLocation } from "react-router-dom";
import Hero from "./components/Hero";

function App() {
  const location = useLocation();
  return (
    <>
      {/* <GlobalStyle /> */}
      <Header />
      <Container>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/posts/:id">
            <Single />
          </Route>
        </Switch>
        <Footer />
      </Container>
    </>
  );
}

export default App;
