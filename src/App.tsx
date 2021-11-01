import React from 'react';
import styled from 'styled-components';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import Nav from "./components/Nav";

const Wrapper=styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main=styled.div`
  width: 100%;
  height: calc(100vh - 56px);
`;



function App() {
  return (
      <Router>
          <Wrapper>
              <Main>
                  <Switch>
                      <Route exact path="/tags">
                          <Tags />
                      </Route>
                      <Route path="/money">
                          <Money />
                      </Route>
                      <Route path="/statistics">
                          <Statistics />
                      </Route>
                      <Redirect
                          exact
                          from="/"
                          to="money"
                      />
                      <Route path="*">
                          <NoMatch />
                      </Route>
                  </Switch>
              </Main>
              <Nav />
          </Wrapper>
      </Router>
  );
}
function Tags() {
    return (
        <div>
            <h2>明细</h2>
        </div>
    );
}

function Money() {
    return (
        <div>
            <h2>记账</h2>
        </div>
    );
}

function Statistics() {
    return (
        <div>
            <h2>统计</h2>
        </div>
    );
}

function NoMatch() {
    return(
        <div>
            页面不存在，"404"
        </div>
    )
}
export default App;
