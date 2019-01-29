import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-their-created-channels',
  templateUrl: './their-created-channels.component.html',
  styleUrls: ['./their-created-channels.component.css']
})
export class TheirCreatedChannelsComponent implements OnInit {
  name:string;
  namee:string;
  userId:string;
  messages:Observable<any[]>;
  friendId:string;
  open:boolean;
searchTerm:string;  
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

this.messages = this.fire.list('created/'+this.friendId, ref => ref.orderByChild('show').equalTo(true)).valueChanges();
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
