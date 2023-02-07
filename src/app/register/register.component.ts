import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private ds:DataService){}
  ngOnInit(): void {
  
  }
  uname=''
  acno=''
  pass=''
  register(){
  
   var uname=this.uname
   var acno=this.acno
   var pass=this.pass
  //  console.log(uname,acno,pass);
  const result=this.ds.register(uname,acno,pass)
  if (result){
    alert("successfully Registered")
    this.router.navigateByUrl("")
  }
  else{
    alert("User Already exit")
  }
 

   

  }

}
