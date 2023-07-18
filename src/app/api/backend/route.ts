import { NextRequest, NextResponse } from "next/server";
import Handlebars from "handlebars";

export async function GET() {
  const hbsCode =
    "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
    "{{kids.length}} kids:</p>" +
    "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";

  const data = {
    name: "Alan",
    hometown: "Somewhere, TX",
    kids: [
      { name: "Jimmy", age: "12" },
      { name: "Sally", age: "4" },
    ],
  };

  return NextResponse.json({ hbsCode, data });
}
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log(body);

    const template = Handlebars.compile(body.hbsCode);
    const response = template(body.data);

    return NextResponse.json({ data: response });
  } catch (error) {
    console.log(error);
  }
}
