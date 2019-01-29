import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
open:boolean;
  constructor(private router:Router, private auth:AngularFireAuth) { 

  }

  ngOnInit() {
    this.auth.authState.subscribe(user=>{
      if(!user)
        this.router.navigate(['auth']);      
    });  
  }
  sign(){
      let val = confirm("Logout");
      if(val)
    this.auth.auth.signOut().catch((error)=>{
      alert(error.message);
    });
  }
}
