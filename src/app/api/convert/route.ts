import { NextRequest, NextResponse } from "next/server";
import Handlebars from "handlebars";
import { makePDF } from "@/utils/api";
import { dataInfo } from "@/utils/data";

export async function GET() {
  const response = await makePDF(dataInfo);
  const hbsCode =
    "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
    "{{kids.length}} kids:</p>" +
    "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";

  return NextResponse.json({ response });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const response = await fetch("http://localhost:3000/api/backend");
    const apiData = await response.json();
    console.log(apiData);

    const template = Handlebars.compile(apiData.hbsCode);
    const data = template(body.data);
    // const data = await body.data;

    return NextResponse.json({ data, apiData });
  } catch (error) {
    console.log(error);
  }
}
