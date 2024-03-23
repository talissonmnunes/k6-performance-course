import http from "k6/http";

export const options = {
    thresholds: {
        http_req_duration: ['p(95)<1000'],
        'http_req_duration{status:200}': ['p(95)<1000'],
        'http_req_duration{status:201}': ['p(95)<1000'],
    }
}

export default function () {
    http.get('https://run.mocky.io/v3/78b4aebd-d990-48ec-8970-622f9fa54cd8');
    http.get('https://run.mocky.io/v3/bcedd1c9-9ebc-4810-bc3d-fa02a742de2d?mocky-delay=2000ms');
}

