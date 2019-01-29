import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  constructor(private router:Router, private fire:AngularFireDatabase, private auth:AngularFireAuth, private db:AngularFirestore) {}

  ngOnInit() {
    this.auth.authState.subscribe(user=>{
      if(user && user.emailVerified){
        let userId = user.uid;
        let data = {
          userId: userId,          
          name: user.displayName+ ": "+ user.email
        };
        this.db.doc('users/'+userId).set(data);
        this.fire.object('status/' + userId).set(data);
        this.router.navigate(['home/settings']);
      }
    });  
  }
login(email,password){
  this.auth.auth.signInWithEmailAndPassword(email, password).catch((error)=> {
    alert(error.message);
  });
}
signup(email,password,name){
  this.auth.auth.createUserWithEmailAndPassword(email, password).then(()=>{
    var user = this.auth.auth.currentUser;
    user.sendEmailVerification().then(()=> {
      alert('Check email to validate account');
    }).catch((error)=> {
      alert(error.message);
    });
    user.updateProfile({
      displayName: name,
      photoURL: ''
    });
  }).catch((error)=> {
    // Handle Errors here.
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // ...
    alert(error.message);
  });
}
forget(emailAddress){
  this.auth.auth.sendPasswordResetEmail(emailAddress).then(()=> {
  // Email sent.
  alert('Check email to reset password');
}).catch((error)=> {
  // An error happened.
  alert(error.message);
});
}
show(){
  document.getElementById('password').focus()
  document.getElementById('password').setAttribute('type', 'text');
  setTimeout(()=>{
  document.getElementById('password').setAttribute('type', 'password');
  },500);
}
facebook(){
  var provider = new firebase.auth.FacebookAuthProvider();
  this.auth.auth.signInWithPopup(provider).then((result)=> {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    // var token = result.credential.accessToken;
    // The signed-in user info.
    // var user = result.user;
    // ...
  }).catch((error)=> {
    // Handle Errors here.
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // // The email of the user's account used.
    // var email = error.email;
    // // The firebase.auth.AuthCredential type that was used.
    // var credential = error.credential;
    // ...
    alert(error.message);
  });
}
google(){
  var provider = new firebase.auth.GoogleAuthProvider();
  this.auth.auth.signInWithPopup(provider).then((result)=> {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    // var token = result.credential.accessToken;
    // The signed-in user info.
    // var user = result.user;
    // ...
  }).catch((error)=> {
    // Handle Errors here.
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // // The email of the user's account used.
    // var email = error.email;
    // // The firebase.auth.AuthCredential type that was used.
    // var credential = error.credential;
    // ...
    alert(error.message);
  });
}
twitter(){
  var provider = new firebase.auth.TwitterAuthProvider();
  this.auth.auth.signInWithPopup(provider).then((result)=> {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    // var token = result.credential.accessToken;
    // The signed-in user info.
    // var user = result.user;
    // ...
  }).catch((error)=> {
    // Handle Errors here.
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // // The email of the user's account used.
    // var email = error.email;
    // // The firebase.auth.AuthCredential type that was used.
    // var credential = error.credential;
    // ...
    alert(error.message);
  });
}
github(){
  var provider = new firebase.auth.GithubAuthProvider();
  this.auth.auth.signInWithPopup(provider).then((result)=> {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    // var token = result.credential.accessToken;
    // The signed-in user info.
    // var user = result.user;
    // ...
  }).catch((error)=> {
    // Handle Errors here.
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // // The email of the user's account used.
    // var email = error.email;
    // // The firebase.auth.AuthCredential type that was used.
    // var credential = error.credential;
    // ...
    alert(error.message);
  });
}
}

