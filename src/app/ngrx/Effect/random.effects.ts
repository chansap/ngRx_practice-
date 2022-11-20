
import { SubjService } from "src/app/Services/subj.service";
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import { getAlbumAction, getAlbumActionSuccess } from "../Action/add.action";
import {tap, map, concatMap, mergeMap} from 'rxjs/operators'


@Injectable()
export class AlbumEffect {

    loadAlbums$ = createEffect( () => 
    this.action$.pipe(
        ofType(getAlbumAction),
        concatMap( () => this._SubjService.getAlbums().pipe(
            map( album => getAlbumActionSuccess(album) ),
            // tap( (data) => { console.log("From data of effects", data) }   )
        ))
    ))

    constructor(private action$ : Actions,
                private _SubjService : SubjService){}

}