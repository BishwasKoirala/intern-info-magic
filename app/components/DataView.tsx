"use client";
import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetchUser";
import Link from "next/link";

interface Props {
  filterButton: string;
}

const DataView = ({ filterButton }: Props) => {
  const { data, isloading } = useFetch("/api/get");
  const [showDetails, setShowDetails] = useState<Record<number, boolean>>({});
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    if (data) {
      let result = data;
      if (filterButton === "26卒") {
        result = data.filter((d) => d.target_student.includes("26") || d.target_student.includes("全学年"));
      } else if (filterButton === "27卒") {
        result = data.filter((d) => d.target_student.includes("27") || d.target_student.includes("全学年"));
      } else if (filterButton === "全学年") {
        result = data.filter((d) => d.target_student.includes("全学年"));
      } else if (filterButton === "募集中") {
        result = data.filter((d) => new Date(d.recruit_end) > new Date());
      } else if (filterButton === "募集終了") {
        result = data.filter((d) => new Date(d.recruit_end) < new Date());
      } else if (filterButton === "フロント") {
        result = data.filter((d) => d.tech_stack.includes("フロント"));
      } else if (filterButton === "バック") {
        result = data.filter((d) => d.tech_stack.includes("バック"));
      } else if (filterButton === "ネットワーク") {
        result = data.filter((d) => d.tech_stack.includes("ネットワーク"));
      } else if (filterButton === "対面") {
        result = data.filter((d) => d.remote === "false");
      } else if (filterButton === "リモート") {
        result = data.filter((d) => d.remote === "true");
      }
      setFilteredData(result);
    }
  }, [filterButton, data]);

  const toggleDetails = (id: number) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  if (isloading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-start p-4 space-y-4 text-black">
      <h1 className="text-black text-3xl w-full h-min overflow-y-auto p-4 border border-gray-500 rounded-md shadow-lg">インターン情報</h1>
      <p>
        <button className="bg-green-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <Link href="/form">追加はこちら</Link>
        </button>
      </p>
      <div className="w-full h-min overflow-y-auto p-4 border border-gray-300 rounded-md shadow-lg">
        {filteredData &&
          filteredData.map((d) => (
            <div key={d.id} className="w-full mb-4">
              <div className="text-xl font-semibold bg-slate-400 border-r-8 rounded-md shadow-md p-2">
                {d.company}
              </div>
              <div>
                <div className="text-xl font-bold mt-2 underline">
                  <Link href={d.url}>{d.event_name}</Link>
                </div>
                <div className="text-lg">対象: {d.target_student}</div>
                <div className="text-lg">
                  募集開始: {new Date(d.recruit_begin).toLocaleDateString()}
                </div>
                <div className="text-lg">
                  募集終了: {d.recruit_end ? new Date(d.recruit_end).toLocaleDateString() : "null"}
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
    </div>
  );
};

export default DataView;
