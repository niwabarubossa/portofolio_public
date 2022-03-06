import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

import styled from "styled-components";

function Header() {
    return (
        <Grid xs={12}>
            <HeaderWrapper>
                <HeaderItem><Link to="/">TOP</Link></HeaderItem>
            </HeaderWrapper>
        </Grid>
    );
}

export default Header;

const HeaderWrapper = styled.div`
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-bottom: solid 1px #bbbbbb;
`

const HeaderItem = styled.div`
    margin: 0 10px;
    color:#444444;
`