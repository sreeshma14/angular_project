import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  acno = ''
  pass = ''
  // acn0 : any
  // pass: any
  // model form

  loginForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-z]+')]]
  })


  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {

  }
  login() {
    if (this.loginForm.valid) {
      var acnum = this.loginForm.value.acno
      var psw = this.loginForm.value.psw
      const result = this.ds.login(acnum, psw)


      if (result) {
        alert("login success")
        this.router.navigateByUrl("dashboard")
      }
      else {
        alert("Incorrect Username/Password")

      }
    }
  else{
    alert('invalid form')
  }
  }

}

