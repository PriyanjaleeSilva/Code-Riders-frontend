import { Component, OnInit } from '@angular/core';
import * as M from '../../../../assets/materialize/materialize/js/materialize.min.js';

@Component({
  selector: 'app-tutor-sidenav',
  templateUrl: './tutor-sidenav.component.html',
  styleUrls: ['./tutor-sidenav.component.scss']
})
export class TutorSidenavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  }

}
