import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Top from "./pages/top";
import Profile from "./pages/profile";
import Photo from "./pages/photo";

import { Grid } from "@material-ui/core";

import Header from "./components/header"

import styled from "styled-components";

function App() {
  return (
    <BrowserRouter>
      <Grid container>
        <Header />
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
