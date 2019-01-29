import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase} from '@angular/fire/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-their-diplay-picture',
  templateUrl: './their-diplay-picture.component.html',
  styleUrls: ['./their-diplay-picture.component.css']
})
export class TheirDiplayPictureComponent implements OnInit {
  friendId:string;
  name:string;
  userId:string;
  namee:string;
  text:string;
  url:string;
  ext:string;
  open:boolean;
  constructor(private route:ActivatedRoute, private fire:AngularFireDatabase, private auth:AngularFireAuth, private db:AngularFirestore) { }

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
  
  this.db.doc('user/'+ this.friendId).get().subscribe((snapshot)=>{
    this.text = snapshot.data().name;
    this.url = snapshot.data().url;
    this.ext = snapshot.data().ext;
    });
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
