import { Component, OnInit, Input } from '@angular/core';

import { NotesService } from '../../services/notes.service';
import { NoteItem } from '../../note-item';

@Component({
  moduleId: module.id,
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  noteItem: NoteItem = { id: 0, title: '', content: ''};
  noteUpdated: boolean;
  noteAdded: boolean;
  noteDeleted: boolean;

  constructor( private _noteService: NotesService ) {
    
    this._noteService.selectedId$.subscribe( r => {
      this.setStatus();
      this._noteService.getNoteItem( r ).subscribe( r => {
        
        this.noteItem = r;        

      });
      
    })

   }

   clearSelectedId(){
     this.noteItem.title = '';
     this.noteItem.content = '';
     this._noteService.clearSelectedId();
     this.setStatus(false, false);

   }

   addNewNote(){
     this._noteService.createNoteItem( this.noteItem.title, this.noteItem.content ).subscribe( r => {
       if( r ) {
         
         this.setStatus( false, true );
       }
     })
   }

   updateNote(){
     this._noteService.updateNoteItem( this.noteItem ).subscribe( r => {
        this.setStatus( true );
     });
   }   

   deleteNote(){
      this._noteService.deleteNoteItem( this.noteItem.id ).subscribe( r => {
        this.setStatus(false,false, true);
      });
   }

   setStatus( update: boolean = false, added: boolean = false, deleted = false ){
        this.noteUpdated = update;
        this.noteAdded = added;
        this.noteDeleted = deleted;
   }

  ngOnInit() {
  }

}
