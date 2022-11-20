import { Component } from '@angular/core';
import { fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'check-random';

 ngOnInit(): void {
  //  let inter$ = interval(1000)

  //  let clcik$ = fromEvent(document,'click')

  //  clcik$.subscribe( evt => {
  //    console.log(evt)
  //  }, err => {
  //    console.log(err);
  //  }, () => {
  //    console.log("Completed")
  //  })

  //  inter$.subscribe( values => {
  //    console.log("Checking random 1 " + values);
  //  })
 }
}

// document.addEventListener('click', (evt:any) => {
//     console.log(evt);
// })
