import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase} from '@angular/fire/database';
import { AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  thi:boolean;
  that:boolean;
users:Observable<any[]>;
fffriends:Observable<any[]>;
ffriends:Observable<any[]>;
searchTerm:string;  
userId: string;
  constructor(private auth:AngularFireAuth, private db:AngularFirestore, private fire:AngularFireDatabase) { }

  ngOnInit() {
    this.auth.authState.subscribe(user=>{    
      this.userId = user.uid;   
      this.ffriends = this.fire.list('ffriend/' +this.userId, ref => ref.orderByChild('time')).valueChanges();      
      this.fffriends = this.fire.list('fffriend/' +this.userId, ref => ref.orderByChild('time')).valueChanges();
  }); 
  this.users = this.db.collection('users').valueChanges();

    this.thi = true;
    // this.users = [
    //   {
    //     name: 'gonawola@yahoo.com: Onawola razak gboyega',
    //     userId: '1'
    //   },
    //   {
    //     name: 'Onawola',
    //     userId: '2'
    //   },
    //   {
    //     name: 'On',
    //     userId: '3'
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
