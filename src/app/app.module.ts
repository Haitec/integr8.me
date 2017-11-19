import { NgModule, ErrorHandler } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { AboutPage } from "../pages/about/about";
import { ProfilePage } from "../pages/profile/profile";
import { ContactPage } from "../pages/contact/contact";
import { DashboardPage } from "../pages/dashboard/dashboard";
import { SkillOverviewPage } from '../pages/skill-overview/skill-overview';
import { TabsPage } from "../pages/tabs/tabs";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    DashboardPage,
    ProfilePage,
    SkillOverviewPage,
    TabsPage
  ],
  imports: [BrowserModule, HttpModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    ProfilePage,
    DashboardPage,
    SkillOverviewPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
