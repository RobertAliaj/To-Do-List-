import { Component } from '@angular/core';
import { Firestore, collectionData, collection, setDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todos$: Observable<any>; // ein Observable ist eine Variable die sich updatet //der DatenTyp "any" ist weil die Variable ein Json ist (json von der Datenbank)
  // das "$"-Zeichen dazu wird verwendet um zu wissen das es sich um eine variable handelt die sich regelmäßig gupdatet

  todos: Array<any>;
  todotext: string = ''; //keigt einen neuen Wert durch die ngModel

  constructor(private firestore: Firestore) {             // mit dem Befehlt "firestore: Firestore" wird Firestore importiert
    const coll = collection(firestore, 'todos');  // greift auf die collection in Firestore an der Stelle "todos"
    this.todos$ = collectionData(coll);           // mit "collectionData(coll);" werden die Daten aus der Datenbank "todos" geholt und der Variable "todos$" zugewiesen

    this.todos$.subscribe((newTodos$) => {                 // subscribe (auf deutsch abonnieren) wird verwendet wenn man aus der Datenbank Daten holen möchte die sich regelmäßig ändern
      // console.log('neue Todos sind:', newTodos$);
      this.todos = newTodos$;
      console.log(this.todos);
    });                                           // die "()=>{}" Funktion wird jedes mal aufgerufen wenn die Daten auf der Datenbank sich ändern
  }


  addToDo() {
    const coll = collection(this.firestore, "todos"); // hole die collection in Firestore an der Stelle "todos"
    setDoc(doc(coll), {name: this.todotext});         // setze einen neuen Wert
  }
}
