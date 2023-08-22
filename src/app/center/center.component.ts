import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent {

  data="Happy Banking with Us!!"
  data2="enter account number"

  accno:any
  pswd:any

constructor(private rout:Router)
{

}
  ngOnInit():void{

  }
  login()
  
  {
    console.log(this.accno);
    console.log(this.pswd);
    //redirection 
    
    alert("login clicked")
this.rout.navigateByUrl("home")
    
  }
}


