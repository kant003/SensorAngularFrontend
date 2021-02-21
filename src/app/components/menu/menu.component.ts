import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  getEmailLogued(): string {
    const local = localStorage.getItem('current-user');
    const email = JSON.parse(local!).email;
    return email;
  }
  isLogued(): boolean {
    const local = localStorage.getItem('current-user');
    return local !== null;
  }

  logout() {
    localStorage.removeItem('current-user');
    localStorage.removeItem('auth-token');
  }
}
