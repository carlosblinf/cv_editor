"use server";
import Handlebars from "handlebars";

export async function render(data: any) {
  const hbsCode =
    "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
    "{{kids.length}} kids:</p>" +
    "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
  const template = Handlebars.compile(hbsCode);
  // return new Promise((resolve, reject) => {
  //   resolve(template);
  // });
  return template(data);
  //   console.log(template);
  //   return template;
}
