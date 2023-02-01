import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  userDetails: any = {
    1000: { acno: 1000, username: "sree", password: "123abc", balance: 0 },
    1001: { acno: 1001, username: "jithu", password: "abc123", balance: 0 },
    1002: { acno: 1002, username: "sruthy", password: "1212ab", balance: 0 },
    1003: { acno: 1003, username: "soorya", password: "ab1213", balance: 0 },
    1004: { acno: 1004, username: "das", password: "456mno", balance: 0 },
    1005: { acno: 1005, username: "thazni", password: "123sn", balance: 0 },
    1006: { acno: 1006, username: "dilbhar", password: "1419ns", balance: 0 },

  }

  

}
