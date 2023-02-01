import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data = "your perfect banking partner"
  inputPlaceholder = "account number"
//   acno= ''
// acn0 : any
//   pass: any
  userDetails: any = {
    1000: { acno: 1000, username: "sree", password: "123abc", balance: 0 },
    1001: { acno: 1001, username: "jithu", password: "abc123", balance: 0 },
    1002: { acno: 1002, username: "sruthy", password: "1212ab", balance: 0 },
    1003: { acno: 1003, username: "soorya", password: "ab1213", balance: 0 },
    1004: { acno: 1004, username: "das", password: "456mno", balance: 0 },
    1005: { acno: 1005, username: "thazni", password: "123sn", balance: 0 },
    1006: { acno: 1006, username: "dilbhar", password: "1419ns", balance: 0 },

  }

  constructor() { }

  ngOnInit(): void {

  }
  login(a:any,b:any) 
  {
    console.log(a.value);
    console.log(b.value);
    
    var acnum=a.value
    var psw=b.value
    
    // alert('login clicked')
  //   var acnum=this.acno
  //   var psw =this.pass
    var userDetails =this.userDetails
   if(acnum in userDetails)
    {
       if(psw==userDetails[acnum]["password"])
       {
         alert('login successful')
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
  // login() 
  // {
  //   // alert('login clicked')
  //   var acnum=this.acno
  //   var psw =this.pass
  //   var userDetails =this.userDetails
  //  if(acnum in userDetails)
  //   {
  //      if(psw==userDetails[acnum]["password"])
  //      {
  //        alert('login successful')
  //      }
  //      else{
  //           alert('incorrect password')

  //      }
  //   }
  //   else
  //   {
  //   alert('account num incorrect / not registered yet')
  // }
   
  // }
  // acnoChange(event:any)
  // {
  //      this.acno= event.target.value
  //     //  console.log(this.acno);     
  // }
  // passchange(event:any){
  //      this.pass = event.target.value
  //     //  console.log(this.pass);
       
  // }
}

