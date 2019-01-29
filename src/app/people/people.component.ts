import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  users: Observable<any[]>;
searchTerm:string;  
userId:string;
  constructor(private db:AngularFirestore, private auth:AngularFireAuth) {
   }

  ngOnInit() {
    this.auth.authState.subscribe(user=>{
      this.userId = user.uid;
    });
    this.users = this.db.collection('users', ref => ref.orderBy('name')).valueChanges();
  }


}
