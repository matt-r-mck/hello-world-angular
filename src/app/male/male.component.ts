import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-male',
  templateUrl: './male.component.html',
  styleUrls: ['./male.component.css']
})
export class MaleComponent implements OnInit {

  @Input() him: any = null;

  constructor() { }

  ngOnInit() {
  }

}
