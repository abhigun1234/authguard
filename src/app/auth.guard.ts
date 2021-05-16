import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import {LoginService} from './login.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService:LoginService,private _router:Router)
{}
//can cative
  canActivate():boolean
  {  alert('canactive called')
      if(this._authService.logedIn())
      { alert('logged in')
        return true
      }
      else
      { alert('else fail')
        this._router.navigate(['/login'])
        return false
      }
  }
}
