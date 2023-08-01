import { APP_URL } from "@/constants/url";
import fetchData from "./fetch";
import { API } from "@/constants/api";

export async function getConcessionByCinema(id: string) {
  const concessions = await fetchData(
    `${APP_URL.API.END_POINT}${API.CONCESSION_BY_CINEMAID}/${id}`
  );
  const res = await concessions;
  return res.data;
}
