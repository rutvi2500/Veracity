import React, { useEffect, useState } from "react";
import { Layout } from "../components";
import "tailwindcss/tailwind.css";
import "../styles/globals.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() =>  {
    import ('bootstrap/dist/js/bootstrap');
  }, [])
  return (
<>    
    <Layout>
      <Component {...pageProps} />
    </Layout>

    </>
  )
}

export default MyApp