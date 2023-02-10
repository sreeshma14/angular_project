import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder){}
  ngOnInit(): void {
  
  }
 // create reactive  form for register
registerForm =this.fb.group({
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  uname:['',[Validators.required,Validators.pattern('[a-zA-z]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9a-zA-z]+')]]
})


  register(){
  
   var uname=this.registerForm.value.uname
   var acno=this.registerForm.value.acno
   var pass=this.registerForm.value.psw
   if(this.registerForm.valid)
{  //  console.log(uname,acno,pass);
  const result=this.ds.register(uname,acno,pass)
  if (result){
    alert("successfully Registered")
    this.router.navigateByUrl("")
  }
  else{
    alert("User Already exit")
  }
 }
else
{
  alert('invalid Form')
}
   

  }

}
