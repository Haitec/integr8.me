import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Loading,
  LoadingController
} from "ionic-angular";

import { QuizService } from "./quiz.service";
import { clamp } from "ionic-angular/util/util";
import { query } from "@angular/core/src/animation/dsl";

class Question {
  id: number;
  description: string;
  answers: Answer[];
}

class Answer {
  id: number;
  descripton: string;
  correct: boolean;
}

@Component({
  selector: "page-quiz",
  templateUrl: "quiz.html",
  providers: [QuizService]
})
export class QuizPage {
  loader: Loading;
  id: number = 1;
  title: string;
  questions: Question[] = [];
  answers = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private service: QuizService
  ) {
    this.id = this.navParams.data.id;
    this.title = this.navParams.data.name;
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loader.present();
  }

  dismissLoading() {
    this.loader.dismiss();
  }

  ionViewDidLoad() {
    this.service
      .get(this.id)
      .then(resp => {
        this.questions = resp.json();
      })
      .catch(error => console.log("[ERROR]", error));
  }

  submit() {
    this.presentLoading();
    console.log(this.answers);
    this.service
      .save(this.id, this.answers)
      .then(resp => {
        this.navCtrl.popToRoot();
      })
      .catch(error => console.log(error));
    this.dismissLoading();
  }

  selectAnswer(questionId: number, answerId: number) {
    this.answers[questionId] = answerId;
  }
}
