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
      router.push("/");
    } else {
      console.log("failed submission");
    }

    reset();
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 text-black border-black border rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">インターン情報フォーム</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-black">
        <div className="form-control">
          <label htmlFor="company" className="label">
            <span className="">会社名</span>
          </label>
          <input id="company" {...register("company")} className="input input-bordered w-full bg-white border-black" />
          {errors.company && <p className="mt-2 text-sm text-red-600">{errors.company.message}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="url" className="label">
            <span className="">URL</span>
          </label>
          <input id="url" {...register("url")} className="input input-bordered w-full bg-white border-black" />
          {errors.url && <p className="mt-2 text-sm text-red-600">{errors.url.message}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="hiring" className="label cursor-pointer">
            <span className="">募集中</span>
            <input type="checkbox" id="hiring" {...register("hiring")} className="checkbox checkbox-primary border-black" />
          </label>
          {errors.hiring && <p className="mt-2 text-sm text-red-600">{errors.hiring.message}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="event_name" className="label">
            <span className="">イベント名</span>
          </label>
          <input id="event_name" {...register("event_name")} className="input input-bordered w-full bg-white border-black" />
          {errors.event_name && <p className="mt-2 text-sm text-red-600">{errors.event_name.message}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="event_detail" className="label">
            <span className="">詳細</span>
          </label>
          <input id="event_detail" {...register("event_detail")} className="input input-bordered w-full bg-white border-black" />
          {errors.event_detail && <p className="mt-2 text-sm text-red-600">{errors.event_detail.message}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="target_student" className="label">
            <span className="">対象学年</span>
          </label>
          <input id="target_student" {...register("target_student")} className="input input-bordered w-full bg-white border-black" />
          {errors.target_student && <p className="mt-2 text-sm text-red-600">{errors.target_student.message}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="recruit_begin" className="label">
            <span className="">募集開始日</span>
          </label>
          <input type="date" id="recruit_begin" {...register("recruit_begin")} className="input input-bordered w-full bg-white border-black" />
          {errors.recruit_begin && <p className="mt-2 text-sm text-red-600">{errors.recruit_begin.message}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="recruit_end" className="label">
            <span className="">募集締め切り期日</span>
          </label>
          <input type="date" id="recruit_end" {...register("recruit_end")} className="input input-bordered w-full bg-white border-black" />
          {errors.recruit_end && <p className="mt-2 text-sm text-red-600">{errors.recruit_end.message}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="tech_stack" className="label">
            <span className="">技術スタック</span>
          </label>
          <input id="tech_stack" {...register("tech_stack")} className="input input-bordered w-full bg-white border-black" />
          {errors.tech_stack && <p className="mt-2 text-sm text-red-600">{errors.tech_stack.message}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="remote" className="label">
            <span className="">場所／実施方法</span>
          </label>
          <input id="remote" {...register("remote")} className="input input-bordered w-full bg-white border-black" />
          {errors.remote && <p className="mt-2 text-sm text-red-600">{errors.remote.message}</p>}
        </div>
        <div className="form-control mt-4 flex justify-between">
          <button type="submit" className="btn btn-primary w-full mr-2">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Page;
