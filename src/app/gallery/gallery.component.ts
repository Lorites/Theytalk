import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase} from '@angular/fire/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  messages:Observable<any[]>;
searchTerm:string;  
userId:string;
  constructor(private fire:AngularFireDatabase, private auth:AngularFireAuth) { }

  ngOnInit() {
    this.auth.authState.subscribe(user=>{    
      this.userId = user.uid; 
      this.messages = this.fire.list('gallery/'+ this.userId).valueChanges()
    });
    // this.messages = [
    //   {
    //     name: 'dsfggggggggggg ikolioklm . iklm.ipk piok;l,.op opkm;lki opkokkk pkkmklm.',
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
    // ]
  }
  delete(d,e){
    let val = confirm("Delete "+e+ "'s file");
    if(val){
      this.fire.object('gallery/'+ this.userId+'/'+d).remove();
      alert('Deleted');
    }
  }
}
