// components/FetchData.tsx
"use client";
import React, { useState } from "react";
import { useFetch } from "../hooks/useFetchUser";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const FetchData = () => {
  const { data, isloading } = useFetch("/api/get");
  const [showDetails, setShowDetails] = useState<Record<number, boolean>>({});

  const toggleDetails = (id: number) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  if (isloading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-start p-4 space-y-4">
      <h1 className="text-black text-3xl w-full h-min overflow-y-auto p-4 border border-gray-500 rounded-md shadow-lg">インターン情報</h1>
      <p>
        <button className="bg-green-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <Link href="/form">追加はこちら</Link>
        </button>
      </p>
      <div className="w-full h-min overflow-y-auto p-4 border border-gray-300 rounded-md shadow-lg">
        {data &&
          data.map((d: any) => (
            <div key={d.id} className="w-full mb-4">
              <div className="text-xl font-semibold bg-slate-400 border-r-8 rounded-md shadow-md p-2">
                {d.company}
              </div>
              <div>
                <div className="text-xl font-bold mt-2 underline">
                  <Link href={d.url}>{d.event_name}</Link>
                </div>
                <div className="text-lg">対象:全学年</div>
                <div className="text-lg">
                  募集開始:{new Date(d.recruit_begin).toLocaleDateString()}
                </div>
                <div className="text-lg">
                  募集終了:
                  {d.recruit_end
                    ? new Date(d.recruit_end).toLocaleDateString()
                    : "null"}
                </div>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
                  onClick={() => toggleDetails(d.id)}
                >
                  イヴェント詳細
                </button>
              </div>
              {showDetails[d.id] && (
                <div className="p-4 bg-gray-100 rounded-md shadow-md mt-2">
                  <p>{d.event_detail}</p>
                </div>
              )}
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
};

export default FetchData;
