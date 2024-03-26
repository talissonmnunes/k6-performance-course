import http from "k6/http";
import { sleep } from "k6";

export const options = {
  vus: 2,
  duration: "5s",
};

console.log(" -- Init stage -- ");

export function setup() {
  console.log(" -- Setup stage -- ");
}

export default function () {
  console.log(" -- VU stage -- ");
}

export function teardown() {
  console.log(" -- Teardown stage -- ");
}
