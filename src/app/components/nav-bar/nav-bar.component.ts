import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'audi-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() side: boolean;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  toggleAction() {
    this.toggle.emit(null);
  }
}
