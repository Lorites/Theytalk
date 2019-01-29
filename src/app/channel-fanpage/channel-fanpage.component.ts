import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase} from '@angular/fire/database';
import { AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-channel-fanpage',
  templateUrl: './channel-fanpage.component.html',
  styleUrls: ['./channel-fanpage.component.css']
})
export class ChannelFanpageComponent implements OnInit {
  users:Observable<any[]>;
  fffriends:Observable<any[]>;
  ffriends:Observable<any[]>;
  thi:boolean;
  tha:boolean;
  that:boolean;
  friendId:string;
  name:string;
  namee:string;
  open:boolean;
  userId:string;
  myId:string;
  searchTerm:string;
  constructor(private route:ActivatedRoute, private auth:AngularFireAuth, private fire:AngularFireDatabase, private db:AngularFirestore) { }

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
      this.db.doc('par/'+ this.friendId).get().subscribe((snapshot)=>{
        this.myId = snapshot.data().userId;
      });
      this.users = this.db.collection('users', ref => ref.orderBy('name')).valueChanges();
      this.ffriends = this.fire.list('ggfriend/' +this.friendId, ref => ref.orderByChild('time')).valueChanges();      
      this.fffriends = this.fire.list('iifriend/' +this.friendId, ref => ref.orderByChild('time')).valueChanges();
  
    this.thi = true;
    // this.users = [
    //   {
    //     name: 'gonawola@yahoo.com: Onawola razak gboyega',
    //     userId: '1'
    //   },
    //   {
    //     name: 'Onawola',
    //     userId: '2'
    //   },
    //   {
    //     name: 'On',
    //     userId: '3'
    //   }
    // ];
    // this.fffriends = [
    //   {
    //     userId: '1'
    //   },
    //   {
    //     userId: '2'
    //   }
    // ];
    // this.ffriends = [
    //   {
    //     userId: '1'
    //   },
    //   {
    //     userId: '3'
    //   }
    // ];
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
  added(e){    
    let time = firebase.database.ServerValue.TIMESTAMP;
    this.fire.object('ifriend/'+ e + '/'+ this.friendId).set({
      userId: this.friendId,
      time: time
    });
    this.fire.object('iifriend/'+ this.friendId + '/'+ e).set({
      userId: e,
      time: time
    });
  }
  removed(e){
    this.fire.object('ifriend/'+ e+'/'+this.friendId).remove();
    this.fire.object('iifriend/'+ this.friendId+'/'+e).remove();
  }
}
