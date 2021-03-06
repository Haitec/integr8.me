import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { BaseInput } from "ionic-angular/util/base-input";

const BASE_URL = "https://integr8-me.sloppy.zone";
const USER_ID = 1;

@Injectable()
export class DashboardService {
  constructor(private http: Http) {}

  get() {
    return this.http.get(BASE_URL + "/dashboard?user=" + USER_ID).toPromise();
  }

  favourite(isFavourite: boolean = true, jobId: number) {
    const fav = isFavourite ? "1" : "0";
    return this.http
      .get(BASE_URL + `/job/${jobId}/favourite/${fav}?user=` + USER_ID)
      .toPromise();
  }
}
