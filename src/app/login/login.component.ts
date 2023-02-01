import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data = "your perfect banking partner"
  inputPlaceholder = "account number"
  acno= ''
  pass =''
// acn0 : any
  // pass: any


  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {

  }
  login() 
  {
    var acnum=this.acno
    var psw =this.pass
    var userDetails =this.ds.userDetails
   if(acnum in userDetails)
    {
       if(psw==userDetails[acnum]["password"])
       {
         alert('login successful')
         this.router.navigateByUrl('dashboard')
       }
       else{
            alert('incorrect password')

       }
    }
    else
    {
    alert('account num incorrect / not registered yet')
  }
   
  }
  
}

