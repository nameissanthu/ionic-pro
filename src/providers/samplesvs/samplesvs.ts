import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


/*
  Generated class for the SampleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SampleProvider {
  apiUrl = 'https://jsonplaceholder.typicode.com';
  dashboard=[
    {title:"My Profile", imgurl:"assets/imgs/dash1.jpg"},
    {title:"My Plan", imgurl:"assets/imgs/dash2.jpg"},
    {title:"Recommended Goals", imgurl:"assets/imgs/dash3.jpg"},
    {title:"Mentor", imgurl:"assets/imgs/dash4.jpg"},
    {title:"Settings", imgurl:"assets/imgs/dash5.jpg"}
  ]

  constructor(public http: HttpClient) {
    console.log('Hello SampleProvider Provider');
  }
  dashboardfunc(){
  return this.dashboard
  }
  getUsers(){
   return new Promise(resolve =>{
     this.http.get(this.apiUrl+'/users').subscribe(data=>{
       resolve(data);
     }, err =>{
       console.log(err);
     });
   });
  }

  addUser(data){
    return new Promise((resolve, reject)=>{
      this.http.post(this.apiUrl+'/users', JSON.stringify(data),{
        headers: new HttpHeaders().set('Authorization', 'my-auth-token'),
        params: new HttpParams().set('id', '3'),
      })
      .subscribe(res =>{
        resolve(res);
      }, (err)=>{
        reject(err);
      });
    });
  }

}
