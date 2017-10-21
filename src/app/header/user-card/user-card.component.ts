import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})

export class UserCardComponent implements OnInit {

  @Input('userSent') userReceived;
  @Output() userSelected: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  selectUser() {
    this.userSelected.emit();
  }
}
