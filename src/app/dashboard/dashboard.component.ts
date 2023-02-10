import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any
  acno:any

  constructor(private ds: DataService, private fb: FormBuilder, private router: Router) {
    this.user = this.ds.currentUser
  }
  ngOnInit(): void {

    if (!localStorage.getItem("currentAcno")) {
      alert('please login')
      this.router.navigateByUrl("")
    }
  }
  depositForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9a-zA-z]+')]],
    amnt: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })
  withdrawForm = this.fb.group({
    acno1: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    psw1: ['', [Validators.required, Validators.pattern('[0-9a-zA-z]+')]],
    amnt1: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })
  deposit() {
    var acno = this.depositForm.value.acno
    var psw = this.depositForm.value.psw
    var amnt = this.depositForm.value.amnt
    const result = this.ds.deposit(acno, psw, amnt)
    if (this.depositForm.valid) {
      if (result) {
        alert(`your account has been credited with amount ${amnt}/-.Balance is ${result}/-`)
      }
      else {
        alert(`incorrect account number/password`)
      }
    }
    else {
      alert('incorrect form')
    }

  }
  withdraw() {
    var acno = this.withdrawForm.value.acno1
    var psw = this.withdrawForm.value.psw1
    var amnt = this.withdrawForm.value.amnt1
    const result = this.ds.withdraw(acno, psw, amnt)
    if (this.withdrawForm.valid) {
      if (result) {
        alert(`your account has been debited with amount ${amnt}/-.Balance is ${result}/-`)
      }
    }
    else {
      alert('incorrect form')
    }

  }

  logout() {
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentAcno")
    this.router.navigateByUrl("")
  }

  deleteParent() {
  this.acno=JSON.parse(localStorage.getItem("currentAcno") || "")

  }
}
