export class FetchError extends Error {
  response;
  data;
  constructor({ message, response, data }: any) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FetchError);
    }
    this.name = "FetchError";
    this.response = response;
    this.data = data ?? { message: message };
  }
}

export default async function fetchData(url: string) {
  const response = await fetch(url, {
    method: "GET",
    headers: [
      ["clientid", `${process.env.CLIENT_ID}`],
      ["session-id", `d675e0bb-3ab5-4a84-a882-15aeb452767f`],
    ],
  });
  return await response.json();
}
