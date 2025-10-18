import React from "react";
import Navbar from "../Compnents/Navbar/Navbar";
import { Outlet } from "react-router";
import Container from "../Compnents/Container/Container";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen flex flex-col">
      <header>
        <Container>
          <Navbar />
        </Container>
      </header>
      <section className="flex-1 flex justify-center items-center">
        <Outlet />
      </section>
    </div>
  );
};

export default AuthLayout;
