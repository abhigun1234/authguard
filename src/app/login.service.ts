import { Injectable } from '@angular/core';
import { HttpUrlConnection } from '..//app/httpurlconnection'
import { loginUrl } from '..//app/httpurlconst'
import {HttpClient} from '@angular/common/http'
import {Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http:HttpClient) { }
  tokenSubject=new Subject<any>()
  public authenticate(data) {
 
     
    this.tokenSubject.next('GYgYXBpL2J1eSJ9.43DXvhrwMGeLLlP4P4izjgsBB2yrpo82oiUPhADakLs')
  
  }
  public logedIn() {
    return !!localStorage.getItem("token")
  }
  getProduct() {
    return this.http.get( 'https://justolearnapp.herokuapp.com/api/auth').subscribe(res => {
      console.log(res)
    })
  }

}
