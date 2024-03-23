import http from "k6/http";
import { check, sleep, group } from "k6";

export const options = {
  thresholds: {
    http_req_duration: ["p(95)<250"],
    "http_req_duration{expected_response: true}": ["p(95)<250"],
    "group_duration{group:::Main page}": ["p(95)<8000"],
    "group_duration{group:::Main page::Assets}": ["p(95)<3000"],
    "group_duration{group:::News page}": ["p(95)<6000"],
  },
};

export default function () {
  group("Main page", function () {
    let res = http.get("https://run.mocky.io/v3/ddd4a780-0b81-44f3-ac15-1b4332af3cfa?mocky-delay=5000ms");
    check(res, { "status is 200": (r) => r.status === 200 });

    group("Assets", function () {
      let res = http.get("https://run.mocky.io/v3/ddd4a780-0b81-44f3-ac15-1b4332af3cfa?mocky-delay=1000ms");
      check(res, { "status is 200": (r) => r.status === 200 });
      res = http.get("https://run.mocky.io/v3/ddd4a780-0b81-44f3-ac15-1b4332af3cfa?mocky-delay=1000ms");
      check(res, { "status is 200": (r) => r.status === 200 });
    });
  });

  group("News page", function () {
    let res = http.get("https://run.mocky.io/v3/8d3b908b-b72b-49ea-8275-9e711cb1d9c7");
    check(res, { "status is 200": (r) => r.status === 200 });
  });

  sleep(1);
}
