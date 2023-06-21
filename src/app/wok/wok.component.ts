import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wok',
  templateUrl: './wok.component.html',
  styleUrls: ['./wok.component.css']
})
export class WokComponent implements OnInit {

  img1: string = "../assets/images/vstheme.png";
  qm: string = "../assets/images/qm.svg";

  constructor() { }

  ngOnInit(): void {
  }

}
