import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveComponent } from './Components/reactive/reactive.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { FirstCompoComponent } from './Components/first-compo/first-compo.component';
import { ScndCompoComponent } from './Components/scnd-compo/scnd-compo.component';
import { SampleNgComponent } from './sample-ng/sample-ng.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment'
import { addNumReducer } from './ngrx/Reducer/addNum.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AlbumEffect } from './ngrx/Effect/random.effects';
import { gettingAlbumsReducer } from './ngrx/Reducer/album.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveComponent,
    FirstCompoComponent,
    ScndCompoComponent,
    SampleNgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({addref : addNumReducer, getAlbum : gettingAlbumsReducer}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AlbumEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
