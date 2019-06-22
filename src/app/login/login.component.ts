import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {LoginService} from '..//login.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
authobject
 loginForm=new FormGroup({username:new FormControl("abc",Validators.required),password:new FormControl()})
  constructor(private authService:LoginService) { }

  ngOnInit() {
  }
  public login()
  {
    
    this.authService.authenticate(this.loginForm.value).subscribe(res=>{
    //console.log(res.access_token)
    this.authobject=res
    console.log(this.authobject.access_token)
   localStorage.setItem("token",this.authobject.access_token) 
})
   
    
   
  }
}
