import type { NextPage } from "next";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className="display-3">Display 3</h1>
        <input
          className={styles.form}
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Type to search..."
        />
        <datalist id="datalistOptions">
          <option value="San Francisco" />
          <option value="New York" />
        </datalist>
        <button type="submit" className="btn btn-primary mb-3">
          Confirm identity
        </button>
      </div>
    </div>
  );
};

export default Home;
