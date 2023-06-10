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

  ngAfterViewInit(): void {
    let nav = document.getElementById("nav");
    let prevPos = window.pageYOffset;
    window.onscroll = function () {
      let currPos = window.pageYOffset;
      if (prevPos > currPos)
        nav!.style.top = "0";
      else
        nav!.style.top = "-200px";

      prevPos = currPos;
    }
  }

  scrollTo(ancorId: string)
  {
    const element = document.getElementById(ancorId);
    if(element) {
      element.scrollIntoView({behavior:'smooth', block: 'start'})
    }
  }

  openResume(event: Event) {
    event.preventDefault();
    const pdf = "./assets/curriculum.pdf";
    window.open(pdf, "_blank");
  }
}
