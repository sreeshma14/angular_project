import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentUser:any
  currentAcno:any
  constructor() { }

  userDetails: any = {
    1000: { acno: 1000, username: "Sree", password: "123abc", balance: 0,transactions:[] },
    1001: { acno: 1001, username: "Jithu", password: "abc123", balance: 0,transactions:[] },
    1002: { acno: 1002, username: "Sruthy", password: "1212ab", balance: 0,transactions:[] },
    1003: { acno: 1003, username: "Soorya", password: "ab1213", balance: 0,transactions:[] },
    1004: { acno: 1004, username: "Das", password: "456mno", balance: 0,transactions:[] },
    1005: { acno: 1005, username: "Thazni", password: "123sn", balance: 0 ,transactions:[]},
    1006: { acno: 1006, username: "Dilbhar", password: "1419ns", balance: 0,transactions:[] },

  }

  register(uname: any, acno: any, pass: any) {
    if (acno in this.userDetails) {
      return false
    }
    else {
      this.userDetails[acno] = { acno, username: uname, password: pass, balance: 0 }
      console.log(this.userDetails);
      return true
    }

  }

  login(acno: any, pass: any) {
    var userDetails = this.userDetails
    if (acno in userDetails) {
      if (pass == userDetails[acno]["password"]) {
        this.currentUser= userDetails[acno]["username"]
        this.currentAcno=acno
        return true
      }
      else {
        return false

      }
    }
    else {
      return false
    }
  }

  deposit(acnum:any,psw:any,amount:any)
  {
    let userDetails=this.userDetails
    // convert string to integer 
    var amnt=parseInt(amount)
    if(acnum in userDetails)
    {
      if(psw==userDetails[acnum]["password"] )
      {
        userDetails[acnum]["balance"]+=amnt

        // transaction data store
       userDetails[acnum]["transactions"].push({type:"Credit",amount:amnt})

        return userDetails[acnum]["balance"]
      }
      else{
        return false
      }
    }
    else{
      return false
    }

  }
  
  withdraw(acnum:any,psw:any,amount:any)
  {
    let userDetails=this.userDetails
    // convert string to integer 
    var amnt=parseInt(amount)
    if(acnum in userDetails)
    {
      if(psw==userDetails[acnum]["password"] )
      {
        if(amnt<=userDetails[acnum]["balance"]){
        userDetails[acnum]["balance"]-=amnt
        userDetails[acnum]["transactions"].push({type:"Debit",amount:amnt})
    console.log(userDetails);
    
        return userDetails[acnum]["balance"]
      }
      else{
        alert(`insuffient balane`)
      }
    }
      else{
        alert(`incorrect password`)
        return false
      }
    }
    else{
      alert(`incorrect accnt number`)
      return false
    }

  }
  getTransactions(acno:any)
  {
    return this.userDetails[acno]["transactions"]
  }

}
