import {Link} from "react-router-dom";
import React from "react";
import styled from "styled-components";

const NavWrapper=styled.div`
  height: 56px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  line-height: 56px;
  box-shadow: 0 0 3px #999;
`;

function Nav(){
    return (
        <NavWrapper>
            <div>
                <Link to="/tags">明细</Link>
            </div>
            <div>
                <Link to="/money">记一笔</Link>
            </div>
            <div>
                <Link to="/statistics">统计</Link>
            </div>
        </NavWrapper>
    )
}

export default Nav;