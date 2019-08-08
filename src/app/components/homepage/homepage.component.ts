import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';


import * as M from '../../../assets/materialize/materialize/js/materialize.min.js'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  registerUserData = {};

  options = {};

  constructor(
    private _auth: AuthenticationService
  ) { }

  ngOnInit() {
    //slider
    const slider = document.querySelector('.slider');
    M.Slider.init(slider, {
        indicators: false,
        height: 500,
        transition: 500,
        interval: 6000
      });

      // Auto Complete - search
    const ac = document.querySelector('.autocomplete');
    M.Autocomplete.init(ac, {
        data: {
          "Aruba": null,
          "Cancun Mexico": null,
          "Hawaii": null,
          "Florida": null,
          "California": null,
          "Jamaica": null,
          "Europe": null,
          "The Bahamas": null,
        }
      });

      // Scrollspy - search
    const ss = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(ss, {});
  
  }

  registerUser(){
    
    this._auth.registerUser(this.registerUserData)
       .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          },
          err => console.log(err)
       )
  }

  
}


