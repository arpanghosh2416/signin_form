import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  
  errormessage:boolean=false;
  UserSignIn=new FormGroup({
    fname:new FormControl('',[Validators.required]),
    lname:new FormControl('',[Validators.required])
  });
  constructor() { }

  ngOnInit(): void {
  }
  user(){
    if(this.isformValid()) console.log("sign in done");
    else{
       console.log("Error found");
       this.errormessage=true;
    }
  }
  
  public get fname() : FormControl {
    return this.UserSignIn.get("fname") as FormControl
  }
  
  public get lname() : FormControl {
    return this.UserSignIn.get("lname") as FormControl
  }
  isformValid(): boolean {
    if(this.fname.errors!=null) return false; 
    if(this.lname.errors!=null) return false;
    return true;
  }
  
  
}
