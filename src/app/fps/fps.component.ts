import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase} from '@angular/fire/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-fps',
  templateUrl: './fps.component.html',
  styleUrls: ['./fps.component.css']
})
export class FpsComponent implements OnInit {
  userId:string;
  messages:Observable<any[]>;
searchTerm:string;  
friends:Observable<any[]>;
    constructor(private auth:AngularFireAuth, private fire:AngularFireDatabase) { }
  
    ngOnInit() {
      this.auth.authState.subscribe(user=>{    
        this.userId = user.uid;   
        this.friends = this.fire.list('ffriend/' +this.userId, ref => ref.orderByChild('time')).valueChanges();      
      }); 
      this.messages = this.fire.list('status').valueChanges();

      // firebase.auth().onAuthStateChanged(function(user) {      
      //   if (user) {
      //     this.userId = user.uid;
      //   }
      // });
      // this.messages = [
      //   {
      //     name: 'gonawola@gmail.com: gboy',
      //     text: 'dsf erwscklrw erkwjdsl,jilrw ewkm  defkjlkjlefw ewfkdklnk;ldefw kerfdkjllekjf klewklrds,k',
      //     time: '11/7/2018 6:57 AM',
      //     userId: '1',
      //     url: 'favicon.ico',
      //     ext: 'jpg'
      //   },
      //   {
      //     name: 'gawola@gmail.com: boy',
      //     text: 'dsf',
      //     time: '11/7/2018 6:57 AM',
      //     userId: '2'
      //   },
      //   {
      //     name: 'gonawa@gmail.com: gboy',
      //     text: 'dsf',
      //     time: '11/7/2018 6:57 AM',
      //     userId: '3'
      //   }
      // ];
      // this.friends = [
      //   {
      //     userId: '1'
      //   },
      //   {
      //     userId: '2'
      //   }
      // ];
    }
}
