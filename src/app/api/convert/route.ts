import { NextRequest, NextResponse } from "next/server";
import Handlebars from "handlebars";

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
