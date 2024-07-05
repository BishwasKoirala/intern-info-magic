'use client'
import FetchData from "./components/FetchData";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

export default function Home() {
  const [button, setButton] = useState("");
	const onChange = (e:string) => {
		setButton(e);
	};

  return (
    <div>
      <Header onChange={onChange}> 
      </Header>
      <main className="flex h-screen flex-col items-center p-24">
        <FetchData button={button} />
      </main>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
