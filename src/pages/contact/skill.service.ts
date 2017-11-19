import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { BaseInput } from "ionic-angular/util/base-input";

const BASE_URL = "https://integr8-me.sloppy.zone/skills/my";
const USER_ID = 1;

@Injectable()
export class SkillService {
  constructor(private http: Http) {}

  get() {
    return this.http.get(BASE_URL + "?user=" + USER_ID).toPromise();
  }
}
