'use strict';

import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Video, VideoCardComponent } from './video-card.component';

@Component({
    moduleId: module.id,
    selector: 'home',
    template: `
  <h1>Mahesh Chandra</h1>
  <div class="mui--text-dark-secondary mui--text-body2">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</div>
  <div class="mui-divider"></div>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `
})
export class HomeComponent {
    resultsPerPage: number;
    totalResults: number;
    videos = [];
    constructor(public http: Http) {

    }
    ngOnInit() {
        this.http.get('/data.json').subscribe((res) => {
            const data = res.json();
            this.resultsPerPage = data.pageInfo.resultsPerPage;
            this.totalResults = data.pageInfo.totalResults;
            this.videos = data.items.map((video) => new Video(video));
        });
    }
}
