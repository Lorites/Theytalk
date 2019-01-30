import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore  } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
messages:Observable<any[]>;
userId: string;
searchTerm:string;
  constructor(private afStorage: AngularFireStorage, private fire: AngularFireDatabase, private auth:AngularFireAuth, private db:AngularFirestore) { }

  ngOnInit() {
    this.auth.authState.subscribe(user=>{    
      this.userId = user.uid;   
      this.messages = this.fire.list('wall/'+this.userId).valueChanges();
    }); 
  }
  delete(d,e,f){
    let val = confirm("Delete " + e+ "'s file");
    if(val){
      this.fire.object('wall/' +this.userId+'/'+d).remove();
      this.fire.object('otherwall/' +this.userId+'/'+d).remove();
      this.afStorage.ref('wall/'+d).delete();
      this.db.doc('user/'+ this.userId).get().subscribe((snapshot)=>{
        if (snapshot.data().url === f)
          this.db.doc('user/'+ this.userId).delete();
        });
      alert('Deleted');
    }
  }
  dp(a,b,c){
    this.db.doc('user/'+ this.userId).set({
      name: a,
      ext: b,
      url: c        
    });
  }
  upload(e){
    var file = e.target.files[0];
    let fileName = file.name;
    let ext = fileName.split('.').pop();  
    let id = this.fire.createPushId();
    let time = firebase.database.ServerValue.TIMESTAMP;
    const ref = this.afStorage.ref('wall/'+id);
    ref.put(file).then(()=>{
      ref.getDownloadURL().subscribe((url)=> {           
        this.fire.object('wall/' +this.userId+'/'+id).set({
          id: id,
          name: fileName,
          time: time,
          url: url,
          ext: ext
        });
        this.fire.object('otherwall/' +this.userId + '/' + id).set({
          name: fileName,
          time: time,
          url: url,
          ext: ext
        });
        this.db.doc('user/'+ this.userId).set({
          name: fileName,
          ext: ext,
          url: url        
        });
      }); 

      }).catch(e=>{
      alert(e.message);
    });  
  }
}
