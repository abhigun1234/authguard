import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class HttpUrlConnection
{   headers:HttpHeaders
     
    constructor(private httpClient:HttpClient)
    {
        this.headers = new HttpHeaders();
        this.headers  = this.headers.set('Content-Type', 'application/json; charset=utf-8');
    }
/*
connectToApi responsible for all http communication
get post put delete patch 
*/
    public connectToApi(requestType,requestUrl,body?:string)
    {
        let options = {
            headers: this.headers
          };
        if(requestType =='get')
            {

                return this.httpClient.get(requestUrl)
            }
            else if(requestType =='post')
                {   console.log(requestUrl)
                    console.log(body)
                    console.log(options)
                    return this.httpClient.post(requestUrl,body,options)
                }

    }
}