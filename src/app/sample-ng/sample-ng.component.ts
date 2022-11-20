import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addNum, getAlbumAction } from '../ngrx/Action/add.action';
import { addselector } from '../ngrx/Selector/addNum.selector';
import { albumSelector } from '../ngrx/Selector/album.selector';

@Component({
  selector: 'app-sample-ng',
  templateUrl: './sample-ng.component.html',
  styleUrls: ['./sample-ng.component.css']
})
export class SampleNgComponent implements OnInit {

  album_data: any = []

  constructor(private store: Store<any>) { }

  displayValue!: Number;

  ngOnInit(): void {
    this.store.select(addselector).subscribe((data) => {
      console.log(data);
      this.displayValue = data
    })



  }

  sendMsg(value: any) {
    // console.log(typeof parseInt(value));

    this.store.dispatch(addNum(parseInt(value)))
  }


  albumFunction() {
    this.store.dispatch(getAlbumAction());

    setTimeout(() => {
      this.store.select(albumSelector).subscribe(
        (data) => {
          console.log("From the component", data.albums)
          this.album_data = data.albums
        }
      )
    }, 3000)

  }

}
