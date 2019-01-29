import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
searchTerm:string;  
userId:string;
  messages: Observable<any[]>;
    constructor(private auth: AngularFireAuth, private fire: AngularFireDatabase) { }
  
    ngOnInit() {
      this.auth.authState.subscribe(user=>{
        this.userId = user.uid;
        this.messages = this.fire.list('inbox/'+this.userId, ref => ref.orderByChild('time')).valueChanges();
      });
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
      // ]
    }
    delete(d,e){
      let val = confirm("Delete " +e+"'s message");
      if(val){
        this.fire.object('inbox/'+this.userId+'/'+d).remove();
        alert('Deleted');
      }
    }
}
