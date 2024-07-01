import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img className="logo" src="https://plus.unsplash.com/premium_photo-1681966813691-aee3db0b5b5b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="my logo img" />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
//   height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
    width: 6rem;
  }
`;
export default Header;