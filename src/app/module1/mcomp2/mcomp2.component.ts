import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mcomp2',
  templateUrl: './mcomp2.component.html',
  styleUrls: ['./mcomp2.component.css']
})
export class Mcomp2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('mcomp2');
  }

}