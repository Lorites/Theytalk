import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-created',
  templateUrl: './created.component.html',
  styleUrls: ['./created.component.css']
})
export class CreatedComponent implements OnInit {
  userId:string;
  email:string;
  id:string;
  tex:string;
  name:string;
  messages:Observable<any[]>;
    constructor(private auth:AngularFireAuth, private fire: AngularFireDatabase, private db:AngularFirestore, private afStorage:AngularFireStorage) { }
  
    ngOnInit() {  
      this.auth.authState.subscribe(user=>{    
        this.userId = user.uid;      
        this.email = user.email; 
        this.messages = this.fire.list('created/'+this.userId).valueChanges();

      });
      // this.messages = [
      //   {
      //     name: 'gonawola@gmail.com: gboy',
      //     time: '11/7/2018 6:57 AM',
      //     channelId: '1',
      //     show: true
      //   },
      //   {
      //     name: 'gawola@gmail.com: boy',
      //     time: '11/7/2018 6:57 AM',
      //     channelId: '2',
      //     show: true
      //   },
      //   {
      //     name: 'gonawa@gmail.com: gboy',
      //     time: '11/7/2018 6:57 AM',
      //     channelId: '3',
      //     show: false
      //   }
      // ]
    } 
    delete(d,e){
      let val = confirm("Delete " + e + "'s party");
      if(val){
        this.fire.object('created/'+this.userId+'/'+d).remove();
        this.fire.object('party/'+d).remove();
        this.fire.object('ginbox/'+d).remove();
        this.fire.object('gmessages/'+d).remove();
        this.fire.object('ggallery/'+d).remove();
        this.fire.object('iifriend/'+d).remove();
        this.fire.object('partywall/'+d).remove();
        this.fire.object('ggfriend/'+d).remove();
        this.afStorage.ref('editwall/'+d).delete();
        this.afStorage.ref('gchat/'+d).delete();
        this.db.doc('par/'+d).delete();
        this.db.doc('part/'+d).delete();
        alert('Deleted');
      }
    }
    clear(d,e){
      let val = confirm("Clear " + e + "'s chat");
      if(val){
        this.fire.object('gmessages/'+d).remove();
        this.fire.object('ginbox/'+d).update({
          text: '',
          url: '',
          ext: ''
        });
        alert('Cleared');
      }
    }
    hide(a){
      let data = {
        show: false
      };
      this.fire.object('created/'+this.userId+'/'+a).update(data);
      this.fire.object('party/'+a).update(data);
      this.fire.object('ginbox/'+a).update(data);
    }
    end(){
      document.getElementById('te').focus();
    }
    show(a){
      let data = {
        show: true
      };
      this.fire.object('created/'+this.userId+'/'+a).update(data);
      this.fire.object('party/'+a).update(data);
      this.fire.object('ginbox/'+a).update(data);
    }
    send(e){
      this.tex = "";
      this.end();
      let id = this.fire.createPushId();
      let data = {
        name: e +': '+this.email,
        time: firebase.database.ServerValue.TIMESTAMP,
        channelId: id,
        show: false
      };
      this.fire.object('created/'+this.userId+'/'+id).set(data);
      this.fire.object('party/'+id).set(data);
      this.fire.object('ginbox/'+id).set({
        name: e+': '+this.email,
        channelId: id,
        show: false
      });
      this.db.doc('par/'+id).set({
        userId: this.userId
      });
    }
    set(g){
      this.end();
      let data = {
        name: g +': '+this.email
      };
      this.fire.object('created/'+this.userId+'/'+this.id).update(data);
      this.fire.object('party/'+this.id).update(data);
      this.fire.object('ginbox'+this.id).update(data);
      this.name = g+': '+this.email;
    }
    edit(e,f){
      if (e===this.id){
        this.id = '';
        this.name = '';
      }
      else{
        this.id = e;
        this.name = f;
      }
    }
  }
