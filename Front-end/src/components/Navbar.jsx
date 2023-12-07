import React from "react";
import logo from "../images/shop.png";
import styled from "styled-components";
const Navbar = () => {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="" />
      </Logo>
      <Links>
        <div className="links">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
        <Buttons>
          <button>Login</button>
          <button>Sign in</button>
        </Buttons>
      </Links>
    </Container>
  );
};
export default Navbar;
const Container = styled.div`
  display: flex;
  background-color: #3376da39;
  height: 80px;
  justify-content: space-between;
  padding: 0 80px;
`;
const Logo = styled.div`
  height: 100%;
  img {
    height: 100%;
  }
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  .links {
    margin-left: 25px;
    display: flex;
    align-items: center;
    gap: 25px;
    a {
      text-decoration: none;
      color: black;
      font-size: 20px;
    }
  }
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
  button {
    padding: 10px 25px;
    border: none;
    background-color: #bcddbc;
    color: black;
    border-radius: 10px;
    cursor: pointer;
  }
`;
