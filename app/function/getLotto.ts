import { API_URL } from "../constant";
import { getThisWeek } from "./getWeek";

export async function getLotto() {
  const response = await fetch(API_URL + getThisWeek(), {
    cache: "no-store",
  });
  const json = await response.json();
  if (json.returnValue === "fail") {
    const response = await fetch(API_URL + (getThisWeek() - 1));
    const json = await response.json();
    return json;
  }
  return json;
}
