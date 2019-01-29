import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase} from '@angular/fire/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-channel-wall',
  templateUrl: './channel-wall.component.html',
  styleUrls: ['./channel-wall.component.css']
})
export class ChannelWallComponent implements OnInit {
  messages:Observable<any[]>;
  friendId:string;
  name:string;
  namee:string;
  open:boolean;
  searchTerm:string;
  userId:string;
  constructor(private route:ActivatedRoute, private auth:AngularFireAuth, private fire:AngularFireDatabase) { }

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
      this.messages = this.fire.list('partywall/'+ this.friendId).valueChanges();  
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
