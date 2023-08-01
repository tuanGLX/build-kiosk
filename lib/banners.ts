import { APP_URL } from "@/constants/url";
import fetchData from "./fetch";
import { API } from "@/constants/api";

export async function getBanner() {
  const banners = await fetchData(`${APP_URL.API.END_POINT}${API.BANNERS}`);
  const res = await banners;
  return res.data;
}
