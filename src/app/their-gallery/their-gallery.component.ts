import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-their-gallery',
  templateUrl: './their-gallery.component.html',
  styleUrls: ['./their-gallery.component.css']
})
export class TheirGalleryComponent implements OnInit {
  messages:Observable<any[]>;
  friendId:string;
  name:string;
  userId:string;
  namee:string;
searchTerm:string;
open:boolean;
  constructor(private route:ActivatedRoute, private auth: AngularFireAuth, private fire:AngularFireDatabase) { }

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
    this.messages = this.fire.list('ggallery/'+this.friendId).valueChanges();  
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
  g(){
    this.open = false;
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
