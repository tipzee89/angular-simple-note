import { Component, OnInit, OnChanges, OnDestroy, EventEmitter, Output  } from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { NotesService } from '../../services/notes.service';
import { NoteItem } from '../../note-item';

@Component({
  moduleId: module.id,
  selector: 'app-noteslist',
  templateUrl: 'noteslist.component.html',
  styleUrls: ['noteslist.component.css']
})
export class NoteslistComponent implements OnInit, OnChanges, OnDestroy {

  selectedNoteId: any;
  noteItems: NoteItem[];

  constructor( private _notesServce: NotesService ) {}

  ngOnChanges(){
    
  }

  ngOnInit() {
    this.buildNoteList();
  }

  ngOnDestroy(){
    
  }

  buildNoteList(){
    this._notesServce.listTrigger();
    this._notesServce.notesList$.subscribe( r => {
      this.noteItems = r;
    });
    this._notesServce.selectedId$.subscribe( r => {
      this.selectedNoteId = r;
    })
  }

  setSelectedNoteId( e, id ){
    e.preventDefault();
    
    this._notesServce.setSelectedId(id);
    
    
  }
  

}
