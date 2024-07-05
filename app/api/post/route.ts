import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { convertToISODate } from "../utils/utils";

import { schema } from "../schema/schema";

export async function POST(req:NextRequest , res : NextResponse) {

  try{

    const body = await req.json()
    const validation = schema.safeParse(body)
    if(!validation.success){
      return NextResponse.json({error : validation.error.errors})
    }
    
    const intern = await prisma.interns.create({
      data : {
        company : body.company,
        url : body.url,
        hiring : body.hiring,
        event_name : body.event_name ,
        event_detail : body.event_detail,
        target_student : body.target_student,
        recruit_begin : convertToISODate(body.recruit_begin),
        recruit_end : convertToISODate(body.recruit_end),
        tech_stack : body.tech_stack,
        remote : body.remote
        
      }
    })
    
    return NextResponse.json(intern)
  } catch (error) {
    return NextResponse.json({error : error} , {status : 501})
  }
}

