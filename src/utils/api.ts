// const API_URL = "https://cvcrea.alfredoacservices.com";
const API_URL = "http://192.168.1.109:3000";

export async function makePDF(data: any) {
  const res = await fetch(API_URL + "/generator", {
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  if (!res.ok) return "no";
  return "ok";
}
