import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  logo: string = "../assets/images/logo-modified.png";
  constructor() { }

  ngOnInit(): void {
  }

}
