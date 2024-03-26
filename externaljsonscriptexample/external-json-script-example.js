import http from "k6/http";
import {
  randomString,
  randomItem,
} from "https://jslib.k6.io/k6-utils/1.2.0/index.js";

import { check } from "k6";
import { SharedArray } from "k6/data";

const userCredentials = new SharedArray("users whit chredentials", function () {
  return JSON.parse(
    open("users/users.json")
  ).users;
});

export default function () {
  /* USED TO REGISTER ALL USERS USING A JSON FILE
  userCredentials.forEach((item) => {
    const credentials = {
      username: item.username,
      password: item.password,
    };

    let res = http.post(
      "https://test-api.k6.io/user/register",
      JSON.stringify(credentials),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    check(res, {
      "status is 201": (r) => r.status === 201,
    });
  });
*/
  const randomCredential = randomItem(userCredentials);

  let res = http.post(
    "https://test-api.k6.io/auth/yoken/login/",
    JSON.stringify({
      username: randomCredential.username,
      password: randomCredential.password,
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  check(res, {
    "status code is 200": (r) => r.status === 200,
    "has access token": (r) => r.json() !== undefined,
  });

  const accessToken = res.json().access;
}
