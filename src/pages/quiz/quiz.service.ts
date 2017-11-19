import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

const BASE_URL = "https://integr8-me.sloppy.zone/challenge";
const USER_ID = 1;

@Injectable()
export class QuizService {
  constructor(private http: Http) {}

  get(id: number) {
    return this.http.get(BASE_URL + "/" + id).toPromise();
  }

  save(id: number, answers: any) {
    const headers = new Headers({
      "Content-Type": "application/x-www-form-urlencoded"
    });

    return this.http
      .post(BASE_URL + `/${id}/save?user=` + USER_ID, answers, {
        headers: headers
      })
      .toPromise();
  }
}
