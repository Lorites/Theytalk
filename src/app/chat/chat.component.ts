import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase} from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
userId:string;
friendId:string;
name:string;
namee:string;
text:string;
dname:string;
email:string;
messages:Observable<any[]>;
open:boolean;
  constructor(private afStorage: AngularFireStorage, private fire:AngularFireDatabase, private auth:AngularFireAuth, private route:ActivatedRoute) { }
  ngOnInit() {
    this.auth.authState.subscribe(user=>{   
      this.userId = user.uid;   
      this.dname = user.displayName;
      this.email = user.email;
      this.messages = this.fire.list('messages/' +this.userId+'/'+ this.friendId).valueChanges();
    }); 
    this.friendId = this.route.snapshot.paramMap.get('id');
    this.name = this.route.snapshot.paramMap.get('name');
    if(this.name.length > 26) 
      this.namee = this.name.substring(0,25)+"...";
  else
    this.namee = this.name;  
  }
  send(e){
    this.text = "";
    document.getElementById('te').focus();
    let time = firebase.database.ServerValue.TIMESTAMP;  
    this.fire.object('inbox/'+this.friendId+'/'+this.userId).set({
      userId: this.userId,
      text: e,
      time: time,
      name: this.dname+': '+this.email 
    });
    let data = {
      userId: this.userId,
      text: e,
      time: time
    }; 
    this.fire.list('messages/'+this.userId+'/'+this.friendId).push(data);
    if(this.userId !== this.friendId)
    this.fire.list('messages/'+this.friendId+'/'+this.userId).push(data);
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
  g(){
    this.open = false;
  }
  
  upload(e){
    var file = e.target.files[0];
    let fileName = file.name;    
    let ext = fileName.split('.').pop();  
    let id = this.fire.createPushId();
    let time = firebase.database.ServerValue.TIMESTAMP;
    const ref = this.afStorage.ref('chat/'+id);
    ref.put(file).then(()=>{
        ref.getDownloadURL().subscribe((url)=> {  
      let dat = {
        userId: this.userId,
        text: fileName,
        time: time,
        url: url, 
        ext: ext
      }
      let data = {
        name: fileName,
        time: time,
        url: url,
        id: id, 
        ext: ext
      }
      this.fire.object('inbox/'+this.friendId+'/'+this.userId).set({
        userId: this.userId,
        text: fileName,
        url: url,
        ext: ext,
        time: time,
        name: this.dname+': '+this.email 
      });
      this.fire.list('messages/' +this.userId +'/'+ this.friendId).push(dat);
      this.fire.object('gallery/'+ this.userId+'/'+id).set(data);
    if(this.userId !== this.friendId){
      this.fire.list('messages/' +this.friendId +'/'+ this.userId).push(dat);
      this.fire.object('gallery/'+ this.friendId+'/'+id).set(data);
    }
    });
    }).catch((e)=>{
      alert(e.message);
    });  
  }
}
