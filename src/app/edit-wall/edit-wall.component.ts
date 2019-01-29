import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase} from '@angular/fire/database';
import { AngularFirestore} from '@angular/fire/firestore';
import { AngularFireStorage} from '@angular/fire/storage';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-edit-wall',
  templateUrl: './edit-wall.component.html',
  styleUrls: ['./edit-wall.component.css']
})
export class EditWallComponent implements OnInit {
  messages:Observable<any[]>;
  friendId:string;
  name:string;
  namee:string;
  open:boolean;
  userId:string;
searchTerm:string;  
myId:string;
  constructor(private route:ActivatedRoute, private fire:AngularFireDatabase, private auth:AngularFireAuth, private afStorage: AngularFireStorage, private db:AngularFirestore) { }

  ngOnInit() {
    this.auth.authState.subscribe(user=>{    
      this.userId = user.uid; 
      this.messages = this.fire.list('editwall/'+this.userId+'/'+this.friendId).valueChanges();      
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
  }
  g(){
    this.open = false;
  }
  delete(d,e){
    let val = confirm("Delete " + e+ "'s file");
    if(val){
      this.fire.object('partywall/'+this.friendId+'/'+d).remove();
      this.fire.object('editwall/'+this.userId+'/'+this.friendId+'/'+d).remove();
      this.db.doc('part/'+ this.friendId).delete();
      this.afStorage.ref('editwall/'+this.friendId+'/'+d).delete();
      alert('Deleted');
    }
  }
  upload(e){
    var file = e.target.files[0];
    let fileName = file.name;    
    let ext = fileName.split('.').pop();  
    let id = this.fire.createPushId();
    let time = firebase.database.ServerValue.TIMESTAMP;
    const ref = this.afStorage.ref('editwall/'+this.friendId+'/'+id);
    ref.put(file).then(()=>{
      ref.getDownloadURL().subscribe((url)=> {  
          this.fire.object('partywall/'+this.friendId+'/'+id).set({
            time: time,
            text: fileName,
            url: url,
            ext: ext
          });
          this.fire.object('editwall/'+this.userId+'/'+this.friendId+'/'+id).set({
            time: time,
            name: fileName,
            url: url,
            ext: ext,
            id: id
          });
          this.db.doc('part/'+ this.friendId).set({
            name: fileName,
            ext: ext,
            url: url        
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
