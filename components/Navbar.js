import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'


function Navbar() {
  return (
    <div className = {styles.navbar}>
      <Link href = "/"><Image src="/treeminder.webp" width={90} height={90} alt = "logo" /></Link>
      <div className = {styles.navlinks}>
        <Link className={styles.navlink} href = "/">Home</Link>
        <Link className={styles.navlink} href = "/products">Products</Link>
        <Link  className = {styles.signup} href = "/signup">Sign Up</Link>
      </div>
    </div>
  )
}

export default Navbar
