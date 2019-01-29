import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase} from '@angular/fire/database';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-channel-display-picture',
  templateUrl: './channel-display-picture.component.html',
  styleUrls: ['./channel-display-picture.component.css']
})
export class ChannelDisplayPictureComponent implements OnInit {
  friendId:string;
  name:string;
  namee:string;
  open:boolean;
  userId:string;
  text:string;
  ext:string;
  url:string;
  constructor(private route:ActivatedRoute, private auth:AngularFireAuth, private db:AngularFirestore, private fire:AngularFireDatabase) { }

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
    this.db.doc('part/'+ this.friendId).get().subscribe((snapshot)=>{
      this.text = snapshot.data().name;
      this.url = snapshot.data().url;
      this.ext = snapshot.data().ext;
    });
  }
  g(){
    this.open = false;
  }
  add(){    
    let time = firebase.database.ServerValue.TIMESTAMP;
    this.fire.object('gfriend/'+ this.userId + '/'+ this.friendId).set({
      userId: this.friendId,
      time: time
    });
    this.fire.object('ggfriend/'+ this.friendId + '/'+ this.userId).set({
      userId: this.userId,
      time: time
    });
  }
  remove(){
    this.fire.object('gfriend/'+ this.userId+'/'+this.friendId).remove();
    this.fire.object('ggfriend/'+ this.friendId+'/'+this.userId).remove();
  }
}


