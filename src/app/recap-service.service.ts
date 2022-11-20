import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  filter, map, of, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecapServiceService {

  constructor(private http: HttpClient) { }

   arr = of([1,2,3])
  //  

  getDemoUrl() {

    return this.http.get<any>('https://jsonplaceholder.typicode.com/users').pipe(
      // tap((data)=>console.log("Executed",data)),
      // map((user:any)=>{
      //   return user.map((it:any) => it.address)
      // }),
      // shareReplay()

      filter( (user:any)=> user.filter((o:any)=>o.id !== 3)),
        // console.log(o.id)
        // return 
      tap((object)=>console.log(object))
    )
  }









    // return this.arr.pipe(
    //   map( (user) => {
    //     console.log(user+10);



    //     // return user.map( (it:any) => it.address)
    //   })
    // )

  



}
