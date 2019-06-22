import { Injectable } from '@angular/core';
import {HttpUrlConnection} from '..//app/httpurlconnection'
import {loginUrl} from '..//app/httpurlconst'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public httpConnection:HttpUrlConnection) { }
  public authenticate(data)
  {
    
    return this.httpConnection.connectToApi('post',loginUrl,data)
  }
  public logedIn()
  {
    return !!localStorage.getItem("token")
  }

}
