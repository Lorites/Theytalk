import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase} from '@angular/fire/database';
import { AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-fanpage',
  templateUrl: './fanpage.component.html',
  styleUrls: ['./fanpage.component.css']
})
export class FanpageComponent implements OnInit {
  users:Observable<any[]>;
  fffriends:Observable<any[]>;
  ffriends:Observable<any[]>;
  thi:boolean;
  that:boolean;
  friendId:string;
  name:string;
  namee:string;
  userId:string;
searchTerm:string;  
open:boolean;
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
  this.users = this.db.collection('users').valueChanges();
  this.ffriends = this.fire.list('iifriend/' +this.friendId, ref => ref.orderByChild('time')).valueChanges();      
  this.fffriends = this.fire.list('ggfriend/' +this.friendId, ref => ref.orderByChild('time')).valueChanges();
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
}
