"use client";
import React from "react";
import { schema } from "../api/schema/schema";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Link from "next/link";

type FormType = z.infer<typeof schema>;

const Page = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormType>({ resolver: zodResolver(schema) });

  const router = useRouter();

  const onSubmit = async (formData: FormType) => {
    const response = await fetch("/api/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("success");
      // フォーム送信後にホームページにリダイレクト
      router.push("/");
    } else {
      console.log("failed submission");
    }

    reset();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">会社名</label>
          <input id="company" {...register("company")} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          {errors.company && <p className="mt-2 text-sm text-red-600">{errors.company.message}</p>}
        </div>
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700">URL</label>
          <input id="url" {...register("url")} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          {errors.url && <p className="mt-2 text-sm text-red-600">{errors.url.message}</p>}
        </div>
        <div>
          <label htmlFor="hiring" className="block text-sm font-medium text-gray-700">募集中</label>
          <input type="checkbox" id="hiring" {...register("hiring")} className="mt-1 block" />
          {errors.hiring && <p className="mt-2 text-sm text-red-600">{errors.hiring.message}</p>}
        </div>
        <div>
          <label htmlFor="event_name" className="block text-sm font-medium text-gray-700">イベント名</label>
          <input id="event_name" {...register("event_name")} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          {errors.event_name && <p className="mt-2 text-sm text-red-600">{errors.event_name.message}</p>}
        </div>
        <div>
          <label htmlFor="event_detail" className="block text-sm font-medium text-gray-700">詳細</label>
          <input id="event_detail" {...register("event_detail")} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          {errors.event_detail && <p className="mt-2 text-sm text-red-600">{errors.event_detail.message}</p>}
        </div>
        <div>
          <label htmlFor="target_student" className="block text-sm font-medium text-gray-700">対象学年</label>
          <input id="target_student" {...register("target_student")} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          {errors.target_student && <p className="mt-2 text-sm text-red-600">{errors.target_student.message}</p>}
        </div>
        <div>
          <label htmlFor="recruit_begin" className="block text-sm font-medium text-gray-700">募集開始日</label>
          <input type="date" id="recruit_begin" {...register("recruit_begin")} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          {errors.recruit_begin && <p className="mt-2 text-sm text-red-600">{errors.recruit_begin.message}</p>}
        </div>
        <div>
          <label htmlFor="recruit_end" className="block text-sm font-medium text-gray-700">募集締め切り期日</label>
          <input type="date" id="recruit_end" {...register("recruit_end")} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          {errors.recruit_end && <p className="mt-2 text-sm text-red-600">{errors.recruit_end.message}</p>}
        </div>
        <div>
          <label htmlFor="tech_stack" className="block text-sm font-medium text-gray-700">技術スタック</label>
          <input id="tech_stack" {...register("tech_stack")} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          {errors.tech_stack && <p className="mt-2 text-sm text-red-600">{errors.tech_stack.message}</p>}
        </div>
        <div>
          <label htmlFor="remote" className="block text-sm font-medium text-gray-700">リモート</label>
          <input id="remote" {...register("remote")} className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          {errors.remote && <p className="mt-2 text-sm text-red-600">{errors.remote.message}</p>}
        </div>
        <div className="flex space-x-4">
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Submit</button>
          <Link href="/" className="w-full">
            <button className="w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">ホーム画面はこちら</button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Page;
