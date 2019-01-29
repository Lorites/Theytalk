import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
name:string;
email:string;
tex:string;
userId:string;
textt:string;
texttt:string;
open:boolean;
  constructor(private auth: AngularFireAuth, private fire: AngularFireDatabase, private db:AngularFirestore) { }

  ngOnInit() {
    this.auth.authState.subscribe(user=>{
      this.userId = user.uid;
      this.email = user.email;
      this.name = user.displayName;
      this.texttt = this.name + ': '+ this.email;
      if(this.texttt.length > 26) 
        this.textt = this.texttt.substring(0,25)+"...";
    else
      this.textt = this.texttt;    
  });

  }
  send(e){
    document.getElementById('te').focus();
    var user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: e,
      photoURL: ''
    });
    // .then(function() {
    //   alert('g');
    //   // Update successful.
    // }).catch(function(error) {
    //   alert(this.userId+','+e);
    //   // An error happened.
    //   alert(error.message);
    // });
    this.db.collection('users').doc(this.userId).update({
      name: e + ': '+ this.email
    });
    this.texttt = e + ': '+ this.email;
    if(this.texttt.length > 26) 
      this.textt = this.texttt.substring(0,25)+"...";
  else
    this.textt = this.texttt;      
  }
  g(){
    this.open = false;
  }
  clear(){
    let val = confirm("Clear " + this.texttt +"'s chat");
    if(val){      
      this.fire.object('messages/'+this.userId+'/'+this.userId).remove();
      alert('Cleared');
    }
  }
  add(){
    let time = firebase.database.ServerValue.TIMESTAMP;
    this.fire.object('ffriend/'+ this.userId + '/'+ this.userId).set({
      userId: this.userId,
      time: time
    });
    this.fire.object('fffriend/'+ this.userId + '/'+ this.userId).set({
      userId: this.userId,
      time: time
    });
  }
  remove(){
    this.fire.object('ffriend/'+ this.userId+'/'+this.userId).remove();
    this.fire.object('fffriend/'+ this.userId+'/'+this.userId).remove();
  }
}
