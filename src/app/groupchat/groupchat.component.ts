import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase} from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-groupchat',
  templateUrl: './groupchat.component.html',
  styleUrls: ['./groupchat.component.css']
})
export class GroupchatComponent implements OnInit {
  userId:string;
  friendId:string;
  displayname:string;
  email:string;
  namee:string;
  name:string;
  messages:Observable<any[]>;
  text:string;
  open:boolean;
    constructor(private route:ActivatedRoute,private afStorage:AngularFireStorage, private auth:AngularFireAuth, private fire: AngularFireDatabase) { }
  
    ngOnInit() {
      this.auth.authState.subscribe(user=>{    
        this.userId = user.uid;   
        this.displayname = user.displayName;
        this.email = user.email;                                  
      });
      this.friendId = this.route.snapshot.paramMap.get('id');
      this.name = this.route.snapshot.paramMap.get('name');
      if(this.name.length > 26) 
        this.namee = this.name.substring(0,25)+"...";
      else
        this.namee = this.name;    
      this.messages = this.fire.list('gmessages/' +this.friendId).valueChanges();      
    }
    send(e){
      this.text = '';
      document.getElementById('te').focus();
      let time = firebase.database.ServerValue.TIMESTAMP;  
      this.fire.object('ginbox/'+this.friendId).update({
        text: e,
        time: time
      });
      this.fire.list('gmessages/'+this.friendId).push({
        userId: this.userId,
        text: e,
        time: time,
        name: this.displayname+': '+this.email 
      });
    }
    g(){
      this.open = false;
    }
    upload(e){
      var file = e.target.files[0];
      let fileName = file.name;    
      let ext = fileName.split('.').pop();  
      let id = this.fire.createPushId();
      let time = firebase.database.ServerValue.TIMESTAMP;
      const ref = this.afStorage.ref('gchat/'+this.friendId+'/'+id);
      ref.put(file).then(()=>{
        ref.getDownloadURL().subscribe((url)=> {  
            this.fire.object('ginbox/'+this.friendId).update({
              time: time,
              text: fileName,
              url: url,
              ext: ext,
            });
            this.fire.list('gmessages/'+this.friendId).push({
              userId: this.userId,
              text: fileName,
              url: url,
              ext: ext,
              time: time,
              name: this.displayname+': '+this.email 
            });
        this.fire.list('ggallery/'+ this.friendId).push({
          name: fileName,
          time: time,
          url: url,
          ext: ext
        });      
      });
      }).catch((e)=>{
        alert(e.message);
      });  
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
