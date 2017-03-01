import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoteslistComponent } from './components/noteslist/noteslist.component';

import { RoutesModule } from './modules/routes.module';

import { NotesService } from './services/notes.service';
import { FormComponent } from './components/form/form.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NoteslistComponent,
    FormComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [ NotesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
