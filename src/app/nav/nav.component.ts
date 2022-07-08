import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  path: string = "../assets/images/profile.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
