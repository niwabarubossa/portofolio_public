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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Grid container>
        {/* <Header /> */}
        <Switch>
          <AppHeaderWrapper>
            <Route exact path="/" component={Top}></Route>
          </AppHeaderWrapper>
        </Switch>
      </Grid>
    </BrowserRouter>
  );
}

export default App;

const AppHeaderWrapper = styled.div`
  padding: 30px 10px 0 10px;
`;
