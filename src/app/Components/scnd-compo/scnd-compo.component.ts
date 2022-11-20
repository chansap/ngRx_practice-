import { Component, OnInit } from '@angular/core';
import { SubjService } from 'src/app/Services/subj.service';

@Component({
  selector: 'app-scnd-compo',
  templateUrl: './scnd-compo.component.html',
  styleUrls: ['./scnd-compo.component.css']
})
export class ScndCompoComponent implements OnInit {

  theMsg:any
  constructor(private _subjService: SubjService) { }

  ngOnInit(): void {
    this._subjService.getItem().subscribe( (data:any)=>{
      console.log(data);
      this.theMsg = data
    })
  }

}
