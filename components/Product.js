import React from "react";
import Image from "next/image";
import styles from "../styles/Product.module.css"
import Link from "next/link";

function Product({ item }) {
  return (
    <div className={styles.product}>
      
      <div className={styles.productcontent}>
        <h1>{item.name}</h1>
        <p>{item.content} </p>
        <p className={styles.know}><Link href ={item.link}>Know More</Link></p>
        </div>
        <Image src={item.image} height={200} width={400} alt={item.name} />
      
    </div>
  
  );
}

export default Product;