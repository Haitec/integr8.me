import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = DashboardPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = ProfilePage;

  constructor() {

  }
}
