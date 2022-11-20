import { Component, OnInit } from '@angular/core';
import { SubjService } from 'src/app/Services/subj.service';

@Component({
  selector: 'app-first-compo',
  templateUrl: './first-compo.component.html',
  styleUrls: ['./first-compo.component.css']
})
export class FirstCompoComponent implements OnInit {

  constructor(private _subjService : SubjService) { }

  ngOnInit(): void {
  }

  sendMsg(value:any){
    this._subjService.setItem(value)
  }

}
