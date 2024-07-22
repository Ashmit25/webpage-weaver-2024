import React from "react";
import styles from "../styles/Signup.module.css";
import Head from "next/head";
import Link from 'next/link';

function signup() {
  return (
    <>
      <Head>
        <title>Treeminder | Sign Up</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/treeminder.webp" />
      </Head>
      <div className={styles.signup}>
        <h1>Sign Up</h1>
        <form>
          <div className={styles.inputgroup}>
            <label>Username</label>
            <input type="text" placeholder="Username123" />
          </div>
          <div className={styles.inputgroup}>
            <label>Email</label>
            <input type="text" placeholder="example@email.com" />
          </div>
          <div className={styles.inputgroup}>
            <label>Password</label>
            <input type="password" />
          </div>
          <div className={styles.inputgroup}>
            <label>Confirm Password</label>
            <input type="password" />
          </div>
          <div className={styles.inputgroup}>
            <button className={styles.button} type="submit">Sign Up</button>
          </div>
        </form>
        <div className={styles.inputgroup}>
          Already Have An Account?{" "}
          <Link className={styles.signlink} href="/signin">
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
}

export default signup;
