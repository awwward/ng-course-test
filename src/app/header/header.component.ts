import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public notice = '(notice placeholder)';

  public offset = 200;

  public user =  {
    name: 'John',
    id: 33
  };

  public userList = [
    {
      name: 'John',
      id: 33
    },
    {
      name: 'Sarra',
      id: 34
    },
    {
      name: 'Merry',
      id: 31
    }
  ];

  public userCardIsVisible = true;

  public mycolor = 'blue';

  public myClass = 'red';

  changeColor(color) {
    this.mycolor = color;
  }

  showUsercard(){
    this.userCardIsVisible = ! this.userCardIsVisible
  }

  onInput(event: any){
    this.changeColor(event.target.value);
    // console.log(value)
  }

  constructor() {
    // setInterval(()=> {
    //   this.userCardIsVisible = !this.userCardIsVisible;
    // },500)

    // var __this = this;
    //
    // setTimeout(function () {
    //   __this.myclass = 'blue';
    // }, 2000);
    //
    // setTimeout(() => this.myclass = 'green', 4000);
  }

  ngOnInit() {
    console.log(this.userCardIsVisible);
  }

}
