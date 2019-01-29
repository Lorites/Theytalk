import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { ActivatedRoute} from '@angular/router';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-their-following-channels-inbox',
  templateUrl: './their-following-channels-inbox.component.html',
  styleUrls: ['./their-following-channels-inbox.component.css']
})
export class TheirFollowingChannelsInboxComponent implements OnInit {
  userId:string;
  friendId:string;
  name:string;
  messages:Observable<any[]>;
  friends:Observable<any[]>;
searchTerm:string;
namee:string;
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
this.messages = this.fire.list('ginbox', ref => ref.orderByChild('show').equalTo(true)).valueChanges();
this.friends = this.fire.list('gfriend/'+this.friendId, ref => ref.orderByChild('time')).valueChanges();
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
