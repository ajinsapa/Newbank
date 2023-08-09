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
  login(a:any,b:any)
  
  {
    console.log(a.value);
console.log(b.value);
    
    alert("login clicked")
  }
}


