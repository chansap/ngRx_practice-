import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { addselector } from '../ngrx/Selector/addNum.selector';

@Injectable({
  providedIn: 'root'
})
export class SubjService {

  sub = new ReplaySubject()

  constructor( private _http : HttpClient) {}

  setItem(message:any){
    this.sub.next(message)
    this.sub.next(message)
    // this.sub.complete()
  }
  
  getItem(){
    return this.sub.asObservable()
  }

  getAlbums(){
    return this._http.get<any>("https://jsonplaceholder.typicode.com/albums")
  }
}
