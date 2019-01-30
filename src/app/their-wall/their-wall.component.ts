import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-their-wall',
  templateUrl: './their-wall.component.html',
  styleUrls: ['./their-wall.component.css']
})
export class TheirWallComponent implements OnInit {
messages:Observable<any[]>;
  friendId:string;
  name:string;
  namee:string;
  open:boolean;
searchTerm:string;
userId:string;
  constructor(private route:ActivatedRoute, private fire:AngularFireDatabase, private auth:AngularFireAuth) { }

  ngOnInit() {
    this.auth.authState.subscribe(user=>{    
      this.userId = user.uid;   
  }); 
    this.friendId = this.route.snapshot.paramMap.get('id');
    this.name = this.route.snapshot.paramMap.get('name');
    if(this.name.length > 26) 
      this.namee = this.name.substring(0,25)+"...";
    else
      this.namee = this.name;
    this.messages = this.fire.list('otherwall/'+this.friendId).valueChanges();
  }
  g(){
    this.open = false;
  }
  clear(){
    let val = confirm("Clear " + this.name +"'s chat");
    if(val){      
      this.fire.object('messages/'+this.userId+'/'+this.friendId).remove();
      this.fire.object('inbox/'+this.friendId+'/'+this.userId).remove();
      alert('Cleared');
    }
  }
  add(){
    let time = firebase.database.ServerValue.TIMESTAMP;
    this.fire.object('ffriend/'+ this.userId + '/'+ this.friendId).set({
      userId: this.friendId,
      time: time
    });
    this.fire.object('fffriend/'+ this.friendId + '/'+ this.userId).set({
      userId: this.userId,
      time: time
    });
  }
  remove(){
    this.fire.object('ffriend/'+ this.userId+'/'+this.friendId).remove();
    this.fire.object('fffriend/'+ this.friendId+'/'+this.userId).remove();
  }
}

