import http from "k6/http";
import { check } from "k6";

export default function () {
  const res = http.get("https://test.k6.io");
  check(res, {
    "requisition status code is 200": (r) => r.status === 200,
    "the request page is startpage": (r) =>
      r.body.includes(
        "Collection of simple web-pages suitable for load testing."
      ),
  });
}
