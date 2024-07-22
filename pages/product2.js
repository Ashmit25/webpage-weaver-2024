import React from 'react'
import styles from "../styles/Product.module.css";
import Image from "next/image";


function product2() {
  return (
    <div className = {styles.productnum}>
      <div className = {styles.prodtext}>
        <h1>Treeminder Camera   </h1>
        <p>
        Treeminder Camera is CCTV camera offered by Treeminder which comes with a pre-integrated Treeminder AI and pre-setup with Treeminder Client. It is usually the best option to choose for a hassle-free setup. It also comes with Treeminder's Early Tree Warning System at no extra cost.Treeminder Camera is CCTV camera offered by Treeminder which comes with a pre-integrated Treeminder AI and pre-setup with Treeminder Client. It is usually the best option to choose for a hassle-free setup. It also comes with Treeminder's Early Tree Warning System at no extra cost.Treeminder Camera is CCTV camera offered by Treeminder which comes with a pre-integrated Treeminder AI and pre-setup with Treeminder Client. It is usually the best option to choose for a hassle-free setup. It also comes with Treeminder's Early Tree Warning System at no extra cost. Treeminder Camera is CCTV camera offered by Treeminder which comes with a pre-integrated Treeminder AI and pre-setup with Treeminder Client. It is usually the best option to choose for a hassle-free setup. It also comes with Treeminder's Early Tree Warning System at no extra cost.
        </p>
      </div>
      <Image src='/black_cctv.svg' height = {300} width ={300} alt = "product 1" />
    </div>
  )
}

export default product2
