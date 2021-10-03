import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Top from "./pages/top";
import Profile from "./pages/profile";
import Photo from "./pages/photo";

import { Grid } from "@material-ui/core";
import { AppBar } from "@material-ui/core";

import styled from "styled-components";

function App() {
  return (
    <BrowserRouter>
      <Grid container>
        <AppBar>
          <Link to="/">TOP</Link>
          <Link to="/profile">PROFILE</Link>
          <Link to="/photo">PHOTO</Link>
        </AppBar>
        <Switch>
          <AppHeaderWrapper>
            <Route exact path="/" component={Top}></Route>
            <Route exact path="/profile" component={Profile}></Route>
            <Route exact path="/photo" component={Photo}></Route>
          </AppHeaderWrapper>
        </Switch>
      </Grid>
    </BrowserRouter>
  );
}

export default App;

const AppHeaderWrapper = styled.div`
  padding: 70px 10px 0 10px;
`;
