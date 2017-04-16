'use strict';

import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    styles: [`
  .router-link-active {
    text-decoration: underline;
  }
  `],
    template: `
  <div>
    <div id="sidebar">
      <nav>
        <a routerLink="/" routerLinkActive="active">Home</a>
        <hr>
        <a routerLink="/about" routerLinkActive="active">About</a>
      </nav>
    </div>
    <div class="mui-appbar" id="main-bar">
      <div class="mui-container-fluid">
        <nav class="mui-row" role="navigation">
          <div class="mui-col-sm-8 mui-col-sm-offset-2">
            Mahesh Chandra
          </div>
        </nav>
      </div>
    </div>
    <div id="content" class="mui-container-fluid">
      <main class="mui-row">
        <div class="mui-col-sm-8 mui-col-sm-offset-2">
          <router-outlet></router-outlet>
        </div>
      </main>
    </div>
  </div>
  `
})

export class AppComponent { }
