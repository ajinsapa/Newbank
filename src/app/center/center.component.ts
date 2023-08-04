import { Component } from '@angular/core';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent {

  data="Happy Banking with Us!!"
  data2="enter account number"

constructor()
{}
  ngOnInit():void{

  }
  login(){
    alert("login clicked")
  }
acnoChange(event:any)
{
  console.log(event.target.value);
  
}
passChange(event:any)
{
  console.log(event.target.value);
}
}



