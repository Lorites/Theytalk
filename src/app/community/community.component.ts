import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  users:Observable<any[]>;
  fffriends:Observable<any[]>;
  ffriends:Observable<any[]>;
  thi:boolean;
  that:boolean;
  userId:string;
searchTerm:string;  
  constructor(private auth:AngularFireAuth, private fire:AngularFireDatabase) { }

  ngOnInit() {
    this.auth.authState.subscribe(user=>{    
      this.userId = user.uid;   
    this.users = this.fire.list('party').valueChanges();
  this.ffriends = this.fire.list('gfriend/'+this.userId, ref => ref.orderByChild('time')).valueChanges();
  this.fffriends = this.fire.list('ifriend/'+this.userId, ref => ref.orderByChild('time')).valueChanges();
    });
    this.thi = true;
    // this.users = [
    //   {
    //     name: 'gonawola@yahoo.com: Onawola razak gboyega',
    //     userId: '1',
    //     time:new Date()        
    //   },
    //   {
    //     name: 'Onawola',
    //     userId: '2',
    //     time:new Date()
    //   },
    //   {
    //     name: 'On',
    //     userId: '3',
    //     time:new Date()
    //   }
    // ];
    // this.fffriends = [
    //   {
    //     userId: '1'
    //   },
    //   {
    //     userId: '2'
    //   }
    // ];
    // this.ffriends = [
    //   {
    //     userId: '1'
    //   },
    //   {
    //     userId: '3'
    //   }
    // ];
  }
}
