import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-their-communities',
  templateUrl: './their-communities.component.html',
  styleUrls: ['./their-communities.component.css']
})
export class TheirCommunitiesComponent implements OnInit {
  users:Observable<any[]>;
  fffriends:Observable<any[]>;
  ffriends:Observable<any[]>;
  thi:boolean;
  that:boolean;
  friendId:string;
  name:string;
searchTerm:string;  
namee:string;
  userId:string;
  open:boolean;
  constructor(private route:ActivatedRoute, private fire: AngularFireDatabase, private auth:AngularFireAuth) { }

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
  
    this.thi = true;
    this.users = this.fire.list('party', ref => ref.orderByChild('show').equalTo(true)).valueChanges();
  this.ffriends = this.fire.list('gfriend/'+this.friendId, ref => ref.orderByChild('time')).valueChanges();
  this.fffriends = this.fire.list('ifriend/'+this.friendId, ref => ref.orderByChild('time')).valueChanges();
    // this.users = [
    //   {
    //     name: 'gonawola@yahoo.com: Onawola razak gboyega',
    //     userId: '1',
    //     time:new Date()        
    //   },
    //   {
    //     name: 'Onawola',
    //     userId: '2',
    //     time:new Date()
    //   },
    //   {
    //     name: 'On',
    //     userId: '3',
    //     time:new Date()
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
