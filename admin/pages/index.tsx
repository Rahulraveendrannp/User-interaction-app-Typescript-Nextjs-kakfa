import Image from "next/image";
import { Inter } from "next/font/google";
import Main from "@/components/Main";
import Cards from "@/components/Cards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-white">
      <Cards />
      <Main />
 
    </div>
  );
}
