import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { NoteItem } from '../note-item';
import { Http, Headers } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class NotesService {

  private selectedIdSource = new Subject<any>();

  selectedId$ = this.selectedIdSource.asObservable();

  private headers = new Headers({'Content-Type': 'application/json'});
  private apiUrl = 'app/notes';

  private notesListSubject = new Subject<NoteItem[]>();
  notesList$ = this.notesListSubject.asObservable();

  private emptyNoteItem: NoteItem = { id: 0, title: 'cracass', content: ''};


  constructor( private _http: Http ) {}
  
  clearSelectedId(){
    this.selectedIdSource.next( '' );
  }

  setSelectedId( id ){
    this.selectedIdSource.next( id );
  }

  listTrigger(){
    this.getNoteItems().subscribe( res => {
      this.notesListSubject.next( res );
    })
  }

  getNoteItems(): Observable<NoteItem[]>{
    return this._http.get( this.apiUrl ).map( r => r.json().data as NoteItem[]);
  }

  getNoteItem( id ): Observable<any>{
      return this._http.get( this.apiUrl + `/${id}` ).map( 
        r => {
         
            return r.json().data as NoteItem
          
        }
      );
  }

  createNoteItem( title: string, content: string ){
      return this._http.post(
          this.apiUrl,
          JSON.stringify({title: title, content: content}),
          {headers: this.headers}
        ).map( r => {
           
           this.getNoteItems().subscribe( res => {
              this.notesListSubject.next( res );
           })
            this.selectedIdSource.next( r.json().data.id );
           return r.json().data
        });
        
      
  }

  updateNoteItem( noteObject: NoteItem ){
    return this._http.put(
      this.apiUrl + `/${noteObject.id}`,
      noteObject,
      {headers: this.headers}
    ).map( () => {
      this.selectedIdSource.next( noteObject.id );
      this.getNoteItems().subscribe( r => {
        this.notesListSubject.next( r );
      })
    })
  }

  deleteNoteItem( id ){
      return this._http.delete(
        this.apiUrl + `/${id}`,
        {headers: this.headers}
      ).map( r => {
        this.getNoteItems().subscribe( r => {
          this.notesListSubject.next( r )
        })
        this.selectedIdSource.next('');
      })
  }

  

}