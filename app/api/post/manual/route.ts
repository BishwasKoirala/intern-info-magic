import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { datas } from "@/app/constants/allData";
import { convertToISODate } from "../../utils/utils";

const constantData = datas;



export async function POST(req: NextRequest) {
  try {
    const internData = constantData.map(body => ({
      company: typeof body.主催 === "string" ? body.主催 : "",
      url: typeof body.リンク === "string" ? body.リンク : "",
      hiring: body.募集状況 === "募集中",
      event_name: typeof body.イベント名 === "string" ? body.イベント名 : "",
      event_detail: typeof body["内容 / 必要な経験 (簡潔に!)"] === "string" ? body["内容 / 必要な経験 (簡潔に!)"] : "",
      target_student: typeof body.対象者 === "string" ? body.対象者 : "",
      recruit_begin: typeof body.募集開始 === "string" ? convertToISODate(body.募集開始) : null,
      recruit_end: typeof body.締め切り === "string" ? convertToISODate(body.締め切り) : null,
      tech_stack: typeof body.技術スタック === "string" ? body.技術スタック : "",
      remote: typeof body.場所 === "string" && body.場所.includes("リモート") ? "true" : "false"
      //TODO: 文字列での"true" & "false" です　BOOLではありません！！
    }));

    const interns = await prisma.interns.createMany({
      data: internData
    });

    return NextResponse.json(interns, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 501 });
  }
}
