import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  //Value for the route
  route: string = "/index";
  constructor(private router: Router, location: Location) { 

    //Get the route to give the active class
    router.events.subscribe(val => {
      if(location.path() != "") {
        this.route = location.path();
      }
      else {
        this.route = "/index";
      }
    })

  }

  ngOnInit(): void {
    console.log(this.route)
  }

  //Redirect link
  redirect(path: string) {
    this.router.navigate([path]);
  }

}
