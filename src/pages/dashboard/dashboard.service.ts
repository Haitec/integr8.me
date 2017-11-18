import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { BaseInput } from "ionic-angular/util/base-input";

const BASE_URL = "/api/dashboard";

@Injectable()
export class DashboardService {
  constructor(private http: Http) {}

  get(userId: string = "1") {
    return this.http.get(BASE_URL + "?user=" + userId).toPromise();
  }
}
