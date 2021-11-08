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
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Container>
        <Nav100 />
        <Routes>
          {/* <Route path="/" element={<Home />}> */}
          <Route path="/" index element={<Home />} />
          <Route path="/single/:id" element={<Single />} />
          <Route path="/Login" element={<Login />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
          {/* </Route> */}
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
