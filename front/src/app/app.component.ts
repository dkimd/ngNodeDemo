import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isSideBySide = true;
  private sideBySideWidth = 720;

  constructor(
    private _router: Router,
  ) { }

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  ngOnInit() {
    this.onResize(window.innerWidth);
    this._router.events.subscribe(() => {
      if (!this.isOpened()) {
        this.sidenav.close();
      }
    });
  }

  @HostListener('window:resize', ['$event.target.innerWidth'])
  onResize(width) {
    this.isSideBySide = width > this.sideBySideWidth;
  }

  isOpened(): boolean {
    return this.isSideBySide;
  }

}
