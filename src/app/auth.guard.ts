import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import {LoginService} from './login.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService:LoginService,private _router:Router)
{}

  canActivate():boolean
  { 
      if(this._authService.logedIn())
      { //alert('hello')
        return true
      }
      else
      { //alert('else')
        this._router.navigate(['/login'])
        return false
      }
  }
}
