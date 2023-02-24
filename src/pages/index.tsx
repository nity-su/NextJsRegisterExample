import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Home from "@/components/home/Home";
import { useSearchParams } from "next/navigation";

// import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config();
const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  const name: string | null = useSearchParams().get("name"); //'string | null'

  return (
    <>
      <Home name={name} />
    </>
  );
}

export function IndexForTest() {
  return <div></div>;
}
