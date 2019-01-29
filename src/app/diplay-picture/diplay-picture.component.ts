import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore  } from '@angular/fire/firestore';

@Component({
  selector: 'app-diplay-picture',
  templateUrl: './diplay-picture.component.html',
  styleUrls: ['./diplay-picture.component.css']
})
export class DiplayPictureComponent implements OnInit {
userId: string;
ext: string;
url: string;
name: string;
  constructor(private auth: AngularFireAuth, private db:AngularFirestore) { }

  ngOnInit() {
    this.auth.authState.subscribe(user=>{    
      this.userId = user.uid; 
      this.db.doc('user/'+ this.userId).get().subscribe((snapshot)=>{
        this.name = snapshot.data().name;
        this.url = snapshot.data().url;
        this.ext = snapshot.data().ext;
        });
  }); 
 }

}
