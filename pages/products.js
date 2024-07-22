import React from "react";
import Product from "../components/Product";
import Head from "next/head";
import { productdata } from "../data/productdata";


function products() {
  return (
    <>
      <Head>
        <title>Treeminder | Products</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/treeminder.webp" />
      </Head>
      <div>
        {productdata.map((item,index) => {
          return <Product item = {item} ind = {index} key = {index} /> 
        })}
      </div>
    </>
  );
}

export default products;