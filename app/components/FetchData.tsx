import React from "react";
import { useFetch } from "../hooks/useFetchUser";

const FetchData = (props : any) => {
	const { button } = props;
  const { data } = useFetch("/api/get");
	let result = data;
	if (button == "26卒") {
		result = data?.filter((data) => data.target_student.includes("26") || data.target_student.includes("全学年"));
	}
	else if (button == "27卒") {
		result = data?.filter((data) => data.target_student.includes("27") || data.target_student.includes("全学年"));
	}
	else if (button == "全学年") {
		result = data?.filter((data) => data.target_student.includes("全学年"));
	}
	else if (button == "募集中") {
		result = data?.filter((data) => new Date(data.recruit_end) > new Date());
	}
	else if (button == "募集終了") {
		result = data?.filter((data) => new Date(data.recruit_end) < new Date());
	}
	else if (button == "フロント") {
		result = data?.filter((data) => data.tech_stack.includes("フロント"));
	}
	else if (button == "バック") {
		result = data?.filter((data) => data.tech_stack.includes("バック"));
	}
	else if (button == "ネットワーク") {
		result = data?.filter((data) => data.tech_stack.includes("ネットワーク"));
	}
	else if (button == "対面") {
		result = data?.filter((data) => data.remote=="false");
	}
	else {
		result = data?.filter((data) => data.remote=="true");
	}

  return (
			<div className="relative overflow-scroll overflow-x-auto">
				<table className="table-fixed w-full border-collapse border border-blue-200">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr className="border-separate border border-slate-500">
							<th scope="col" className="sticky top-0 px-6 py-3 bg-gray-100 border border-gray-200 dark:bg-gray-800">会社名</th>
							<th scope="col" className="sticky top-0 px-6 py-3 bg-gray-100 border border-gray-200 dark:bg-gray-800">イベント名</th>
							<th scope="col" className="sticky top-0 px-6 py-3 bg-gray-100 border border-gray-200 dark:bg-gray-800">対象学年</th>
							<th scope="col" className="sticky top-0 px-6 py-3 bg-gray-100 border border-gray-200 dark:bg-gray-800">募集締め切り期日</th>
							<th scope="col" className="sticky top-0 px-6 py-3 bg-gray-100 border border-gray-200 dark:bg-gray-800">技術スタック</th>
							<th scope="col" className="sticky top-0 px-6 py-3 bg-gray-100 border border-gray-200 dark:bg-gray-800">リモート</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
						{result?.map((data) => (
							<tr key={data.id} className="hover:bg-gray-50 dark:hover:bg-gray-600">
								<td className="px-6 py-4 border border-gray-200 dark:border-gray-700">{data.company}</td>
								<td className="px-6 py-4 border border-gray-200 dark:border-gray-700 text-blue-500 underline"><a href={data.url}>{data.event_name}</a></td>
								{/* <td className="border border-gray-500 bg-blue-100">{data.event_name}</td> */}
								<td className="px-6 py-4 border border-gray-200 dark:border-gray-700">{data.target_student}</td>
								<td className="px-6 py-4 border border-gray-200 dark:border-gray-700">{data.recruit_end ? new Date(data.recruit_end).toLocaleDateString() : ""}</td>
								<td className="px-6 py-4 border border-gray-200 dark:border-gray-700">{data.tech_stack}</td>
								<td className="px-6 py-4 border border-gray-200 dark:border-gray-700">{data.remote === "true" ? "リモート":"対面"}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
  );
};

export default FetchData;
