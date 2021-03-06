import React from "react";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import theme from "../components/ui/Theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Height } from "@material-ui/icons";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            component={() => <div style={{ height: "2000px" }}>Home</div>}
          />
          <Route exact path="/services" component={() => <div>Services</div>} />
          <Route
            exact
            path="/customsoftware"
            component={() => <div>custom Software</div>}
          />
          <Route
            exact
            path="/mobileapps"
            component={() => <div>Mobile Apps</div>}
          />
          <Route exact path="/websites" component={() => <div>Webites</div>} />
          <Route
            exact
            path="/revolution"
            component={() => <div>The Revolution</div>}
          />
          <Route exact path="/about" component={() => <div>About Us</div>} />
          <Route
            exact
            path="/contact"
            component={() => <div>Contact Us</div>}
          />
          <Route exact path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
