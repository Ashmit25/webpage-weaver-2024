import React from "react";
import styles from "../styles/Product.module.css";
import Image from "next/image";

function product1() {
  return (
    <div className = {styles.productnum}>
      <div className = {styles.prodtext}>
        <h1>Treeminder AI</h1>
        <p>
        Treeminder Ai is a software which can be integrated into existing CCTV cameras. It detects patterns of falling trees which can occur due to numerous reasons (hollowing of the trunk in old trees, storms, termites etc. Treeminder's Early Tree Warning System with have to be purchased addtionally. Treeminder Ai is a software which can be integrated into existing CCTV cameras. It detects patterns of falling trees which can occur due to numerous reasons (hollowing of the trunk in old trees, storms, termites etc. Treeminder's Early Tree Warning System with have to be purchased addtionally. Treeminder Ai is a software which can be integrated into existing CCTV cameras. It detects patterns of falling trees which can occur due to numerous reasons (hollowing of the trunk in old trees, storms, termites etc. Treeminder's Early Tree Warning System with have to be purchased addtionally.
        </p>
      </div>
      <Image src='/green_cctv.svg' height = {300} width ={300} alt = "product 1" />
    </div>
  );
}

export default product1;
