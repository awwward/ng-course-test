import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})

export class UserCardComponent implements OnInit {

  public classname;
  @Input() user2;
  @Input() newClass;

  constructor() {
    console.log(this.user2);
  }

  private multiplier = 1.04;

  calc(input: number) {
    return input * this.multiplier;
  }

  ngOnInit() {
    console.log(this.user2);
  }

  private classes: string[] = ['red', 'green', 'blue'];
  public myclass: string = this.changeClassReturn();

  changeClass() {
    this.myclass = this.classes.pop();
  }

  changeClassReturn() {
    return this.classes.pop();
  }

  length<MyType extends HasLength>(input: MyType){
    return input.length
  }
}


interface HasLength{
  length: number;
}
