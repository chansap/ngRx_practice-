import { Component, OnInit } from '@angular/core';
import { concat, interval, merge, of } from 'rxjs';
import { RecapServiceService } from 'src/app/recap-service.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  demoVar : any = "Again";
  value = "okay";
  flag:boolean = false;
  nxtVar:any

  constructor(private _recapSer: RecapServiceService) { }

  ngOnInit(): void {

    
  }

  onclick(evt:any){
    console.log("This is clicked",evt);
    this.flag = !this.flag;

    const sub = this._recapSer.getDemoUrl().subscribe(  (data) =>{
      console.log(data);
    }
    // (err)=>{console.log(err)},
    // ()=>{console.log("Completed");}
    
    )


    // setTimeout(()=>{sub.unsubscribe()},0)
    
    // this.okok()
  }

  okok(){
    // const first$ = of(1,3,5,6)
    // const scnd$ = of(11,31,51,61)
    // const thrd$ = of(13,33,53,63)

    // const poch = concat(first$,scnd$,thrd$)
    // let t= poch.subscribe((object)=>{console.log(object);})
  //  console.log(t);



  let ftime$ = interval(1000)
  let stime$ = interval(5000)

  const poch2 = merge(ftime$,stime$)
  let er= poch2.subscribe((object)=>{console.log(object);})
//  console.log(t);

  }

  

}
