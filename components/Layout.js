import Head from "next/head";
import React from "react";
import Header from "./Header";

const Layout = ({ children = "" }) => {
  return (
    <div>
      <Head>
        <title>Medium – Where good ideas find you.</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
