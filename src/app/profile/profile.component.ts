import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId:string;
  text:string;
  messages:Observable<any[]>;
    constructor(private afStorage:AngularFireStorage, private fire:AngularFireDatabase, private auth:AngularFireAuth) { }
  
    ngOnInit() {
    this.auth.authState.subscribe(user=>{
          this.userId = user.uid;
          this.messages = this.fire.list('profile/'+this.userId).valueChanges();      
      });
      // this.messages = [
      //   {
      //     name: 'dsf erwscklrw erkwjdsl,jilrw ewkm  defkjlkjlefw ewfkdklnk;ldefw kerfdkjllekjf klewklrds,k',
      //     time: new Date,
      //     userId: '1',
      //     url: 'favicon.ico',
      //     ext: 'jpg'
      //   },
      //   {
      //     name: 'dsf',
      //     time: '11/7/2018 6:57 AM',
      //     userId: '2'
      //   },
      //   {
      //     name: 'dsf',
      //     time: '11/7/2018 6:57 AM',
      //     userId: '3'
      //   }
      // ];
    }
    send(e){
      this.text = "";
      document.getElementById('te').focus();
      let id = this.fire.createPushId();
      let time = firebase.database.ServerValue.TIMESTAMP;
      this.fire.object('profile/' +this.userId+'/'+id).set({
        id: id,
        name: e,
        time: time
      });
      this.fire.object('otherprofile/' +this.userId+'/'+id).set({
        name: e,
        time: time
      });
      this.fire.object('status/' +this.userId).update({
        text: e,
        time: time
      });        
    }
    delete(d,e){
      let val = confirm("Delete " + e + "'s status");
      if(val){
        this.fire.object('profile/' +this.userId+'/'+d).remove();      
        this.fire.object('otherprofile/' +this.userId+'/'+d).remove();      
        this.afStorage.ref('profile/'+d).delete();
        this.fire.object('status/'+ this.userId +'/text').valueChanges().subscribe((snapshot)=>{
          if (snapshot === e)
            this.fire.object('status/'+ this.userId).update({
              text: '',
              time: '',
              url: '',
              ext: ''
            });
          });
        alert('Deleted');
      }
    }
    upload(e){
      var file = e.target.files[0];
      let fileName = file.name;
      let ext = fileName.split('.').pop();  
      let id = this.fire.createPushId();
      let time = firebase.database.ServerValue.TIMESTAMP;
      const ref = this.afStorage.ref('profile/'+id);
      ref.put(file).then(()=>{
      ref.getDownloadURL().subscribe((url)=> {           
        this.fire.object('profile/' +this.userId+'/'+id).set({
          id: id,
          name: fileName,
          time: time,
          url: url,
          ext: ext
        });
        this.fire.object('otherprofile/' +this.userId+'/'+id).set({          
          name: fileName,
          time: time,
          url: url,
          ext: ext
        });
        this.fire.object('status/' +this.userId).update({
          text: fileName,
          time: time,
          url: url,
          ext: ext
        });
      });
      }).catch(e=>{
        alert(e.message);
      });  
    }
}
