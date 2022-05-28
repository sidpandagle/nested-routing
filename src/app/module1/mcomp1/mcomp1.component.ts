import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mcomp1',
  templateUrl: './mcomp1.component.html',
  styleUrls: ['./mcomp1.component.css'],
})
export class Mcomp1Component implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot.params.id); 
  }
}
