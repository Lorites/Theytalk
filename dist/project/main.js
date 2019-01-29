(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _friend_friend_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./friend/friend.component */ "./src/app/friend/friend.component.ts");
/* harmony import */ var _community_community_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./community/community.component */ "./src/app/community/community.component.ts");
/* harmony import */ var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./inbox/inbox.component */ "./src/app/inbox/inbox.component.ts");
/* harmony import */ var _fpi_fpi_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fpi/fpi.component */ "./src/app/fpi/fpi.component.ts");
/* harmony import */ var _fci_fci_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fci/fci.component */ "./src/app/fci/fci.component.ts");
/* harmony import */ var _fps_fps_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fps/fps.component */ "./src/app/fps/fps.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _created_created_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./created/created.component */ "./src/app/created/created.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _wall_wall_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./wall/wall.component */ "./src/app/wall/wall.component.ts");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./people/people.component */ "./src/app/people/people.component.ts");
/* harmony import */ var _channels_channels_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./channels/channels.component */ "./src/app/channels/channels.component.ts");
/* harmony import */ var _groupchat_groupchat_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./groupchat/groupchat.component */ "./src/app/groupchat/groupchat.component.ts");
/* harmony import */ var _their_created_channels_their_created_channels_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./their-created-channels/their-created-channels.component */ "./src/app/their-created-channels/their-created-channels.component.ts");
/* harmony import */ var _their_profile_their_profile_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./their-profile/their-profile.component */ "./src/app/their-profile/their-profile.component.ts");
/* harmony import */ var _their_wall_their_wall_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./their-wall/their-wall.component */ "./src/app/their-wall/their-wall.component.ts");
/* harmony import */ var _their_following_channels_inbox_their_following_channels_inbox_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./their-following-channels-inbox/their-following-channels-inbox.component */ "./src/app/their-following-channels-inbox/their-following-channels-inbox.component.ts");
/* harmony import */ var _their_following_people_status_their_following_people_status_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./their-following-people-status/their-following-people-status.component */ "./src/app/their-following-people-status/their-following-people-status.component.ts");
/* harmony import */ var _their_friends_their_friends_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./their-friends/their-friends.component */ "./src/app/their-friends/their-friends.component.ts");
/* harmony import */ var _their_communities_their_communities_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./their-communities/their-communities.component */ "./src/app/their-communities/their-communities.component.ts");
/* harmony import */ var _diplay_picture_diplay_picture_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./diplay-picture/diplay-picture.component */ "./src/app/diplay-picture/diplay-picture.component.ts");
/* harmony import */ var _their_diplay_picture_their_diplay_picture_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./their-diplay-picture/their-diplay-picture.component */ "./src/app/their-diplay-picture/their-diplay-picture.component.ts");
/* harmony import */ var _their_gallery_their_gallery_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./their-gallery/their-gallery.component */ "./src/app/their-gallery/their-gallery.component.ts");
/* harmony import */ var _fanpage_fanpage_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./fanpage/fanpage.component */ "./src/app/fanpage/fanpage.component.ts");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./filter.pipe */ "./src/app/filter.pipe.ts");
/* harmony import */ var _channel_wall_channel_wall_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./channel-wall/channel-wall.component */ "./src/app/channel-wall/channel-wall.component.ts");
/* harmony import */ var _channel_fanpage_channel_fanpage_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./channel-fanpage/channel-fanpage.component */ "./src/app/channel-fanpage/channel-fanpage.component.ts");
/* harmony import */ var _channel_display_picture_channel_display_picture_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./channel-display-picture/channel-display-picture.component */ "./src/app/channel-display-picture/channel-display-picture.component.ts");
/* harmony import */ var _edit_wall_edit_wall_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./edit-wall/edit-wall.component */ "./src/app/edit-wall/edit-wall.component.ts");
/* harmony import */ var _reverse_pipe__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./reverse.pipe */ "./src/app/reverse.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












































var routes = [
    { path: 'home', redirectTo: '/auth', pathMatch: 'full' },
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_10__["AuthComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], children: [
            { path: 'people', component: _people_people_component__WEBPACK_IMPORTED_MODULE_24__["PeopleComponent"] },
            { path: 'friends', component: _friend_friend_component__WEBPACK_IMPORTED_MODULE_13__["FriendComponent"] },
            { path: 'channels', component: _community_community_component__WEBPACK_IMPORTED_MODULE_14__["CommunityComponent"] },
            { path: 'inbox', component: _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_15__["InboxComponent"] },
            { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_19__["SettingsComponent"] },
            { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"] },
            { path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_22__["GalleryComponent"] },
            { path: 'wall', component: _wall_wall_component__WEBPACK_IMPORTED_MODULE_23__["WallComponent"] },
            { path: 'displayPicture', component: _diplay_picture_diplay_picture_component__WEBPACK_IMPORTED_MODULE_34__["DiplayPictureComponent"] },
            { path: 'forum', component: _created_created_component__WEBPACK_IMPORTED_MODULE_20__["CreatedComponent"] },
            { path: 'followingPeopleInbox', component: _fpi_fpi_component__WEBPACK_IMPORTED_MODULE_16__["FpiComponent"] },
            { path: 'followingPartiesInbox', component: _fci_fci_component__WEBPACK_IMPORTED_MODULE_17__["FciComponent"] },
            { path: 'followingPeopleStatus', component: _fps_fps_component__WEBPACK_IMPORTED_MODULE_18__["FpsComponent"] },
            { path: 'parties', component: _channels_channels_component__WEBPACK_IMPORTED_MODULE_25__["ChannelsComponent"] },
            { path: 'chat/:id/:name', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_12__["ChatComponent"] },
            { path: 'partyChat/:id/:name', component: _groupchat_groupchat_component__WEBPACK_IMPORTED_MODULE_26__["GroupchatComponent"] },
            { path: 'forum/:id/:name', component: _their_created_channels_their_created_channels_component__WEBPACK_IMPORTED_MODULE_27__["TheirCreatedChannelsComponent"] },
            { path: 'channels/:id/:name', component: _their_communities_their_communities_component__WEBPACK_IMPORTED_MODULE_33__["TheirCommunitiesComponent"] },
            { path: 'followingPartiesInbox/:id/:name', component: _their_following_channels_inbox_their_following_channels_inbox_component__WEBPACK_IMPORTED_MODULE_30__["TheirFollowingChannelsInboxComponent"] },
            { path: 'profile/:id/:name', component: _their_profile_their_profile_component__WEBPACK_IMPORTED_MODULE_28__["TheirProfileComponent"] },
            { path: 'wall/:id/:name', component: _their_wall_their_wall_component__WEBPACK_IMPORTED_MODULE_29__["TheirWallComponent"] },
            { path: 'editPartyWall/:id/:name', component: _edit_wall_edit_wall_component__WEBPACK_IMPORTED_MODULE_42__["EditWallComponent"] },
            { path: 'partyWall/:id/:name', component: _channel_wall_channel_wall_component__WEBPACK_IMPORTED_MODULE_39__["ChannelWallComponent"] },
            { path: 'friends/:id/:name', component: _their_friends_their_friends_component__WEBPACK_IMPORTED_MODULE_32__["TheirFriendsComponent"] },
            { path: 'displayPicture/:id/:name', component: _their_diplay_picture_their_diplay_picture_component__WEBPACK_IMPORTED_MODULE_35__["TheirDiplayPictureComponent"] },
            { path: 'partyDisplayPicture/:id/:name', component: _channel_display_picture_channel_display_picture_component__WEBPACK_IMPORTED_MODULE_41__["ChannelDisplayPictureComponent"] },
            { path: 'partyGallery/:id/:name', component: _their_gallery_their_gallery_component__WEBPACK_IMPORTED_MODULE_36__["TheirGalleryComponent"] },
            { path: 'fanPage/:id/:name', component: _fanpage_fanpage_component__WEBPACK_IMPORTED_MODULE_37__["FanpageComponent"] },
            { path: 'editFanPage/:id/:name', component: _channel_fanpage_channel_fanpage_component__WEBPACK_IMPORTED_MODULE_40__["ChannelFanpageComponent"] },
            { path: 'followingPeopleStatus/:id/:name', component: _their_following_people_status_their_following_people_status_component__WEBPACK_IMPORTED_MODULE_31__["TheirFollowingPeopleStatusComponent"] }
        ] },
    { path: '**', redirectTo: '/auth', pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_10__["AuthComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_12__["ChatComponent"],
                _friend_friend_component__WEBPACK_IMPORTED_MODULE_13__["FriendComponent"],
                _community_community_component__WEBPACK_IMPORTED_MODULE_14__["CommunityComponent"],
                _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_15__["InboxComponent"],
                _fpi_fpi_component__WEBPACK_IMPORTED_MODULE_16__["FpiComponent"],
                _fci_fci_component__WEBPACK_IMPORTED_MODULE_17__["FciComponent"],
                _fps_fps_component__WEBPACK_IMPORTED_MODULE_18__["FpsComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_19__["SettingsComponent"],
                _created_created_component__WEBPACK_IMPORTED_MODULE_20__["CreatedComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_22__["GalleryComponent"],
                _wall_wall_component__WEBPACK_IMPORTED_MODULE_23__["WallComponent"],
                _people_people_component__WEBPACK_IMPORTED_MODULE_24__["PeopleComponent"],
                _channels_channels_component__WEBPACK_IMPORTED_MODULE_25__["ChannelsComponent"],
                _groupchat_groupchat_component__WEBPACK_IMPORTED_MODULE_26__["GroupchatComponent"],
                _their_created_channels_their_created_channels_component__WEBPACK_IMPORTED_MODULE_27__["TheirCreatedChannelsComponent"],
                _their_profile_their_profile_component__WEBPACK_IMPORTED_MODULE_28__["TheirProfileComponent"],
                _their_wall_their_wall_component__WEBPACK_IMPORTED_MODULE_29__["TheirWallComponent"],
                _their_following_channels_inbox_their_following_channels_inbox_component__WEBPACK_IMPORTED_MODULE_30__["TheirFollowingChannelsInboxComponent"],
                _their_following_people_status_their_following_people_status_component__WEBPACK_IMPORTED_MODULE_31__["TheirFollowingPeopleStatusComponent"],
                _their_friends_their_friends_component__WEBPACK_IMPORTED_MODULE_32__["TheirFriendsComponent"],
                _their_communities_their_communities_component__WEBPACK_IMPORTED_MODULE_33__["TheirCommunitiesComponent"],
                _diplay_picture_diplay_picture_component__WEBPACK_IMPORTED_MODULE_34__["DiplayPictureComponent"],
                _their_diplay_picture_their_diplay_picture_component__WEBPACK_IMPORTED_MODULE_35__["TheirDiplayPictureComponent"],
                _their_gallery_their_gallery_component__WEBPACK_IMPORTED_MODULE_36__["TheirGalleryComponent"],
                _fanpage_fanpage_component__WEBPACK_IMPORTED_MODULE_37__["FanpageComponent"],
                _filter_pipe__WEBPACK_IMPORTED_MODULE_38__["FilterPipe"],
                _channel_wall_channel_wall_component__WEBPACK_IMPORTED_MODULE_39__["ChannelWallComponent"],
                _channel_fanpage_channel_fanpage_component__WEBPACK_IMPORTED_MODULE_40__["ChannelFanpageComponent"],
                _channel_display_picture_channel_display_picture_component__WEBPACK_IMPORTED_MODULE_41__["ChannelDisplayPictureComponent"],
                _edit_wall_edit_wall_component__WEBPACK_IMPORTED_MODULE_42__["EditWallComponent"],
                _reverse_pipe__WEBPACK_IMPORTED_MODULE_43__["ReversePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_4__["AngularFireModule"].initializeApp({
                    apiKey: "AIzaSyCE5ClWOnAsQ6Lf_GdBIeVRIN2oDw5NAWc",
                    authDomain: "talker-cdb84.firebaseapp.com",
                    databaseURL: "https://talker-cdb84.firebaseio.com",
                    projectId: "talker-cdb84",
                    storageBucket: "talker-cdb84.appspot.com",
                    messagingSenderId: "77591635657"
                }),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"].enablePersistence(),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.css":
/*!*****************************************!*\
  !*** ./src/app/auth/auth.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"favicon.ico\" class=\"all\" alt=\"Theytalk\">\n  <span class=\"topic bold\"> Theytalk</span>\n<form (submit)=\"login(email.value, password.value)\">\n  <div class=\"d\">\n  <input type=\"email\" title=\"email@example.com\" placeholder=\"Email\" pattern=\"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$\" \n  required class=\"full inpu gap black write\" ngModel name=\"email\" #email=\"ngModel\">\n  <a (click)=\"show()\" class=\"left design bo dess download\">\n      <i class=\"fa fa-eye gree do\"></i>\n    </a>\n  <div class=\"doo\">\n  <input minlength=\"6\" title=\"Must contain at least six characters\" required id=\"password\" type=\"password\" placeholder=\"Password\" class=\"full inpu gap black write\" ngModel name=\"password\" #password=\"ngModel\">\n  </div>\n  <div class=\"clear\"></div>\n  <input required type=\"text\" title='Can not contain any of the following characters: \\ / [ ] \"'  pattern=\"[^/\\][\\\\\\x22]+\" placeholder=\"Username\" class=\"full inpu gap black write\" ngModel name=\"name\" #name=\"ngModel\">  \n</div>\n<button type=\"submit\" [disabled]=\"email.invalid || password.invalid\" class=\"full submit des gap\">Login\n  <i class=\"fa fa-sign-in-alt\"></i>\n</button>\n</form>\n<button (click)=\"signup(email.value, password.value, name.value)\" [disabled]=\"email.invalid || password.invalid || name.invalid\" class=\"full submit des gap\">Create account\n  <i class=\"fa fa-edit\"></i>\n</button>\n<button (click)=\"forget(email.value)\" [disabled]=\"email.invalid\" class=\"full submit des\">Reset password\n  <i class=\"fa fa-key\"></i>\n</button>\n<h1>Login using:</h1>\n<button (click)=\"google()\" class=\"full design des gap\">Google  \n  <i class=\"fab fa-google\"></i>\n</button>\n<button (click)=\"facebook()\" class=\"full design des gap\">Facebook\n  <i class=\"fab fa-facebook\"></i>\n</button>\n<button (click)=\"twitter()\" class=\"full design des gap\">Twitter\n  <i class=\"fab fa-twitter\"></i>\n</button>\n<button (click)=\"github()\" class=\"full design des\">GitHub\n  <i class=\"fab fa-github\"></i>\n</button>\n\n\n"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthComponent = /** @class */ (function () {
    function AuthComponent(router, fire, auth, db) {
        this.router = router;
        this.fire = fire;
        this.auth = auth;
        this.db = db;
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            if (user && user.emailVerified) {
                var userId = user.uid;
                var data = {
                    userId: userId,
                    name: user.displayName + ": " + user.email
                };
                _this.db.doc('users/' + userId).set(data);
                _this.fire.object('status/' + userId).set(data);
                _this.router.navigate(['home/settings']);
            }
        });
    };
    AuthComponent.prototype.login = function (email, password) {
        this.auth.auth.signInWithEmailAndPassword(email, password).catch(function (error) {
            alert(error.message);
        });
    };
    AuthComponent.prototype.signup = function (email, password, name) {
        var _this = this;
        this.auth.auth.createUserWithEmailAndPassword(email, password).then(function () {
            var user = _this.auth.auth.currentUser;
            user.sendEmailVerification().then(function () {
                alert('Check email to validate account');
            }).catch(function (error) {
                alert(error.message);
            });
            user.updateProfile({
                displayName: name,
                photoURL: ''
            });
        }).catch(function (error) {
            // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // ...
            alert(error.message);
        });
    };
    AuthComponent.prototype.forget = function (emailAddress) {
        this.auth.auth.sendPasswordResetEmail(emailAddress).then(function () {
            // Email sent.
            alert('Check email to reset password');
        }).catch(function (error) {
            // An error happened.
            alert(error.message);
        });
    };
    AuthComponent.prototype.show = function () {
        document.getElementById('password').focus();
        document.getElementById('password').setAttribute('type', 'text');
        setTimeout(function () {
            document.getElementById('password').setAttribute('type', 'password');
        }, 500);
    };
    AuthComponent.prototype.facebook = function () {
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].FacebookAuthProvider();
        this.auth.auth.signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            // var token = result.credential.accessToken;
            // The signed-in user info.
            // var user = result.user;
            // ...
        }).catch(function (error) {
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
    };
    AuthComponent.prototype.google = function () {
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GoogleAuthProvider();
        this.auth.auth.signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            // var token = result.credential.accessToken;
            // The signed-in user info.
            // var user = result.user;
            // ...
        }).catch(function (error) {
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
    };
    AuthComponent.prototype.twitter = function () {
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].TwitterAuthProvider();
        this.auth.auth.signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            // var token = result.credential.accessToken;
            // The signed-in user info.
            // var user = result.user;
            // ...
        }).catch(function (error) {
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
    };
    AuthComponent.prototype.github = function () {
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"].GithubAuthProvider();
        this.auth.auth.signInWithPopup(provider).then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            // var token = result.credential.accessToken;
            // The signed-in user info.
            // var user = result.user;
            // ...
        }).catch(function (error) {
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
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.css */ "./src/app/auth/auth.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/channel-display-picture/channel-display-picture.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/channel-display-picture/channel-display-picture.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWwtZGlzcGxheS1waWN0dXJlL2NoYW5uZWwtZGlzcGxheS1waWN0dXJlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/channel-display-picture/channel-display-picture.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/channel-display-picture/channel-display-picture.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n    <i class=\"fa fa-portrait it green\" title=\"Display picture\"></i>\n    <a class=\"bold\" (click)=\"open=true\">{{namee}}</a>\n  </div>\n  <div *ngIf=\"open\" class=\"page fixed index bottom top lef rit black\" (click)=\"g()\">\n    </div>\n    <div *ngIf=\"open\" class=\"fixed index bottom\" (click)=\"g()\">\n    <a href=\"/home/partyChat/{{friendId}}/{{name}}#bottom\" class=\"design left bo dess download\" title=\"Party chat\">\n        <i class=\"fa fa-comments gree do\"></i>            \n        </a>\n      <button class=\"box design des\" title=\"Wall\" routerLink=\"/home/partyWall/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-user-secret\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Gallery\" routerLink=\"/home/partyGallery/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-user-clock\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Display picture\" routerLink=\"/home/partyDisplayPicture/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-portrait\"></i>            \n    </button>\n    <button class=\"box design des\" routerLink=\"/home/fanPage/{{friendId}}/{{name}}\" title=\"Fan page\">\n      <i class=\"fa fa-user-circle\"></i>        \n  </button>\n  <button [disabled]=\"!userId\" class=\"box design des\" title=\"Follow\" (click)=\"add()\" >\n        <i class=\"fa fa-user-plus\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"box design des\" title=\"Unfollow\" (click)=\"remove()\">\n        <i class=\"fa fa-user-minus\"></i>            \n    </button>\n      </div>\n  <div class=\"sp\">\n      <div class=\"write\">\n          {{text}}\n          <br>\n    <a [href]=\"url\" *ngIf=\"url\" download class=\"design left bo dess download\" title=\"Download file\">\n      <i class=\"fa fa-download gree do\"></i>\n    </a>\n    <div class=\"clear\"></div>\n    </div>\n  <img *ngIf=\"ext === 'jpg' || ext === 'png' || ext === 'gif'\" [src]=\"url\">    \n    <video *ngIf=\"ext === 'mp4'\" controls>\n      <source [src]=\"url\" type=\"video/mp4\">\n  </video>\n  <audio *ngIf=\"ext === 'mp3'\" controls>\n      <source [src]=\"url\" type=\"audio/mp3\">\n  </audio>\n  <i *ngIf=\"ext && ext !== 'mp3' && ext !== 'mp4' && ext !== 'jpg' && ext !== 'png' && ext !== 'gif'\" class=\"fa fa-5x fa-file\"></i>\n  \n  </div>"

/***/ }),

/***/ "./src/app/channel-display-picture/channel-display-picture.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/channel-display-picture/channel-display-picture.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChannelDisplayPictureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelDisplayPictureComponent", function() { return ChannelDisplayPictureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChannelDisplayPictureComponent = /** @class */ (function () {
    function ChannelDisplayPictureComponent(route, auth, db, fire) {
        this.route = route;
        this.auth = auth;
        this.db = db;
        this.fire = fire;
    }
    ChannelDisplayPictureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
        });
        this.friendId = this.route.snapshot.paramMap.get('id');
        this.name = this.route.snapshot.paramMap.get('name');
        if (this.name.length > 26)
            this.namee = this.name.substring(0, 25) + "...";
        else
            this.namee = this.name;
        this.db.doc('part/' + this.friendId).get().subscribe(function (snapshot) {
            _this.text = snapshot.data().name;
            _this.url = snapshot.data().url;
            _this.ext = snapshot.data().ext;
        });
    };
    ChannelDisplayPictureComponent.prototype.g = function () {
        this.open = false;
    };
    ChannelDisplayPictureComponent.prototype.add = function () {
        var time = firebase_app__WEBPACK_IMPORTED_MODULE_5__["database"].ServerValue.TIMESTAMP;
        this.fire.object('gfriend/' + this.userId + '/' + this.friendId).set({
            userId: this.friendId,
            time: time
        });
        this.fire.object('ggfriend/' + this.friendId + '/' + this.userId).set({
            userId: this.userId,
            time: time
        });
    };
    ChannelDisplayPictureComponent.prototype.remove = function () {
        this.fire.object('gfriend/' + this.userId + '/' + this.friendId).remove();
        this.fire.object('ggfriend/' + this.friendId + '/' + this.userId).remove();
    };
    ChannelDisplayPictureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-channel-display-picture',
            template: __webpack_require__(/*! ./channel-display-picture.component.html */ "./src/app/channel-display-picture/channel-display-picture.component.html"),
            styles: [__webpack_require__(/*! ./channel-display-picture.component.css */ "./src/app/channel-display-picture/channel-display-picture.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]])
    ], ChannelDisplayPictureComponent);
    return ChannelDisplayPictureComponent;
}());



/***/ }),

/***/ "./src/app/channel-fanpage/channel-fanpage.component.css":
/*!***************************************************************!*\
  !*** ./src/app/channel-fanpage/channel-fanpage.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWwtZmFucGFnZS9jaGFubmVsLWZhbnBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/channel-fanpage/channel-fanpage.component.html":
/*!****************************************************************!*\
  !*** ./src/app/channel-fanpage/channel-fanpage.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n    <i class=\"fa fa-user-circle it green\" title=\"Fan page\"></i>\n    <a class=\"bold\" (click)=\"open=true\">{{namee}}</a>\n  </div>\n    <div *ngIf=\"open\" class=\"page fixed index bottom top lef rit black\" (click)=\"g()\">\n    </div>\n    <div *ngIf=\"open\" class=\"fixed index bottom\" (click)=\"g()\">\n    <a href=\"/home/partyChat/{{friendId}}/{{name}}#bottom\" class=\"design left bo dess download\" title=\"Party chat\">\n      <i class=\"fa fa-comments gree do\"></i>            \n    </a>\n    <button class=\"box design des\" title=\"Wall\" routerLink=\"/home/partyWall/{{friendId}}/{{name}}\">\n      <i class=\"fa fa-user-secret\"></i>            \n  </button>\n  <button class=\"box design des\" title=\"Gallery\" routerLink=\"/home/partyGallery/{{friendId}}/{{name}}\">\n      <i class=\"fa fa-user-clock\"></i>            \n  </button>\n  <button class=\"box design des\" title=\"Display picture\" routerLink=\"/home/partyDisplayPicture/{{friendId}}/{{name}}\">\n      <i class=\"fa fa-portrait\"></i>            \n  </button>\n  <button class=\"box design des\" routerLink=\"/home/fanPage/{{friendId}}/{{name}}\" title=\"Fan page\">\n    <i class=\"fa fa-user-circle\"></i>        \n</button>\n<button [disabled]=\"!userId\" class=\"box design des\" title=\"Follow\" (click)=\"add()\" >\n    <i class=\"fa fa-user-plus\"></i>            \n</button>\n<button [disabled]=\"!userId\" class=\"box design des\" title=\"Unfollow\" (click)=\"remove()\">\n    <i class=\"fa fa-user-minus\"></i>            \n</button>\n    </div>\n  <div class=\"pos fixed bottom lef\">\n    <input  class=\"inpu full black write\" [(ngModel)]=\"searchTerm\">\n  </div>\n  <div class=\"fixed full fix\">\n      <button title=\"People\" [class.design]=\"!tha\"  [class.white]=\"tha\" (click)=\"that=false; tha=true; thi=false;\" class=\"des three\">\n          <i class=\"fa fa-users\"></i>\n      </button>\n      <button title=\"Following\" [class.design]=\"!thi\" [class.white]=\"thi\" (click)=\"that=false; thi=true; tha=false;\" class=\"des three\">\n          <i class=\"fa fa-user-check\"></i>\n      </button>\n      <button title=\"Followers\"  [class.white]=\"that\" [class.design]=\"!that\" (click)=\"thi=false; that=true; tha=false;\" class=\"des three\">\n          <i class=\"fa fa-user-times\"></i>\n      </button>\n      </div>\n    <div class=\"spas space\" *ngIf=\"tha\">\n      <div *ngFor=\"let user of users | async | filter:searchTerm\" [class.me]=\"user.userId === userId\">\n        <div class=\"spac write writ\">\n      <a href=\"/home/chat/{{user.userId}}/{{user.name}}#bottom\" class=\"bold\">{{user.name}}</a>\n      <br>\n      <button [disabled]=\"userId !== myId\" class=\"box design des\" title=\"Follow\" (click)=\"added(user.userId)\">\n        <i class=\"fa fa-user-plus\"></i>\n      </button>\n      </div>\n    </div>\n    </div>\n  <div class=\"spas space\" *ngIf=\"thi\">\n      <div *ngFor=\"let fffriend of fffriends | async | reverse\">\n        <div *ngFor=\"let user of users | async | filter:searchTerm\" [class.me]=\"user.userId === userId\">\n          <div class=\"spac write writ\" *ngIf=\"user.userId === fffriend.userId\">\n        <a href=\"/home/chat/{{user.userId}}/{{user.name}}#bottom\" class=\"bold\">{{user.name}}</a>\n        <br>\n        <button [disabled]=\"userId !== myId\" class=\"box design des\" title=\"Unfollow\" (click)=\"removed(user.userId)\">\n          <i class=\"fa fa-user-minus\"></i>\n        </button>\n        </div>\n      </div>\n      </div>\n    </div>\n  <div class=\"spas space\" *ngIf=\"that\">\n      <div *ngFor=\"let ffriend of ffriends | async | reverse\">\n      <div *ngFor=\"let user of users | async | filter:searchTerm\" [class.me]=\"user.userId === userId\">\n        <div class=\"spac write writ\" *ngIf=\"user.userId === ffriend.userId\">\n      <a href=\"/home/chat/{{user.userId}}/{{user.name}}#bottom\" class=\"bold\">{{user.name}}</a>\n      </div>\n    </div>\n    </div>\n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/channel-fanpage/channel-fanpage.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/channel-fanpage/channel-fanpage.component.ts ***!
  \**************************************************************/
/*! exports provided: ChannelFanpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelFanpageComponent", function() { return ChannelFanpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChannelFanpageComponent = /** @class */ (function () {
    function ChannelFanpageComponent(route, auth, fire, db) {
        this.route = route;
        this.auth = auth;
        this.fire = fire;
        this.db = db;
    }
    ChannelFanpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
        });
        this.friendId = this.route.snapshot.paramMap.get('id');
        this.name = this.route.snapshot.paramMap.get('name');
        if (this.name.length > 26)
            this.namee = this.name.substring(0, 25) + "...";
        else
            this.namee = this.name;
        this.db.doc('par/' + this.friendId).get().subscribe(function (snapshot) {
            _this.myId = snapshot.data().userId;
        });
        this.users = this.db.collection('users', function (ref) { return ref.orderBy('name'); }).valueChanges();
        this.ffriends = this.fire.list('ggfriend/' + this.friendId, function (ref) { return ref.orderByChild('time'); }).valueChanges();
        this.fffriends = this.fire.list('iifriend/' + this.friendId, function (ref) { return ref.orderByChild('time'); }).valueChanges();
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
    };
    ChannelFanpageComponent.prototype.g = function () {
        this.open = false;
    };
    ChannelFanpageComponent.prototype.add = function () {
        var time = firebase_app__WEBPACK_IMPORTED_MODULE_2__["database"].ServerValue.TIMESTAMP;
        this.fire.object('gfriend/' + this.userId + '/' + this.friendId).set({
            userId: this.friendId,
            time: time
        });
        this.fire.object('ggfriend/' + this.friendId + '/' + this.userId).set({
            userId: this.userId,
            time: time
        });
    };
    ChannelFanpageComponent.prototype.remove = function () {
        this.fire.object('gfriend/' + this.userId + '/' + this.friendId).remove();
        this.fire.object('ggfriend/' + this.friendId + '/' + this.userId).remove();
    };
    ChannelFanpageComponent.prototype.added = function (e) {
        var time = firebase_app__WEBPACK_IMPORTED_MODULE_2__["database"].ServerValue.TIMESTAMP;
        this.fire.object('ifriend/' + e + '/' + this.friendId).set({
            userId: this.friendId,
            time: time
        });
        this.fire.object('iifriend/' + this.friendId + '/' + e).set({
            userId: e,
            time: time
        });
    };
    ChannelFanpageComponent.prototype.removed = function (e) {
        this.fire.object('ifriend/' + e + '/' + this.friendId).remove();
        this.fire.object('iifriend/' + this.friendId + '/' + e).remove();
    };
    ChannelFanpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-channel-fanpage',
            template: __webpack_require__(/*! ./channel-fanpage.component.html */ "./src/app/channel-fanpage/channel-fanpage.component.html"),
            styles: [__webpack_require__(/*! ./channel-fanpage.component.css */ "./src/app/channel-fanpage/channel-fanpage.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])
    ], ChannelFanpageComponent);
    return ChannelFanpageComponent;
}());



/***/ }),

/***/ "./src/app/channel-wall/channel-wall.component.css":
/*!*********************************************************!*\
  !*** ./src/app/channel-wall/channel-wall.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWwtd2FsbC9jaGFubmVsLXdhbGwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/channel-wall/channel-wall.component.html":
/*!**********************************************************!*\
  !*** ./src/app/channel-wall/channel-wall.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n    <i class=\"fa fa-user-secret it green\" title=\"Wall\"></i>\n    <a class=\"bold\" (click)=\"open=true\">{{namee}}</a>\n  </div>\n  <div *ngIf=\"open\" class=\"page fixed index bottom top lef rit black\" (click)=\"g()\">\n    </div>\n    <div *ngIf=\"open\" class=\"fixed index bottom\" (click)=\"g()\">\n    <a href=\"/home/partyChat/{{friendId}}/{{name}}#bottom\" class=\"design left bo dess download\" title=\"Party chat\">\n      <i class=\"fa fa-comments gree do\"></i>            \n    </a>\n    <button class=\"box design des\" title=\"Wall\" routerLink=\"/home/partyWall/{{friendId}}/{{name}}\">\n      <i class=\"fa fa-user-secret\"></i>            \n  </button>\n  <button class=\"box design des\" title=\"Gallery\" routerLink=\"/home/partyGallery/{{friendId}}/{{name}}\">\n      <i class=\"fa fa-user-clock\"></i>            \n  </button>\n  <button class=\"box design des\" title=\"Display picture\" routerLink=\"/home/partyDisplayPicture/{{friendId}}/{{name}}\">\n      <i class=\"fa fa-portrait\"></i>            \n  </button>\n  <button class=\"box design des\" routerLink=\"/home/fanPage/{{friendId}}/{{name}}\" title=\"Fan page\">\n    <i class=\"fa fa-user-circle\"></i>        \n</button>\n<button [disabled]=\"!userId\" class=\"box design des\" title=\"Follow\" (click)=\"add()\" >\n    <i class=\"fa fa-user-plus\"></i>            \n</button>\n<button [disabled]=\"!userId\" class=\"box design des\" title=\"Unfollow\" (click)=\"remove()\">\n    <i class=\"fa fa-user-minus\"></i>            \n</button>\n    </div>\n  <div class=\"spa space\">\n  <div class=\"spac writ\" *ngFor=\"let message of messages | async | reverse | filter:searchTerm\">\n  <div class=\"write\">\n  {{message.name}}\n  <div class=\"right it\">{{message.time | date:\"EEEE, MMMM d, y 'at' h:mm a\"}}</div>\n  <div class=\"clear\"></div>\n  <a [href]=\"message.url\" download class=\"design left bo dess download\" title=\"Download file\">\n    <i class=\"fa fa-download gree do\"></i>\n  </a>\n  <div class=\"clear\"></div>\n  </div>\n  <img *ngIf=\"message.ext === 'jpg' || message.ext === 'png' || message.ext === 'gif'\" [src]=\"message.url\">    \n  <video *ngIf=\"message.ext === 'mp4'\" controls>\n    <source [src]=\"message.url\" type=\"video/mp4\">\n  </video>\n  <audio *ngIf=\"message.ext === 'mp3'\" controls>\n    <source [src]=\"message.url\" type=\"audio/mp3\">\n  </audio>\n  <i *ngIf=\"message.ext && message.ext !== 'mp3' && message.ext !== 'mp4' && message.ext !== 'jpg' && message.ext !== 'png' && message.ext !== 'gif'\" class=\"fa fa-5x fa-file\"></i>\n  \n  </div>\n  </div>\n  <div class=\"pos fixed bottom lef\">\n    <input [(ngModel)]=\"searchTerm\"  class=\"inpu full black write\">  \n  </div>"

/***/ }),

/***/ "./src/app/channel-wall/channel-wall.component.ts":
/*!********************************************************!*\
  !*** ./src/app/channel-wall/channel-wall.component.ts ***!
  \********************************************************/
/*! exports provided: ChannelWallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelWallComponent", function() { return ChannelWallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChannelWallComponent = /** @class */ (function () {
    function ChannelWallComponent(route, auth, fire) {
        this.route = route;
        this.auth = auth;
        this.fire = fire;
    }
    ChannelWallComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
        });
        this.friendId = this.route.snapshot.paramMap.get('id');
        this.name = this.route.snapshot.paramMap.get('name');
        if (this.name.length > 26)
            this.namee = this.name.substring(0, 25) + "...";
        else
            this.namee = this.name;
        this.messages = this.fire.list('partywall/' + this.friendId).valueChanges();
    };
    ChannelWallComponent.prototype.g = function () {
        this.open = false;
    };
    ChannelWallComponent.prototype.add = function () {
        var time = firebase_app__WEBPACK_IMPORTED_MODULE_2__["database"].ServerValue.TIMESTAMP;
        this.fire.object('gfriend/' + this.userId + '/' + this.friendId).set({
            userId: this.friendId,
            time: time
        });
        this.fire.object('ggfriend/' + this.friendId + '/' + this.userId).set({
            userId: this.userId,
            time: time
        });
    };
    ChannelWallComponent.prototype.remove = function () {
        this.fire.object('gfriend/' + this.userId + '/' + this.friendId).remove();
        this.fire.object('ggfriend/' + this.friendId + '/' + this.userId).remove();
    };
    ChannelWallComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-channel-wall',
            template: __webpack_require__(/*! ./channel-wall.component.html */ "./src/app/channel-wall/channel-wall.component.html"),
            styles: [__webpack_require__(/*! ./channel-wall.component.css */ "./src/app/channel-wall/channel-wall.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]])
    ], ChannelWallComponent);
    return ChannelWallComponent;
}());



/***/ }),

/***/ "./src/app/channels/channels.component.css":
/*!*************************************************!*\
  !*** ./src/app/channels/channels.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5uZWxzL2NoYW5uZWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/channels/channels.component.html":
/*!**************************************************!*\
  !*** ./src/app/channels/channels.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n    <i class=\"fa fa-envelope-open-text it green\" title=\"Parties\"></i>\n</div>\n<div class=\"pos fixed bottom lef\">\n  <input autofocus class=\"inpu full black write\" [(ngModel)]=\"searchTerm\">\n</div>\n<div class=\"spa space\">\n<div class=\"spac write writ\" *ngFor=\"let channel of channels | async | reverse | filter:searchTerm\">\n  <a href=\"/home/partyChat/{{channel.channelId}}/{{channel.name}}#bottom\" class=\"bold\">{{channel.name}}</a>\n  <div class=\"right it\">{{channel.time | date:\"EEEE, MMMM d, y 'at' h:mm a\"}}</div>\n<div class=\"clear\"></div>\n</div> \n</div>"

/***/ }),

/***/ "./src/app/channels/channels.component.ts":
/*!************************************************!*\
  !*** ./src/app/channels/channels.component.ts ***!
  \************************************************/
/*! exports provided: ChannelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelsComponent", function() { return ChannelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChannelsComponent = /** @class */ (function () {
    function ChannelsComponent(fire) {
        this.fire = fire;
    }
    ChannelsComponent.prototype.ngOnInit = function () {
        this.channels = this.fire.list('party', function (ref) { return ref.orderByChild('show').equalTo(true); }).valueChanges();
        // this.channels = [
        //   {
        //     name: 'gonawola@yahoo.com: Onawola razak gboyega hjhbh  etfddgv refdvtegfv etdgvc tgd trgbdv trgfbhn tgbfc htegbdfc  tgfbc  etgdbvc tbegd bv c tegdbctgdb dgvc gthythg yuyvuyjvj tujg ghjhhh hiyufyjggugu ghtuggvv hj yiy hhguyj yiyib yggjfyuujt',
        //     channelId: '1',
        //     time:new Date()
        //   },
        //   {
        //     name: 'On',
        //     channelId: '2',
        //     time:new Date()
        //   },
        //   {
        //     name: 'On',
        //     channelId: '3',
        //     time:new Date()
        //   }
        // ]
    };
    ChannelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-channels',
            template: __webpack_require__(/*! ./channels.component.html */ "./src/app/channels/channels.component.html"),
            styles: [__webpack_require__(/*! ./channels.component.css */ "./src/app/channels/channels.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], ChannelsComponent);
    return ChannelsComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n    <i class=\"fa fa-comment it green\" title=\"Chat\"></i>\n<a class=\"bold\" (click)='open=true'>\n  {{namee}}\n</a>\n</div>\n<div *ngIf=\"open\" class=\"page fixed index bottom top lef rit black\" (click)=\"g()\">\n</div>\n<div *ngIf=\"open\" class=\"fixed index bottom\" (click)=\"g()\">\n    <a href=\"/home/chat/{{friendId}}/{{name}}#bottom\" class=\"design left bo dess download\" title=\"Chat\">\n        <i class=\"fa fa-comment gree do\"></i>            \n    </a>\n    <button class=\"box design des\" title=\"Forum\" routerLink=\"/home/forum/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-mail-bulk\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Profile\" routerLink=\"/home/profile/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-user-tie\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Wall\" routerLink=\"/home/wall/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-user-secret\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Following parties' inbox\" routerLink=\"/home/followingPartiesInbox/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-envelope\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Following people' status\" routerLink=\"/home/followingPeopleStatus/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-tv\"></i>            \n    </button>\n    <button class=\"box design des\" routerLink=\"/home/friends/{{friendId}}/{{name}}\" title=\"Friends\">\n        <i class=\"fa fa-user-friends\"></i>        \n    </button>\n    <button class=\"box design des\" title=\"Channels\" routerLink=\"/home/channels/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-warehouse\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Display picture\" routerLink=\"/home/displayPicture/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-portrait\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"box design des\" title=\"Follow\" (click)=\"add()\" >\n        <i class=\"fa fa-user-plus\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"box design des\" title=\"Unfollow\" (click)=\"remove()\">\n        <i class=\"fa fa-user-minus\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"design box des\" title=\"Clear chat\" (click)=\"clear()\">\n        <i class=\"fa fa-trash-alt\"></i>\n    </button>\n</div>\n\n<div class=\"spacc space\">\n<div class=\"spac writ\" *ngFor=\"let message of messages | async\" [class.me]=\"message.userId === userId\">\n  <div class=\"write\">\n  {{message.text}}\n  <div class=\"right it\">{{message.time | date:\"EEEE, MMMM d, y 'at' h:mm a\"}}</div>\n  <div class=\"clear\"></div>\n  <a [href]=\"message.url\" download *ngIf=\"message.ext\" class=\"design left bo dess download\" title=\"Download file\">\n    <i class=\"fa fa-download gree do\"></i>\n  </a>\n<div class=\"clear\"></div>\n  </div>\n  <img *ngIf=\"message.ext === 'jpg' || message.ext === 'png' || message.ext === 'gif'\" [src]=\"message.url\">    \n  <video *ngIf=\"message.ext === 'mp4'\" controls>\n    <source [src]=\"message.url\" type=\"video/mp4\">\n</video>\n<audio *ngIf=\"message.ext === 'mp3'\" controls>\n    <source [src]=\"message.url\" type=\"audio/mp3\">\n</audio>\n<i *ngIf=\"message.ext && message.ext !== 'mp3' && message.ext !== 'mp4' && message.ext !== 'jpg' && message.ext !== 'png' && message.ext !== 'gif'\" class=\"fa fa-5x fa-file\"></i>\n</div>\n<a id=\"bottom\"></a> \n</div>\n  <form class=\"down fixed bottom lef rit\" (submit)=\"send(text)\">\n    <div class=\"d\">\n  <textarea id=\"te\" [placeholder]=\"name\" [(ngModel)]=\"text\" name=\"text\"></textarea>\n  </div>\n<label *ngIf=\"userId\" class=\"file design dess bo\" title=\"Upload file\">\n  <input type=\"file\" class=\"no\" (change)=\"upload($event)\" >\n  <i class=\"fa fa-upload gree\"></i>\n</label>\n  <button type=\"submit\" [disabled]=\"!text || !userId\" class=\"full submit des\" title=\"Create message\">\n    <i class=\"fa fa-reply\"></i>\n  </button>\n  </form>\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatComponent = /** @class */ (function () {
    function ChatComponent(afStorage, fire, auth, route) {
        this.afStorage = afStorage;
        this.fire = fire;
        this.auth = auth;
        this.route = route;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
            _this.dname = user.displayName;
            _this.email = user.email;
            _this.messages = _this.fire.list('messages/' + _this.userId + '/' + _this.friendId).valueChanges();
        });
        this.friendId = this.route.snapshot.paramMap.get('id');
        this.name = this.route.snapshot.paramMap.get('name');
        if (this.name.length > 26)
            this.namee = this.name.substring(0, 25) + "...";
        else
            this.namee = this.name;
    };
    ChatComponent.prototype.send = function (e) {
        this.text = "";
        document.getElementById('te').focus();
        var time = firebase_app__WEBPACK_IMPORTED_MODULE_2__["database"].ServerValue.TIMESTAMP;
        this.fire.object('inbox/' + this.friendId + '/' + this.userId).set({
            userId: this.userId,
            text: e,
            time: time,
            name: this.dname + ': ' + this.email
        });
        var data = {
            userId: this.userId,
            text: e,
            time: time
        };
        this.fire.list('messages/' + this.userId + '/' + this.friendId).push(data);
        if (this.userId !== this.friendId)
            this.fire.list('messages/' + this.friendId + '/' + this.userId).push(data);
    };
    ChatComponent.prototype.clear = function () {
        var val = confirm("Clear " + this.name + "'s chat");
        if (val) {
            this.fire.object('messages/' + this.userId + '/' + this.friendId).remove();
            this.fire.object('inbox/' + this.friendId + '/' + this.userId).remove();
            alert('Cleared');
        }
    };
    ChatComponent.prototype.add = function () {
        var time = firebase_app__WEBPACK_IMPORTED_MODULE_2__["database"].ServerValue.TIMESTAMP;
        this.fire.object('ffriend/' + this.userId + '/' + this.friendId).set({
            userId: this.friendId,
            time: time
        });
        this.fire.object('fffriend/' + this.friendId + '/' + this.userId).set({
            userId: this.userId,
            time: time
        });
    };
    ChatComponent.prototype.remove = function () {
        this.fire.object('ffriend/' + this.userId + '/' + this.friendId).remove();
        this.fire.object('fffriend/' + this.friendId + '/' + this.userId).remove();
    };
    ChatComponent.prototype.g = function () {
        this.open = false;
    };
    ChatComponent.prototype.upload = function (e) {
        var _this = this;
        var file = e.target.files[0];
        var fileName = file.name;
        var ext = fileName.split('.').pop();
        var id = this.fire.createPushId();
        var time = firebase_app__WEBPACK_IMPORTED_MODULE_2__["database"].ServerValue.TIMESTAMP;
        var ref = this.afStorage.ref('chat/' + id);
        ref.put(file).then(function () {
            ref.getDownloadURL().subscribe(function (url) {
                var dat = {
                    userId: _this.userId,
                    text: fileName,
                    time: time,
                    url: url,
                    ext: ext
                };
                var data = {
                    name: fileName,
                    time: time,
                    url: url,
                    id: id,
                    ext: ext
                };
                _this.fire.object('inbox/' + _this.friendId + '/' + _this.userId).set({
                    userId: _this.userId,
                    text: fileName,
                    url: url,
                    ext: ext,
                    time: time,
                    name: _this.dname + ': ' + _this.email
                });
                _this.fire.list('messages/' + _this.userId + '/' + _this.friendId).push(dat);
                _this.fire.object('gallery/' + _this.userId + '/' + id).set(data);
                if (_this.userId !== _this.friendId) {
                    _this.fire.list('messages/' + _this.friendId + '/' + _this.userId).push(dat);
                    _this.fire.object('gallery/' + _this.friendId + '/' + id).set(data);
                }
            });
        }).catch(function (e) {
            alert(e.message);
        });
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/community/community.component.css":
/*!***************************************************!*\
  !*** ./src/app/community/community.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW11bml0eS9jb21tdW5pdHkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/community/community.component.html":
/*!****************************************************!*\
  !*** ./src/app/community/community.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n  <i class=\"fa fa-warehouse it green\" title=\"Channels\"></i>\n</div>\n<div class=\"pos fixed bottom lef\">\n  <input  class=\"inpu full black write\" [(ngModel)]=\"searchTerm\">\n</div>\n<div class=\"fixed full fix\">\n    <button title=\"Following\" [class.design]=\"!thi\"  [class.white]=\"thi\" (click)=\"that=false; thi=true;\" class=\"des half\">\n        <i class=\"fa fa-user-check\"></i>\n    </button>\n    <button title=\"Followers\" [class.white]=\"that\" [class.design]=\"!that\" (click)=\"thi=false; that=true\" class=\"des half\">\n        <i class=\"fa fa-user-times\"></i>\n    </button>\n    </div>\n  <div class=\"spas space\" *ngIf=\"that\">\n  <div *ngFor=\"let fffriend of fffriends | async | reverse\">\n      <div *ngFor=\"let user of users | async | filter:searchTerm\">\n      <div class=\"spac write writ\" *ngIf=\"user.channelId === fffriend.userId\">\n    <a href=\"/home/partyChat/{{user.channelId}}/{{user.name}}#bottom\" class=\"bold\">{{user.name}}</a>\n    <div class=\"right it\">{{user.time | date:\"EEEE, MMMM d, y 'at' h:mm a\"}}</div>\n    <div class=\"clear\"></div>\n    </div>\n  </div>\n  </div>\n</div>\n<div class=\"spas space\" *ngIf=\"thi\">\n  <div *ngFor=\"let ffriend of ffriends | async | reverse\">\n      <div *ngFor=\"let user of users | async | filter:searchTerm\">\n      <div class=\"spac write writ\" *ngIf=\"user.channelId === ffriend.userId\">\n    <a href=\"/home/partyChat/{{user.channelId}}/{{user.name}}#bottom\" class=\"bold\">{{user.name}}</a>\n    <div class=\"right it\">{{user.time | date:\"EEEE, MMMM d, y 'at' h:mm a\"}}</div>\n    <div class=\"clear\"></div>            \n    </div>\n  </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/community/community.component.ts":
/*!**************************************************!*\
  !*** ./src/app/community/community.component.ts ***!
  \**************************************************/
/*! exports provided: CommunityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityComponent", function() { return CommunityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommunityComponent = /** @class */ (function () {
    function CommunityComponent(auth, fire) {
        this.auth = auth;
        this.fire = fire;
    }
    CommunityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
            _this.users = _this.fire.list('party').valueChanges();
            _this.ffriends = _this.fire.list('gfriend/' + _this.userId, function (ref) { return ref.orderByChild('time'); }).valueChanges();
            _this.fffriends = _this.fire.list('ifriend/' + _this.userId, function (ref) { return ref.orderByChild('time'); }).valueChanges();
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
    };
    CommunityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-community',
            template: __webpack_require__(/*! ./community.component.html */ "./src/app/community/community.component.html"),
            styles: [__webpack_require__(/*! ./community.component.css */ "./src/app/community/community.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], CommunityComponent);
    return CommunityComponent;
}());



/***/ }),

/***/ "./src/app/created/created.component.css":
/*!***********************************************!*\
  !*** ./src/app/created/created.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZWQvY3JlYXRlZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/created/created.component.html":
/*!************************************************!*\
  !*** ./src/app/created/created.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n    <i class=\"fa fa-mail-bulk it green\" title=\"Forum\"></i>\n  </div>\n  <div class=\"spacc space\">\n  <div class=\"spac writ\" *ngFor=\"let message of messages | async | reverse | filter:tex\" [class.me]=\"message.channelId === id\">\n    <div class=\"write\">\n    <a href=\"/home/partyChat/{{message.channelId}}/{{message.name}}#bottom\" class=\"bold\">{{message.name}}</a>\n    <div class=\"right it\">{{message.time| date:\"EEEE, MMMM d, y 'at' h:mm a\"}}</div>\n    <div class=\"clear\"></div>\n    <button class=\"box design des\" title=\"Wall\" routerLink=\"/home/editPartyWall/{{message.channelId}}/{{message.name}}\">\n      <i class=\"fa fa-user-secret\"></i>            \n    </button>\n    <button class=\"box design des\" routerLink=\"/home/editFanPage/{{message.channelId}}/{{message.name}}\" title=\"Fan page\">\n      <i class=\"fa fa-user-circle\"></i>        \n    </button>\n    <button class=\"box des design\" title=\"Edit party\" (click)=\"edit(message.channelId,message.name)\">\n        <i class=\"fa fa-user-cog\"></i>\n    </button>\n    <button *ngIf=\"message.show\" (click)=\"hide(message.channelId)\" class=\"box design des\" title=\"Private party\">\n        <i class=\"fa fa-user-lock\"></i>\n    </button>\n    <button *ngIf=\"!message.show\" (click)=\"show(message.channelId)\" class=\"box design des\" title=\"Public party\">\n      <i class=\"fa fa-user\"></i>\n  </button>\n  <button class=\"design box des\" title=\"Clear party chat\" (click)=\"clear(message.channelId,message.name)\">\n      <i class=\"fa fa-trash-alt\"></i>\n  </button>\n  <button class=\"design box des\" title=\"Delete party\" (click)=\"delete(message.channelId,message.name)\">\n    <i class=\"fa fa-trash\"></i>\n  </button>\n    </div>\n  </div> \n  </div>\n    <form class=\"down fixed bottom lef rit\">\n      <div class=\"d\">\n    <textarea title='Can not contain any of the following characters: \\ / [ ] \"' required id=\"te\" placeholder=\"{{name}}\" [(ngModel)]=\"tex\" name=\"text\" #text=\"ngModel\" pattern=\"[^/\\][\\\\\\x22]+\"></textarea>\n    </div>\n  <button  *ngIf=\"id\" class=\"full des submit\" (click)=\"set(tex)\" [disabled]=\"text.invalid || !userId\" title=\"Update party\">\n    <i class=\"fa fa-cog\"></i>\n  </button>\n    <button *ngIf=\"!id\" (click)=\"send(tex)\" [disabled]=\"text.invalid || !userId\" class=\"full submit des\" title=\"Create party\">\n        <i class=\"fa fa-reply\"></i>    \n    </button>\n    </form>\n  \n"

/***/ }),

/***/ "./src/app/created/created.component.ts":
/*!**********************************************!*\
  !*** ./src/app/created/created.component.ts ***!
  \**********************************************/
/*! exports provided: CreatedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatedComponent", function() { return CreatedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreatedComponent = /** @class */ (function () {
    function CreatedComponent(auth, fire, db, afStorage) {
        this.auth = auth;
        this.fire = fire;
        this.db = db;
        this.afStorage = afStorage;
    }
    CreatedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
            _this.email = user.email;
            _this.messages = _this.fire.list('created/' + _this.userId).valueChanges();
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
    };
    CreatedComponent.prototype.delete = function (d, e) {
        var val = confirm("Delete " + e + "'s party");
        if (val) {
            this.fire.object('created/' + this.userId + '/' + d).remove();
            this.fire.object('party/' + d).remove();
            this.fire.object('ginbox/' + d).remove();
            this.fire.object('gmessages/' + d).remove();
            this.fire.object('ggallery/' + d).remove();
            this.fire.object('iifriend/' + d).remove();
            this.fire.object('partywall/' + d).remove();
            this.fire.object('ggfriend/' + d).remove();
            this.afStorage.ref('editwall/' + d).delete();
            this.afStorage.ref('gchat/' + d).delete();
            this.db.doc('par/' + d).delete();
            this.db.doc('part/' + d).delete();
            alert('Deleted');
        }
    };
    CreatedComponent.prototype.clear = function (d, e) {
        var val = confirm("Clear " + e + "'s chat");
        if (val) {
            this.fire.object('gmessages/' + d).remove();
            this.fire.object('ginbox/' + d).update({
                text: '',
                url: '',
                ext: ''
            });
            alert('Cleared');
        }
    };
    CreatedComponent.prototype.hide = function (a) {
        var data = {
            show: false
        };
        this.fire.object('created/' + this.userId + '/' + a).update(data);
        this.fire.object('party/' + a).update(data);
        this.fire.object('ginbox/' + a).update(data);
    };
    CreatedComponent.prototype.end = function () {
        document.getElementById('te').focus();
    };
    CreatedComponent.prototype.show = function (a) {
        var data = {
            show: true
        };
        this.fire.object('created/' + this.userId + '/' + a).update(data);
        this.fire.object('party/' + a).update(data);
        this.fire.object('ginbox/' + a).update(data);
    };
    CreatedComponent.prototype.send = function (e) {
        this.tex = "";
        this.end();
        var id = this.fire.createPushId();
        var data = {
            name: e + ': ' + this.email,
            time: firebase_app__WEBPACK_IMPORTED_MODULE_5__["database"].ServerValue.TIMESTAMP,
            channelId: id,
            show: false
        };
        this.fire.object('created/' + this.userId + '/' + id).set(data);
        this.fire.object('party/' + id).set(data);
        this.fire.object('ginbox/' + id).set({
            name: e + ': ' + this.email,
            channelId: id,
            show: false
        });
        this.db.doc('par/' + id).set({
            userId: this.userId
        });
    };
    CreatedComponent.prototype.set = function (g) {
        this.end();
        var data = {
            name: g + ': ' + this.email
        };
        this.fire.object('created/' + this.userId + '/' + this.id).update(data);
        this.fire.object('party/' + this.id).update(data);
        this.fire.object('ginbox' + this.id).update(data);
        this.name = g + ': ' + this.email;
    };
    CreatedComponent.prototype.edit = function (e, f) {
        if (e === this.id) {
            this.id = '';
            this.name = '';
        }
        else {
            this.id = e;
            this.name = f;
        }
    };
    CreatedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-created',
            template: __webpack_require__(/*! ./created.component.html */ "./src/app/created/created.component.html"),
            styles: [__webpack_require__(/*! ./created.component.css */ "./src/app/created/created.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]])
    ], CreatedComponent);
    return CreatedComponent;
}());



/***/ }),

/***/ "./src/app/diplay-picture/diplay-picture.component.css":
/*!*************************************************************!*\
  !*** ./src/app/diplay-picture/diplay-picture.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpcGxheS1waWN0dXJlL2RpcGxheS1waWN0dXJlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/diplay-picture/diplay-picture.component.html":
/*!**************************************************************!*\
  !*** ./src/app/diplay-picture/diplay-picture.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n  <i class=\"fa fa-portrait it green\" title=\"Display picture\"></i>\n</div>\n<div class=\"sp\">\n    <div class=\"write\">\n        {{ name }}\n        <br>\n  <a [href]=\"url\" *ngIf=\"url\" download class=\"design left bo dess download\" title=\"Download file\">\n    <i class=\"fa fa-download gree do\"></i>\n  </a>\n  <div class=\"clear\"></div>\n  </div>\n<img *ngIf=\"ext === 'jpg' || ext === 'png' || ext === 'gif'\" [src]=\"url\">    \n  <video *ngIf=\"ext === 'mp4'\" controls>\n    <source [src]=\"url\" type=\"video/mp4\">\n</video>\n<audio *ngIf=\"ext === 'mp3'\" controls>\n    <source [src]=\"url\" type=\"audio/mp3\">\n</audio>\n<i *ngIf=\"ext && ext !== 'mp3' && ext !== 'mp4' && ext !== 'jpg' && ext !== 'png' && ext !== 'gif'\" class=\"fa fa-5x fa-file\"></i>\n\n</div>"

/***/ }),

/***/ "./src/app/diplay-picture/diplay-picture.component.ts":
/*!************************************************************!*\
  !*** ./src/app/diplay-picture/diplay-picture.component.ts ***!
  \************************************************************/
/*! exports provided: DiplayPictureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiplayPictureComponent", function() { return DiplayPictureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiplayPictureComponent = /** @class */ (function () {
    function DiplayPictureComponent(auth, db) {
        this.auth = auth;
        this.db = db;
    }
    DiplayPictureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
            _this.db.doc('user/' + _this.userId).get().subscribe(function (snapshot) {
                _this.name = snapshot.data().name;
                _this.url = snapshot.data().url;
                _this.ext = snapshot.data().ext;
            });
        });
    };
    DiplayPictureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-diplay-picture',
            template: __webpack_require__(/*! ./diplay-picture.component.html */ "./src/app/diplay-picture/diplay-picture.component.html"),
            styles: [__webpack_require__(/*! ./diplay-picture.component.css */ "./src/app/diplay-picture/diplay-picture.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], DiplayPictureComponent);
    return DiplayPictureComponent;
}());



/***/ }),

/***/ "./src/app/edit-wall/edit-wall.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-wall/edit-wall.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtd2FsbC9lZGl0LXdhbGwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/edit-wall/edit-wall.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-wall/edit-wall.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n    <i class=\"fa fa-user-secret it green\" title=\"Wall\"></i>\n    <a class=\"bold\" (click)=\"open=true\">{{namee}}</a>\n  </div>\n  <div *ngIf=\"open\" class=\"page fixed index bottom top lef rit black\" (click)=\"g()\">\n    </div>\n    <div *ngIf=\"open\" class=\"fixed index bottom\" (click)=\"g()\">\n        <a href=\"/home/partyChat/{{friendId}}/{{name}}#bottom\" class=\"design left bo dess download\" title=\"Party chat\">\n          <i class=\"fa fa-comments gree do\"></i>            \n        </a>\n      <button class=\"box design des\" title=\"Wall\" routerLink=\"/home/partyWall/{{friendId}}/{{name}}\">\n          <i class=\"fa fa-user-secret\"></i>            \n      </button>\n      <button class=\"box design des\" title=\"Gallery\" routerLink=\"/home/partyGallery/{{friendId}}/{{name}}\">\n          <i class=\"fa fa-user-clock\"></i>            \n      </button>\n      <button class=\"box design des\" title=\"Display picture\" routerLink=\"/home/partyDisplayPicture/{{friendId}}/{{name}}\">\n          <i class=\"fa fa-portrait\"></i>            \n      </button>\n      <button class=\"box design des\" routerLink=\"/home/fanPage/{{friendId}}/{{name}}\" title=\"Fan page\">\n        <i class=\"fa fa-user-circle\"></i>        \n    </button>\n    <button [disabled]=\"!userId\" class=\"box design des\" title=\"Follow\" (click)=\"add()\" >\n        <i class=\"fa fa-user-plus\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"box design des\" title=\"Unfollow\" (click)=\"remove()\">\n        <i class=\"fa fa-user-minus\"></i> \n    </button>\n  </div>\n  <div class=\"spa space\">\n  <div class=\"spac writ\" *ngFor=\"let message of messages | async | reverse | filter:searchTerm\">\n  <div class=\"write\">\n  {{message.name}}\n  <div class=\"right it\">{{message.time | date:\"EEEE, MMMM d, y 'at' h:mm a\"}}</div>\n  <div class=\"clear\"></div>\n  <button class=\"design box des\" title=\"Delete file\" (click)=\"delete(message.id,message.name)\">\n      <i class=\"fa fa-trash\"></i>\n    </button>\n  <a [href]=\"message.url\" download class=\"design left bo dess download\" title=\"Download file\">\n    <i class=\"fa fa-download gree do\"></i>\n  </a>\n  <div class=\"clear\"></div>\n  </div>\n  <img *ngIf=\"message.ext === 'jpg' || message.ext === 'png' || message.ext === 'gif'\" [src]=\"message.url\">    \n  <video *ngIf=\"message.ext === 'mp4'\" controls>\n    <source [src]=\"message.url\" type=\"video/mp4\">\n  </video>\n  <audio *ngIf=\"message.ext === 'mp3'\" controls>\n    <source [src]=\"message.url\" type=\"audio/mp3\">\n  </audio>\n  <i *ngIf=\"message.ext && message.ext !== 'mp3' && message.ext !== 'mp4' && message.ext !== 'jpg' && message.ext !== 'png' && message.ext !== 'gif'\" class=\"fa fa-5x fa-file\"></i>\n  </div>\n  </div>\n  <div  *ngIf=\"myId && myId === userId\" class=\"down fixed bottom lef rit\">\n    <label class=\"file design dess bo\" title=\"Upload file\">\n        <input type=\"file\" class=\"no\" (change)=\"upload($event)\">\n        <i class=\"fa fa-upload gree\"></i>\n        </label>\n<div class=\"doo d\">\n  <input [(ngModel)]=\"searchTerm\"  class=\"inpu full black write\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/edit-wall/edit-wall.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-wall/edit-wall.component.ts ***!
  \**************************************************/
/*! exports provided: EditWallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditWallComponent", function() { return EditWallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditWallComponent = /** @class */ (function () {
    function EditWallComponent(route, fire, auth, afStorage, db) {
        this.route = route;
        this.fire = fire;
        this.auth = auth;
        this.afStorage = afStorage;
        this.db = db;
    }
    EditWallComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
            _this.messages = _this.fire.list('editwall/' + _this.userId + '/' + _this.friendId).valueChanges();
        });
        this.friendId = this.route.snapshot.paramMap.get('id');
        this.name = this.route.snapshot.paramMap.get('name');
        if (this.name.length > 26)
            this.namee = this.name.substring(0, 25) + "...";
        else
            this.namee = this.name;
        this.db.doc('par/' + this.friendId).get().subscribe(function (snapshot) {
            _this.myId = snapshot.data().userId;
        });
    };
    EditWallComponent.prototype.g = function () {
        this.open = false;
    };
    EditWallComponent.prototype.delete = function (d, e) {
        var val = confirm("Delete " + e + "'s file");
        if (val) {
            this.fire.object('partywall/' + this.friendId + '/' + d).remove();
            this.fire.object('editwall/' + this.userId + '/' + this.friendId + '/' + d).remove();
            this.db.doc('part/' + this.friendId).delete();
            this.afStorage.ref('editwall/' + this.friendId + '/' + d).delete();
            alert('Deleted');
        }
    };
    EditWallComponent.prototype.upload = function (e) {
        var _this = this;
        var file = e.target.files[0];
        var fileName = file.name;
        var ext = fileName.split('.').pop();
        var id = this.fire.createPushId();
        var time = firebase_app__WEBPACK_IMPORTED_MODULE_2__["database"].ServerValue.TIMESTAMP;
        var ref = this.afStorage.ref('editwall/' + this.friendId + '/' + id);
        ref.put(file).then(function () {
            ref.getDownloadURL().subscribe(function (url) {
                _this.fire.object('partywall/' + _this.friendId + '/' + id).set({
                    time: time,
                    text: fileName,
                    url: url,
                    ext: ext
                });
                _this.fire.object('editwall/' + _this.userId + '/' + _this.friendId + '/' + id).set({
                    time: time,
                    name: fileName,
                    url: url,
                    ext: ext,
                    id: id
                });
                _this.db.doc('part/' + _this.friendId).set({
                    name: fileName,
                    ext: ext,
                    url: url
                });
            });
        }).catch(function (e) {
            alert(e.message);
        });
    };
    EditWallComponent.prototype.add = function () {
        var time = firebase_app__WEBPACK_IMPORTED_MODULE_2__["database"].ServerValue.TIMESTAMP;
        this.fire.object('gfriend/' + this.userId + '/' + this.friendId).set({
            userId: this.friendId,
            time: time
        });
        this.fire.object('ggfriend/' + this.friendId + '/' + this.userId).set({
            userId: this.userId,
            time: time
        });
    };
    EditWallComponent.prototype.remove = function () {
        this.fire.object('gfriend/' + this.userId + '/' + this.friendId).remove();
        this.fire.object('ggfriend/' + this.friendId + '/' + this.userId).remove();
    };
    EditWallComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-wall',
            template: __webpack_require__(/*! ./edit-wall.component.html */ "./src/app/edit-wall/edit-wall.component.html"),
            styles: [__webpack_require__(/*! ./edit-wall.component.css */ "./src/app/edit-wall/edit-wall.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])
    ], EditWallComponent);
    return EditWallComponent;
}());



/***/ }),

/***/ "./src/app/fanpage/fanpage.component.css":
/*!***********************************************!*\
  !*** ./src/app/fanpage/fanpage.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZhbnBhZ2UvZmFucGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/fanpage/fanpage.component.html":
/*!************************************************!*\
  !*** ./src/app/fanpage/fanpage.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n    <i class=\"fa fa-user-circle it green\" title=\"Fan page\"></i>\n    <a class=\"bold\" (click)=\"open=true\">{{namee}}</a>\n  </div>\n    <div *ngIf=\"open\" class=\"page fixed index bottom top lef rit black\" (click)=\"g()\">\n    </div>\n    <div *ngIf=\"open\" class=\"fixed index bottom\" (click)=\"g()\">\n    <a href=\"/home/partyChat/{{friendId}}/{{name}}#bottom\" class=\"design left bo dess download\" title=\"Party chat\">\n      <i class=\"fa fa-comments gree do\"></i>            \n    </a>\n    <button class=\"box design des\" title=\"Wall\" routerLink=\"/home/partyWall/{{friendId}}/{{name}}\">\n      <i class=\"fa fa-user-secret\"></i>            \n  </button>\n  <button class=\"box design des\" title=\"Gallery\" routerLink=\"/home/partyGallery/{{friendId}}/{{name}}\">\n      <i class=\"fa fa-user-clock\"></i>            \n  </button>\n  <button class=\"box design des\" title=\"Display picture\" routerLink=\"/home/partyDisplayPicture/{{friendId}}/{{name}}\">\n      <i class=\"fa fa-portrait\"></i>            \n  </button>\n  <button class=\"box design des\" routerLink=\"/home/fanPage/{{friendId}}/{{name}}\" title=\"Fan page\">\n    <i class=\"fa fa-user-circle\"></i>        \n</button>\n<button [disabled]=\"!userId\" class=\"box design des\" title=\"Follow\" (click)=\"add()\" >\n    <i class=\"fa fa-user-plus\"></i>            \n</button>\n<button [disabled]=\"!userId\" class=\"box design des\" title=\"Unfollow\" (click)=\"remove()\">\n    <i class=\"fa fa-user-minus\"></i>            \n</button>\n    </div>\n  <div class=\"pos fixed bottom lef\">\n    <input  class=\"inpu full black write\" [(ngModel)]=\"searchTerm\">\n  </div>\n  <div class=\"fixed full fix\">\n      <button title=\"Following\" [class.design]=\"!thi\"  [class.white]=\"thi\" (click)=\"that=false; thi=true;\" class=\"des half\">\n          <i class=\"fa fa-user-check\"></i>\n      </button>\n      <button title=\"Followers\" [class.white]=\"that\" [class.design]=\"!that\" (click)=\"thi=false; that=true\" class=\"des half\">\n          <i class=\"fa fa-user-times\"></i>\n      </button>\n      </div>\n    <div class=\"spas space\" *ngIf=\"that\">\n    <div *ngFor=\"let fffriend of fffriends | async | reverse\">\n      <div *ngFor=\"let user of users | async | filter:searchTerm\" [class.me]=\"user.userId === userId\">\n        <div class=\"spac write writ\" *ngIf=\"user.userId === fffriend.userId\">\n      <a href=\"/home/chat/{{user.userId}}/{{user.name}}#bottom\" class=\"bold\">{{user.name}}</a>\n      </div>\n    </div>\n    </div>\n  </div>\n  <div class=\"spas space\" *ngIf=\"thi\">\n      <div *ngFor=\"let ffriend of ffriends | async | reverse\">\n      <div *ngFor=\"let user of users | async | filter:searchTerm\" [class.me]=\"user.userId === userId\">\n        <div class=\"spac write writ\" *ngIf=\"user.userId === ffriend.userId\">\n      <a href=\"/home/chat/{{user.userId}}/{{user.name}}#bottom\" class=\"bold\">{{user.name}}</a>\n      </div>\n    </div>\n    </div>\n  </div>\n  \n  "

/***/ }),

/***/ "./src/app/fanpage/fanpage.component.ts":
/*!**********************************************!*\
  !*** ./src/app/fanpage/fanpage.component.ts ***!
  \**********************************************/
/*! exports provided: FanpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FanpageComponent", function() { return FanpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FanpageComponent = /** @class */ (function () {
    function FanpageComponent(route, auth, fire, db) {
        this.route = route;
        this.auth = auth;
        this.fire = fire;
        this.db = db;
    }
    FanpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
        });
        this.friendId = this.route.snapshot.paramMap.get('id');
        this.name = this.route.snapshot.paramMap.get('name');
        if (this.name.length > 26)
            this.namee = this.name.substring(0, 25) + "...";
        else
            this.namee = this.name;
        this.users = this.db.collection('users').valueChanges();
        this.ffriends = this.fire.list('iifriend/' + this.friendId, function (ref) { return ref.orderByChild('time'); }).valueChanges();
        this.fffriends = this.fire.list('ggfriend/' + this.friendId, function (ref) { return ref.orderByChild('time'); }).valueChanges();
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
    };
    FanpageComponent.prototype.g = function () {
        this.open = false;
    };
    FanpageComponent.prototype.add = function () {
        var time = firebase_app__WEBPACK_IMPORTED_MODULE_5__["database"].ServerValue.TIMESTAMP;
        this.fire.object('gfriend/' + this.userId + '/' + this.friendId).set({
            userId: this.friendId,
            time: time
        });
        this.fire.object('ggfriend/' + this.friendId + '/' + this.userId).set({
            userId: this.userId,
            time: time
        });
    };
    FanpageComponent.prototype.remove = function () {
        this.fire.object('gfriend/' + this.userId + '/' + this.friendId).remove();
        this.fire.object('ggfriend/' + this.friendId + '/' + this.userId).remove();
    };
    FanpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fanpage',
            template: __webpack_require__(/*! ./fanpage.component.html */ "./src/app/fanpage/fanpage.component.html"),
            styles: [__webpack_require__(/*! ./fanpage.component.css */ "./src/app/fanpage/fanpage.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], FanpageComponent);
    return FanpageComponent;
}());



/***/ }),

/***/ "./src/app/fci/fci.component.css":
/*!***************************************!*\
  !*** ./src/app/fci/fci.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZjaS9mY2kuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/fci/fci.component.html":
/*!****************************************!*\
  !*** ./src/app/fci/fci.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n  <i class=\"fa fa-envelope it green\" title=\"Following parties' inbox\"></i>\n</div>\n<div class=\"spa space\">\n<div *ngFor=\"let friend of friends | async | reverse\">  \n  <div *ngFor=\"let message of messages | async | filter:searchTerm\">\n    <div class=\"spac writ\" *ngIf=\"message.channelId === friend.userId\">\n<div class=\"write\">\n  <a href=\"/home/partyChat/{{message.channelId}}/{{message.name}}#bottom\" class=\"bold\">{{message.name}}</a>\n  <br>\n{{message.text}}\n<div class=\"right it\">{{message.time | date:\"EEEE, MMMM d, y 'at' h:mm a\"}}</div>\n<div class=\"clear\"></div>\n<a [href]=\"message.url\" *ngIf=\"message.ext\" download class=\"design left bo dess download\" title=\"Download file\">\n  <i class=\"fa fa-download gree do\"></i>\n</a>\n<div class=\"clear\"></div>\n</div>\n<img *ngIf=\"message.ext === 'jpg' || message.ext === 'png' || message.ext === 'gif'\" [src]=\"message.url\">    \n<video *ngIf=\"message.ext === 'mp4'\" controls>\n  <source [src]=\"message.url\" type=\"video/mp4\">\n</video>\n<audio *ngIf=\"message.ext === 'mp3'\" controls>\n  <source [src]=\"message.url\" type=\"audio/mp3\">\n</audio>\n<i *ngIf=\"message.ext && message.ext !== 'mp3' && message.ext !== 'mp4' && message.ext !== 'jpg' && message.ext !== 'png' && message.ext !== 'gif'\" class=\"fa fa-5x fa-file\"></i>\n</div>\n</div>\n</div>\n</div>\n<div class=\"pos fixed bottom lef\">\n  <input [(ngModel)]=\"searchTerm\"  class=\"inpu full black write\">\n  </div>"

/***/ }),

/***/ "./src/app/fci/fci.component.ts":
/*!**************************************!*\
  !*** ./src/app/fci/fci.component.ts ***!
  \**************************************/
/*! exports provided: FciComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FciComponent", function() { return FciComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FciComponent = /** @class */ (function () {
    function FciComponent(auth, fire) {
        this.auth = auth;
        this.fire = fire;
    }
    FciComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
            _this.friends = _this.fire.list('gfriend/' + _this.userId, function (ref) { return ref.orderByChild('time'); }).valueChanges();
            _this.messages = _this.fire.list('ginbox').valueChanges();
        });
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
    };
    FciComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fci',
            template: __webpack_require__(/*! ./fci.component.html */ "./src/app/fci/fci.component.html"),
            styles: [__webpack_require__(/*! ./fci.component.css */ "./src/app/fci/fci.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], FciComponent);
    return FciComponent;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, filter) {
        if (!items || !filter)
            return items;
        return items.filter(function (item) { return item.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1; });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/fpi/fpi.component.css":
/*!***************************************!*\
  !*** ./src/app/fpi/fpi.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZwaS9mcGkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/fpi/fpi.component.html":
/*!****************************************!*\
  !*** ./src/app/fpi/fpi.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n  <i class=\"fa fa-user-shield it green\" title=\"Following people' inbox\"></i>\n</div>\n<div class=\"spa space\">\n<div *ngFor=\"let friend of friends | async | reverse\">  \n  <div *ngFor=\"let message of messages | async | filter:searchTerm\" [class.me]=\"message.userId === userId\">\n    <div class=\"spac writ\" *ngIf=\"message.userId === friend.userId\">\n<div class=\"write\">\n  <a href=\"/home/chat/{{message.userId}}/{{message.name}}#bottom\" class=\"bold\">{{message.name}}</a>\n  <br>\n{{message.text}}\n<div class=\"right it\">{{message.time | date:\"EEEE, MMMM d, y 'at' h:mm a\"}}</div>\n<div class=\"clear\"></div>\n<button class=\"design box des\" title=\"Delete message\" (click)=\"delete(message.userId,message.name)\">\n  <i class=\"fa fa-trash\"></i>\n</button>\n<a [href]=\"message.url\" *ngIf=\"message.ext\" download class=\"design left bo dess download\" title=\"Download file\">\n  <i class=\"fa fa-download gree do\"></i>\n</a>\n<div class=\"clear\"></div>\n</div>\n<img *ngIf=\"message.ext === 'jpg' || message.ext === 'png' || message.ext === 'gif'\" [src]=\"message.url\">    \n<video *ngIf=\"message.ext === 'mp4'\" controls>\n  <source [src]=\"message.url\" type=\"video/mp4\">\n</video>\n<audio *ngIf=\"message.ext === 'mp3'\" controls>\n  <source [src]=\"message.url\" type=\"audio/mp3\">\n</audio>\n<i *ngIf=\"message.ext && message.ext !== 'mp3' && message.ext !== 'mp4' && message.ext !== 'jpg' && message.ext !== 'png' && message.ext !== 'gif'\" class=\"fa fa-5x fa-file\"></i>\n</div>\n</div>\n</div>\n</div>\n<div class=\"pos fixed bottom lef\">\n  <input [(ngModel)]=\"searchTerm\"  class=\"inpu full black write\">\n  </div>"

/***/ }),

/***/ "./src/app/fpi/fpi.component.ts":
/*!**************************************!*\
  !*** ./src/app/fpi/fpi.component.ts ***!
  \**************************************/
/*! exports provided: FpiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FpiComponent", function() { return FpiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FpiComponent = /** @class */ (function () {
    function FpiComponent(auth, fire) {
        this.auth = auth;
        this.fire = fire;
    }
    FpiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
            _this.friends = _this.fire.list('ffriend/' + _this.userId, function (ref) { return ref.orderByChild('time'); }).valueChanges();
            _this.messages = _this.fire.list('inbox/' + _this.userId).valueChanges();
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
        // ];
        // this.friends = [
        //   {
        //     userId: '1'
        //   },
        //   {
        //     userId: '2'
        //   }
        // ];
    };
    FpiComponent.prototype.delete = function (d, e) {
        var val = confirm("Delete " + e + "'s message");
        if (val) {
            this.fire.object('inbox/' + this.userId + '/' + d).remove();
            alert('Deleted');
        }
    };
    FpiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fpi',
            template: __webpack_require__(/*! ./fpi.component.html */ "./src/app/fpi/fpi.component.html"),
            styles: [__webpack_require__(/*! ./fpi.component.css */ "./src/app/fpi/fpi.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], FpiComponent);
    return FpiComponent;
}());



/***/ }),

/***/ "./src/app/fps/fps.component.css":
/*!***************************************!*\
  !*** ./src/app/fps/fps.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zwcy9mcHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/fps/fps.component.html":
/*!****************************************!*\
  !*** ./src/app/fps/fps.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n  <i class=\"fa fa-tv it green\" title=\"Following people' status\"></i>\n</div>\n<div class=\"spa space\">\n<div *ngFor=\"let friend of friends | async | reverse\">  \n  <div *ngFor=\"let message of messages | async | filter:searchTerm\" [class.me]=\"message.userId === userId\">\n    <div class=\"spac writ\" *ngIf=\"message.userId === friend.userId\">\n<div class=\"write\">\n  <a href=\"/home/chat/{{message.userId}}/{{message.name}}#bottom\" class=\"bold\">{{message.name}}</a>\n<br>\n{{message.text}}\n<div class=\"right it\">{{message.time | date:\"EEEE, MMMM d, y 'at' h:mm a\"}}</div>\n<div class=\"clear\"></div>\n<a [href]=\"message.url\" *ngIf=\"message.ext\" download class=\"design left bo dess download\" title=\"Download file\">\n  <i class=\"fa fa-download gree do\"></i>\n</a>\n<div class=\"clear\"></div>\n</div>\n<img *ngIf=\"message.ext === 'jpg' || message.ext === 'png' || message.ext === 'gif'\" [src]=\"message.url\">    \n<video *ngIf=\"message.ext === 'mp4'\" controls>\n  <source [src]=\"message.url\" type=\"video/mp4\">\n</video>\n<audio *ngIf=\"message.ext === 'mp3'\" controls>\n  <source [src]=\"message.url\" type=\"audio/mp3\">\n</audio>\n<i *ngIf=\"message.ext && message.ext !== 'mp3' && message.ext !== 'mp4' && message.ext !== 'jpg' && message.ext !== 'png' && message.ext !== 'gif'\" class=\"fa fa-5x fa-file\"></i>\n</div>\n</div>\n</div>\n</div>\n<div class=\"pos fixed bottom lef\">\n  <input [(ngModel)]=\"searchTerm\"  class=\"inpu full black write\">\n  </div>"

/***/ }),

/***/ "./src/app/fps/fps.component.ts":
/*!**************************************!*\
  !*** ./src/app/fps/fps.component.ts ***!
  \**************************************/
/*! exports provided: FpsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FpsComponent", function() { return FpsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FpsComponent = /** @class */ (function () {
    function FpsComponent(auth, fire) {
        this.auth = auth;
        this.fire = fire;
    }
    FpsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
            _this.friends = _this.fire.list('ffriend/' + _this.userId, function (ref) { return ref.orderByChild('time'); }).valueChanges();
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
    };
    FpsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fps',
            template: __webpack_require__(/*! ./fps.component.html */ "./src/app/fps/fps.component.html"),
            styles: [__webpack_require__(/*! ./fps.component.css */ "./src/app/fps/fps.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], FpsComponent);
    return FpsComponent;
}());



/***/ }),

/***/ "./src/app/friend/friend.component.css":
/*!*********************************************!*\
  !*** ./src/app/friend/friend.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyaWVuZC9mcmllbmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/friend/friend.component.html":
/*!**********************************************!*\
  !*** ./src/app/friend/friend.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n    <i class=\"fa fa-user-friends it green\" title=\"Friends\"></i>\n  </div>\n  <div class=\"pos fixed bottom lef\">\n    <input  class=\"inpu full black write\" [(ngModel)]=\"searchTerm\">\n  </div>\n  <div class=\"fixed full fix\">\n      <button title=\"Following\" [class.design]=\"!thi\"  [class.white]=\"thi\" (click)=\"that=false; thi=true;\" class=\"des half\">\n          <i class=\"fa fa-user-check\"></i>\n      </button>\n      <button title=\"Followers\" [class.white]=\"that\" [class.design]=\"!that\" (click)=\"thi=false; that=true\" class=\"des half\">\n          <i class=\"fa fa-user-times\"></i>\n      </button>\n      </div>\n    <div class=\"spas space\" *ngIf=\"that\">\n    <div *ngFor=\"let fffriend of fffriends  | async | reverse\">\n      <div *ngFor=\"let user of users | async | filter:searchTerm\" [class.me]=\"user.userId === userId\">\n        <div class=\"spac write writ\" *ngIf=\"user.userId === fffriend.userId\">\n      <a href=\"/home/chat/{{user.userId}}/{{user.name}}#bottom\" class=\"bold\">{{user.name}}</a>      \n      </div>\n    </div>\n    </div>\n  </div>\n  <div class=\"spas space\" *ngIf=\"thi\">\n      <div *ngFor=\"let ffriend of ffriends | async | reverse\">\n      <div *ngFor=\"let user of users | async | filter:searchTerm\" [class.me]=\"user.userId === userId\">\n        <div class=\"spac write writ\" *ngIf=\"user.userId === ffriend.userId\">\n      <a href=\"/home/chat/{{user.userId}}/{{user.name}}#bottom\" class=\"bold\">{{user.name}}</a>\n      </div>\n    </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/friend/friend.component.ts":
/*!********************************************!*\
  !*** ./src/app/friend/friend.component.ts ***!
  \********************************************/
/*! exports provided: FriendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendComponent", function() { return FriendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FriendComponent = /** @class */ (function () {
    function FriendComponent(auth, db, fire) {
        this.auth = auth;
        this.db = db;
        this.fire = fire;
    }
    FriendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
            _this.ffriends = _this.fire.list('ffriend/' + _this.userId, function (ref) { return ref.orderByChild('time'); }).valueChanges();
            _this.fffriends = _this.fire.list('fffriend/' + _this.userId, function (ref) { return ref.orderByChild('time'); }).valueChanges();
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
    };
    FriendComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-friend',
            template: __webpack_require__(/*! ./friend.component.html */ "./src/app/friend/friend.component.html"),
            styles: [__webpack_require__(/*! ./friend.component.css */ "./src/app/friend/friend.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], FriendComponent);
    return FriendComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n  <i class=\"fa fa-user-clock it green\" title=\"Gallery\"></i>\n</div>\n<div class=\"spa space\">\n<div class=\"spac writ\" *ngFor=\"let message of messages | async | reverse | filter:searchTerm\">\n<div class=\"write\">\n{{message.name}}\n<div class=\"right it\">{{message.time | date:\"EEEE, MMMM d, y 'at' h:mm a\"}}</div>\n<div class=\"clear\"></div>\n<button class=\"design box des\" title=\"Delete file\" (click)=\"delete(message.userId,message.name)\">\n  <i class=\"fa fa-trash\"></i>\n</button>\n<a [href]=\"message.url\" download class=\"design left bo dess download\" title=\"Download file\">\n  <i class=\"fa fa-download gree do\"></i>\n</a>\n<div class=\"clear\"></div>\n</div>\n<img *ngIf=\"message.ext === 'jpg' || message.ext === 'png' || message.ext === 'gif'\" [src]=\"message.url\">    \n<video *ngIf=\"message.ext === 'mp4'\" controls>\n  <source [src]=\"message.url\" type=\"video/mp4\">\n</video>\n<audio *ngIf=\"message.ext === 'mp3'\" controls>\n  <source [src]=\"message.url\" type=\"audio/mp3\">\n</audio>\n<i *ngIf=\"message.ext && message.ext !== 'mp3' && message.ext !== 'mp4' && message.ext !== 'jpg' && message.ext !== 'png' && message.ext !== 'gif'\" class=\"fa fa-5x fa-file\"></i>\n\n</div>\n</div>\n<div class=\"pos fixed bottom lef\">\n  <input [(ngModel)]=\"searchTerm\"  class=\"inpu full black write\">\n  </div>"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(fire, auth) {
        this.fire = fire;
        this.auth = auth;
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
            _this.messages = _this.fire.list('gallery/' + _this.userId).valueChanges();
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
    };
    GalleryComponent.prototype.delete = function (d, e) {
        var val = confirm("Delete " + e + "'s file");
        if (val) {
            this.fire.object('gallery/' + this.userId + '/' + d).remove();
            alert('Deleted');
        }
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/groupchat/groupchat.component.css":
/*!***************************************************!*\
  !*** ./src/app/groupchat/groupchat.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3VwY2hhdC9ncm91cGNoYXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/groupchat/groupchat.component.html":
/*!****************************************************!*\
  !*** ./src/app/groupchat/groupchat.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n  <i class=\"fa fa-comments it green\" title=\"Party chat\"></i>\n  <a class=\"bold\" (click)=\"open=true\">\n    {{namee}}\n  </a>\n  </div>\n  <div *ngIf=\"open\" class=\"page fixed index bottom top lef rit black\" (click)=\"g()\">\n  </div>\n  <div *ngIf=\"open\" class=\"fixed index bottom\" (click)=\"g()\">\n    <a href=\"/home/partyChat/{{friendId}}/{{name}}#bottom\" class=\"design left bo dess download\" title=\"Party chat\">\n      <i class=\"fa fa-comments gree do\"></i>            \n    </a>\n    <button class=\"box design des\" title=\"Wall\" routerLink=\"/home/partyWall/{{friendId}}/{{name}}\">\n      <i class=\"fa fa-user-secret\"></i>            \n  </button>\n  <button class=\"box design des\" title=\"Gallery\" routerLink=\"/home/partyGallery/{{friendId}}/{{name}}\">\n      <i class=\"fa fa-user-clock\"></i>            \n  </button>\n  <button class=\"box design des\" title=\"Display picture\" routerLink=\"/home/partyDisplayPicture/{{friendId}}/{{name}}\">\n      <i class=\"fa fa-portrait\"></i>            \n  </button>\n  <button class=\"box design des\" routerLink=\"/home/fanPage/{{friendId}}/{{name}}\" title=\"Fan page\">\n    <i class=\"fa fa-user-circle\"></i>        \n</button>\n<button [disabled]=\"!userId\"  class=\"box design des\" title=\"Follow\" (click)=\"add()\" >\n    <i class=\"fa fa-user-plus\"></i>            \n</button>\n<button [disabled]=\"!userId\"  class=\"box design des\" title=\"Unfollow\" (click)=\"remove()\">\n    <i class=\"fa fa-user-minus\"></i>            \n</button>\n    </div>\n  <div class=\"spacc space\">\n  <div class=\"spac writ\" *ngFor=\"let message of messages | async\" [class.me]=\"message.userId === userId\">\n    <div class=\"write\">\n    <a href=\"/home/chat/{{message.userId}}/{{message.name}}#bottom\" class=\"bold\">{{message.name}}</a>\n    <br>\n    {{message.text}}\n    <div class=\"right it\">{{message.time | date:\"EEEE, MMMM d, y 'at' h:mm a\"}}</div>\n    <div class=\"clear\"></div>\n    <a [href]=\"message.url\" download *ngIf=\"message.ext\" class=\"design left bo dess download\" title=\"Download file\">\n      <i class=\"fa fa-download gree do\"></i>\n    </a>\n  <div class=\"clear\"></div>\n    </div>\n    <img *ngIf=\"message.ext === 'jpg' || message.ext === 'png' || message.ext === 'gif'\" [src]=\"message.url\">    \n    <video *ngIf=\"message.ext === 'mp4'\" controls>\n      <source [src]=\"message.url\" type=\"video/mp4\">\n  </video>\n  <audio *ngIf=\"message.ext === 'mp3'\" controls>\n      <source [src]=\"message.url\" type=\"audio/mp3\">\n  </audio>\n  \n  </div>\n  <a id=\"bottom\"></a> \n  </div>\n    <form class=\"down fixed bottom lef rit\" (submit)=\"send(text)\">\n      <div class=\"d\">\n    <textarea id=\"te\" [placeholder]=\"name\" [(ngModel)]=\"text\" name=\"text\"></textarea>\n    </div>\n  <label *ngIf=\"userId\" class=\"file design dess bo\" title=\"Upload file\">\n  <i class=\"fa fa-upload gree\"></i>\n    <input type=\"file\" class=\"no\" (change)=\"upload($event)\">\n  </label>\n    <button type=\"submit\" [disabled]=\"!text || !userId\" class=\"full submit des\" title=\"Create message\">\n  <i class=\"fa fa-reply\"></i>\n    </button>\n    </form>\n  "

/***/ }),

/***/ "./src/app/groupchat/groupchat.component.ts":
/*!**************************************************!*\
  !*** ./src/app/groupchat/groupchat.component.ts ***!
  \**************************************************/
/*! exports provided: GroupchatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupchatComponent", function() { return GroupchatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GroupchatComponent = /** @class */ (function () {
    function GroupchatComponent(route, afStorage, auth, fire) {
        this.route = route;
        this.afStorage = afStorage;
        this.auth = auth;
        this.fire = fire;
    }
    GroupchatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
            _this.displayname = user.displayName;
            _this.email = user.email;
        });
        this.friendId = this.route.snapshot.paramMap.get('id');
        this.name = this.route.snapshot.paramMap.get('name');
        if (this.name.length > 26)
            this.namee = this.name.substring(0, 25) + "...";
        else
            this.namee = this.name;
        this.messages = this.fire.list('gmessages/' + this.friendId).valueChanges();
    };
    GroupchatComponent.prototype.send = function (e) {
        this.text = '';
        document.getElementById('te').focus();
        var time = firebase_app__WEBPACK_IMPORTED_MODULE_2__["database"].ServerValue.TIMESTAMP;
        this.fire.object('ginbox/' + this.friendId).update({
            text: e,
            time: time
        });
        this.fire.list('gmessages/' + this.friendId).push({
            userId: this.userId,
            text: e,
            time: time,
            name: this.displayname + ': ' + this.email
        });
    };
    GroupchatComponent.prototype.g = function () {
        this.open = false;
    };
    GroupchatComponent.prototype.upload = function (e) {
        var _this = this;
        var file = e.target.files[0];
        var fileName = file.name;
        var ext = fileName.split('.').pop();
        var id = this.fire.createPushId();
        var time = firebase_app__WEBPACK_IMPORTED_MODULE_2__["database"].ServerValue.TIMESTAMP;
        var ref = this.afStorage.ref('gchat/' + this.friendId + '/' + id);
        ref.put(file).then(function () {
            ref.getDownloadURL().subscribe(function (url) {
                _this.fire.object('ginbox/' + _this.friendId).update({
                    time: time,
                    text: fileName,
                    url: url,
                    ext: ext,
                });
                _this.fire.list('gmessages/' + _this.friendId).push({
                    userId: _this.userId,
                    text: fileName,
                    url: url,
                    ext: ext,
                    time: time,
                    name: _this.displayname + ': ' + _this.email
                });
                _this.fire.list('ggallery/' + _this.friendId).push({
                    name: fileName,
                    time: time,
                    url: url,
                    ext: ext
                });
            });
        }).catch(function (e) {
            alert(e.message);
        });
    };
    GroupchatComponent.prototype.add = function () {
        var time = firebase_app__WEBPACK_IMPORTED_MODULE_2__["database"].ServerValue.TIMESTAMP;
        this.fire.object('gfriend/' + this.userId + '/' + this.friendId).set({
            userId: this.friendId,
            time: time
        });
        this.fire.object('ggfriend/' + this.friendId + '/' + this.userId).set({
            userId: this.userId,
            time: time
        });
    };
    GroupchatComponent.prototype.remove = function () {
        this.fire.object('gfriend/' + this.userId + '/' + this.friendId).remove();
        this.fire.object('ggfriend/' + this.friendId + '/' + this.userId).remove();
    };
    GroupchatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-groupchat',
            template: __webpack_require__(/*! ./groupchat.component.html */ "./src/app/groupchat/groupchat.component.html"),
            styles: [__webpack_require__(/*! ./groupchat.component.css */ "./src/app/groupchat/groupchat.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]])
    ], GroupchatComponent);
    return GroupchatComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"design des box fixed index top rit\" (click)=\"open=true\" title=\"Home\">\n    <i class=\"fa fa-home\"></i>\n</button>\n<div *ngIf=\"open\" class=\"page fixed index top bottom lef rit black\" (click)=\"open=false\">\n</div>\n<div *ngIf=\"open\" class=\"fixed index bottom\" (click)=\"open=false\">\n    <button class=\"box design des\" routerLink=\"/home/people\" title=\"People\">\n        <i class=\"fa fa-users\"></i>\n    </button>\n    <button class=\"box design des\" title=\"Parties\" routerLink=\"/home/parties\">\n        <i class=\"fa fa-envelope-open-text\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Forum\" routerLink=\"/home/forum\">\n        <i class=\"fa fa-mail-bulk\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Profile\" routerLink=\"/home/profile\">\n        <i class=\"fa fa-user-tie\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Wall\" routerLink=\"/home/wall\">\n        <i class=\"fa fa-user-secret\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Gallery\" routerLink=\"/home/gallery\">\n        <i class=\"fa fa-user-clock\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Following people' inbox\" routerLink=\"/home/followingPeopleInbox\">\n        <i class=\"fa fa-user-shield\"></i>            \n    </button>\n    <button class=\"box design des\" routerLink=\"/home/inbox\" title=\"Inbox\">\n        <i class=\"fa fa-inbox\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Following parties' inbox\" routerLink=\"/home/followingPartiesInbox\">\n        <i class=\"fa fa-envelope\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Following people' status\" routerLink=\"/home/followingPeopleStatus\">\n        <i class=\"fa fa-tv\"></i>            \n    </button>\n    <button class=\"box design des\" routerLink=\"/home/friends\" title=\"Friends\">\n        <i class=\"fa fa-user-friends\"></i>        \n    </button>\n    <button class=\"box design des\" title=\"Channels\" routerLink=\"/home/channels\">\n        <i class=\"fa fa-warehouse\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Display picture\" routerLink=\"/home/displayPicture\">\n        <i class=\"fa fa-portrait\"></i>            \n    </button>\n    <button class=\"box design des\" routerLink=\"/home/settings\" title=\"Settings\">\n        <i class=\"fa fa-user-edit\"></i>\n    </button>\n    <button class=\"box design des\" title=\"Logout\" (click)=\"sign()\">\n        <i class=\"fa fa-sign-out-alt\"></i>           \n    </button>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            if (!user)
                _this.router.navigate(['auth']);
        });
    };
    HomeComponent.prototype.sign = function () {
        var val = confirm("Logout");
        if (val)
            this.auth.auth.signOut().catch(function (error) {
                alert(error.message);
            });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/inbox/inbox.component.css":
/*!*******************************************!*\
  !*** ./src/app/inbox/inbox.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luYm94L2luYm94LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/inbox/inbox.component.html":
/*!********************************************!*\
  !*** ./src/app/inbox/inbox.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n  <i class=\"fa fa-inbox it green\" title=\"Inbox\"></i>\n</div>\n<div class=\"spa space\">\n<div class=\"spac writ\" *ngFor=\"let message of messages | async | reverse | filter:searchTerm\" [class.me]=\"message.userId === userId\">\n<div class=\"write\">\n  <a href=\"/home/chat/{{message.userId}}/{{message.name}}#bottom\" class=\"bold\">{{message.name}}</a>\n<br>\n{{message.text}}\n<div class=\"right it\">{{message.time | date:\"EEEE, MMMM d, y 'at' h:mm a\"}}</div>\n<div class=\"clear\"></div>\n<button class=\"design box des\" title=\"Delete message\" (click)=\"delete(message.userId,message.name)\">\n  <i class=\"fa fa-trash\"></i>\n</button>\n<a [href]=\"message.url\" *ngIf=\"message.ext\" download class=\"design left bo dess download\" title=\"Download file\">\n  <i class=\"fa fa-download gree do\"></i>\n</a>\n<div class=\"clear\"></div>\n</div>\n<img *ngIf=\"message.ext === 'jpg' || message.ext === 'png' || message.ext === 'gif'\" [src]=\"message.url\">    \n<video *ngIf=\"message.ext === 'mp4'\" controls>\n  <source [src]=\"message.url\" type=\"video/mp4\">\n</video>\n<audio *ngIf=\"message.ext === 'mp3'\" controls>\n  <source [src]=\"message.url\" type=\"audio/mp3\">\n</audio>\n<i *ngIf=\"message.ext && message.ext !== 'mp3' && message.ext !== 'mp4' && message.ext !== 'jpg' && message.ext !== 'png' && message.ext !== 'gif'\" class=\"fa fa-5x fa-file\"></i>\n</div>\n</div>\n<div class=\"pos fixed bottom lef\">\n  <input [(ngModel)]=\"searchTerm\" class=\"inpu full black write\">\n  </div>"

/***/ }),

/***/ "./src/app/inbox/inbox.component.ts":
/*!******************************************!*\
  !*** ./src/app/inbox/inbox.component.ts ***!
  \******************************************/
/*! exports provided: InboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxComponent", function() { return InboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InboxComponent = /** @class */ (function () {
    function InboxComponent(auth, fire) {
        this.auth = auth;
        this.fire = fire;
    }
    InboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
            _this.messages = _this.fire.list('inbox/' + _this.userId, function (ref) { return ref.orderByChild('time'); }).valueChanges();
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
    };
    InboxComponent.prototype.delete = function (d, e) {
        var val = confirm("Delete " + e + "'s message");
        if (val) {
            this.fire.object('inbox/' + this.userId + '/' + d).remove();
            alert('Deleted');
        }
    };
    InboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inbox',
            template: __webpack_require__(/*! ./inbox.component.html */ "./src/app/inbox/inbox.component.html"),
            styles: [__webpack_require__(/*! ./inbox.component.css */ "./src/app/inbox/inbox.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], InboxComponent);
    return InboxComponent;
}());



/***/ }),

/***/ "./src/app/people/people.component.css":
/*!*********************************************!*\
  !*** ./src/app/people/people.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Blb3BsZS9wZW9wbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/people/people.component.html":
/*!**********************************************!*\
  !*** ./src/app/people/people.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n  <i class=\"fa fa-users it green\" title=\"People\"></i>\n</div>\n<div class=\"pos fixed bottom lef\">\n  <input  class=\"inpu full black write\" [(ngModel)]=\"searchTerm\">\n</div>\n\n<div class=\"spa space\">\n<div *ngFor=\"let user of users | async | filter:searchTerm\" class=\"spac write writ\" [class.me]=\"user.userId === userId\">\n  <a href=\"/home/chat/{{user.userId}}/{{user.name}}#bottom\" class=\"bold\">{{user.name}}</a>\n</div> \n</div>\n"

/***/ }),

/***/ "./src/app/people/people.component.ts":
/*!********************************************!*\
  !*** ./src/app/people/people.component.ts ***!
  \********************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PeopleComponent = /** @class */ (function () {
    function PeopleComponent(db, auth) {
        this.db = db;
        this.auth = auth;
    }
    PeopleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
        });
        this.users = this.db.collection('users', function (ref) { return ref.orderBy('name'); }).valueChanges();
    };
    PeopleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-people',
            template: __webpack_require__(/*! ./people.component.html */ "./src/app/people/people.component.html"),
            styles: [__webpack_require__(/*! ./people.component.css */ "./src/app/people/people.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], PeopleComponent);
    return PeopleComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n  <i class=\"fa fa-user-tie it green\" title=\"Profile\"></i>\n</div>\n<div class=\"spacc space\">\n<div class=\"spac writ\" *ngFor=\"let message of messages | async | reverse | filter:text\">\n<div class=\"write\">\n{{message.name}}\n<div class=\"right it\">{{message.time | date:\"EEEE, MMMM d, y 'at' h:mm a\"}}</div>\n<div class=\"clear\"></div>\n<button class=\"design box des\" title=\"Delete status\" (click)=\"delete(message.id, message.name)\">\n  <i class=\"fa fa-trash\"></i>\n</button>\n<a [href]=\"message.url\" download *ngIf=\"message.ext\" class=\"design left bo dess download\" title=\"Download file\">\n  <i class=\"fa fa-download gree do\"></i>\n</a>\n<div class=\"clear\"></div>\n</div>\n<img *ngIf=\"message.ext === 'jpg' || message.ext === 'png' || message.ext === 'gif'\" [src]=\"message.url\">    \n<video *ngIf=\"message.ext === 'mp4'\" controls>\n  <source [src]=\"message.url\" type=\"video/mp4\">\n</video>\n<audio *ngIf=\"message.ext === 'mp3'\" controls>\n  <source [src]=\"message.url\" type=\"audio/mp3\">\n</audio>\n<i *ngIf=\"message.ext && message.ext !== 'mp3' && message.ext !== 'mp4' && message.ext !== 'jpg' && message.ext !== 'png' && message.ext !== 'gif'\" class=\"fa fa-5x fa-file\"></i>\n\n</div>\n</div>\n<form class=\"down fixed bottom lef rit\" (submit)=\"send(text)\">\n  <div class=\"d\">\n<textarea id=\"te\" [(ngModel)]=\"text\" name=\"text\"></textarea>\n</div>\n<label *ngIf=\"userId\" class=\"file design dess bo\" title=\"Upload file\">\n<input type=\"file\" class=\"no\" (change)=\"upload($event)\">\n<i class=\"fa fa-upload gree\"></i>\n</label>\n<button type=\"submit\" [disabled]=\"!text || !userId\" class=\"full submit des\" title=\"Create status\">\n  <i class=\"fa fa-reply\"></i>\n</button>\n</form>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(afStorage, fire, auth) {
        this.afStorage = afStorage;
        this.fire = fire;
        this.auth = auth;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
            _this.messages = _this.fire.list('profile/' + _this.userId).valueChanges();
        });
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
    };
    ProfileComponent.prototype.send = function (e) {
        this.text = "";
        document.getElementById('te').focus();
        var id = this.fire.createPushId();
        var time = firebase_app__WEBPACK_IMPORTED_MODULE_1__["database"].ServerValue.TIMESTAMP;
        this.fire.object('profile/' + this.userId + '/' + id).set({
            id: id,
            name: e,
            time: time
        });
        this.fire.object('otherprofile/' + this.userId + '/' + id).set({
            name: e,
            time: time
        });
        this.fire.object('status/' + this.userId).update({
            text: e,
            time: time
        });
    };
    ProfileComponent.prototype.delete = function (d, e) {
        var _this = this;
        var val = confirm("Delete " + e + "'s status");
        if (val) {
            this.fire.object('profile/' + this.userId + '/' + d).remove();
            this.fire.object('otherprofile/' + this.userId + '/' + d).remove();
            this.afStorage.ref('profile/' + d).delete();
            this.fire.object('status/' + this.userId + '/text').valueChanges().subscribe(function (snapshot) {
                if (snapshot === e)
                    _this.fire.object('status/' + _this.userId).update({
                        text: '',
                        time: '',
                        url: '',
                        ext: ''
                    });
            });
            alert('Deleted');
        }
    };
    ProfileComponent.prototype.upload = function (e) {
        var _this = this;
        var file = e.target.files[0];
        var fileName = file.name;
        var ext = fileName.split('.').pop();
        var id = this.fire.createPushId();
        var time = firebase_app__WEBPACK_IMPORTED_MODULE_1__["database"].ServerValue.TIMESTAMP;
        var ref = this.afStorage.ref('profile/' + id);
        ref.put(file).then(function () {
            ref.getDownloadURL().subscribe(function (url) {
                _this.fire.object('profile/' + _this.userId + '/' + id).set({
                    id: id,
                    name: fileName,
                    time: time,
                    url: url,
                    ext: ext
                });
                _this.fire.object('otherprofile/' + _this.userId + '/' + id).set({
                    name: fileName,
                    time: time,
                    url: url,
                    ext: ext
                });
                _this.fire.object('status/' + _this.userId).update({
                    text: fileName,
                    time: time,
                    url: url,
                    ext: ext
                });
            });
        }).catch(function (e) {
            alert(e.message);
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/reverse.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/reverse.pipe.ts ***!
  \*********************************/
/*! exports provided: ReversePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversePipe", function() { return ReversePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReversePipe = /** @class */ (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (value) {
        if (!value)
            return;
        return value.reverse();
    };
    ReversePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'reverse'
        })
    ], ReversePipe);
    return ReversePipe;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n    <i class=\"fa fa-user-edit it green\" title=\"Settings\"></i>\n  <a class=\"bold\" (click)=\"open=true\">{{textt}}</a>\n</div>\n<div *ngIf=\"open\" class=\"page fixed index bottom top lef rit black\" (click)=\"g()\">\n</div>\n<div *ngIf=\"open\" class=\"fixed index bottom\" (click)=\"g()\">\n    <a href=\"/home/chat/{{userId}}/{{name}}: {{email}}#bottom\" class=\"design left bo dess download\" title=\"Chat\">\n        <i class=\"fa fa-comment gree do\"></i>            \n    </a>\n    <button class=\"box design des\" title=\"Forum\" routerLink=\"/home/forum/{{userId}}/{{name}}: {{email}}\">\n        <i class=\"fa fa-mail-bulk\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Profile\" routerLink=\"/home/profile/{{userId}}/{{name}}: {{email}}\">\n        <i class=\"fa fa-user-tie\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Wall\" routerLink=\"/home/wall/{{userId}}/{{name}}: {{email}}\">\n        <i class=\"fa fa-user-secret\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Following parties' inbox\" routerLink=\"/home/followingPartiesInbox/{{userId}}/{{name}}: {{email}}\">\n        <i class=\"fa fa-envelope\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Following people' status\" routerLink=\"/home/followingPeopleStatus/{{userId}}/{{name}}: {{email}}\">\n        <i class=\"fa fa-tv\"></i>            \n    </button>\n    <button class=\"box design des\" routerLink=\"/home/friends/{{userId}}/{{name}}: {{email}}\" title=\"Friends\">\n        <i class=\"fa fa-user-friends\"></i>        \n    </button>\n    <button class=\"box design des\" title=\"Channels\" routerLink=\"/home/channels/{{userId}}/{{name}}: {{email}}\">\n        <i class=\"fa fa-warehouse\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Display picture\" routerLink=\"/home/displayPicture/{{userId}}/{{name}}: {{email}}\">\n        <i class=\"fa fa-portrait\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"box design des\" title=\"Follow\" (click)=\"add()\" >\n        <i class=\"fa fa-user-plus\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"box design des\" title=\"Unfollow\" (click)=\"remove()\">\n        <i class=\"fa fa-user-minus\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"design box des\" title=\"Clear chat\" (click)=\"clear()\">\n        <i class=\"fa fa-trash-alt\"></i>\n    </button>\n</div>\n  <form class=\"down fixed bottom lef rit\" (submit)=\"send(tex)\">\n    <div class=\"d\">\n  <textarea id=\"te\" title='Can not contain any of the following characters: \\ / [ ] \"' required pattern=\"[^/\\][\\\\\\x22]+\" [placeholder]=\"texttt\" [(ngModel)]=\"tex\" #text=\"ngModel\" name=\"text\"></textarea>\n  </div>\n  <button type=\"submit\" [disabled]=\"text.invalid || !userId\" class=\"full submit des\" title=\"Update username\">\n      <i class=\"fa fa-pen\"></i>\n  </button>\n  </form>"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(auth, fire, db) {
        this.auth = auth;
        this.fire = fire;
        this.db = db;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
            _this.email = user.email;
            _this.name = user.displayName;
            _this.texttt = _this.name + ': ' + _this.email;
            if (_this.texttt.length > 26)
                _this.textt = _this.texttt.substring(0, 25) + "...";
            else
                _this.textt = _this.texttt;
        });
    };
    SettingsComponent.prototype.send = function (e) {
        document.getElementById('te').focus();
        var user = firebase_app__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser;
        user.updateProfile({
            displayName: e,
            photoURL: ''
        });
        // .then(function() {
        //   alert('g');
        //   // Update successful.
        // }).catch(function(error) {
        //   alert(this.userId+','+e);
        //   // An error happened.
        //   alert(error.message);
        // });
        this.db.collection('users').doc(this.userId).update({
            name: e + ': ' + this.email
        });
        this.texttt = e + ': ' + this.email;
        if (this.texttt.length > 26)
            this.textt = this.texttt.substring(0, 25) + "...";
        else
            this.textt = this.texttt;
    };
    SettingsComponent.prototype.g = function () {
        this.open = false;
    };
    SettingsComponent.prototype.clear = function () {
        var val = confirm("Clear " + this.texttt + "'s chat");
        if (val) {
            this.fire.object('messages/' + this.userId + '/' + this.userId).remove();
            alert('Cleared');
        }
    };
    SettingsComponent.prototype.add = function () {
        var time = firebase_app__WEBPACK_IMPORTED_MODULE_1__["database"].ServerValue.TIMESTAMP;
        this.fire.object('ffriend/' + this.userId + '/' + this.userId).set({
            userId: this.userId,
            time: time
        });
        this.fire.object('fffriend/' + this.userId + '/' + this.userId).set({
            userId: this.userId,
            time: time
        });
    };
    SettingsComponent.prototype.remove = function () {
        this.fire.object('ffriend/' + this.userId + '/' + this.userId).remove();
        this.fire.object('fffriend/' + this.userId + '/' + this.userId).remove();
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/their-communities/their-communities.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/their-communities/their-communities.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZWlyLWNvbW11bml0aWVzL3RoZWlyLWNvbW11bml0aWVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/their-communities/their-communities.component.html":
/*!********************************************************************!*\
  !*** ./src/app/their-communities/their-communities.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n  <i class=\"fa fa-warehouse it green\" title=\"Channels\"></i>\n  <a class=\"bold\" (click)=\"open=true\">{{namee}}</a>\n</div>\n<div *ngIf=\"open\" class=\"page fixed index bottom top lef rit black\" (click)=\"g()\">\n</div>\n<div *ngIf=\"open\" class=\"fixed index bottom\" (click)=\"g()\">\n    <a href=\"/home/chat/{{friendId}}/{{name}}#bottom\" class=\"design left bo dess download\" title=\"Chat\">\n        <i class=\"fa fa-comment gree do\"></i>            \n    </a>\n    <button class=\"box design des\" title=\"Forum\" routerLink=\"/home/forum/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-mail-bulk\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Profile\" routerLink=\"/home/profile/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-user-tie\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Wall\" routerLink=\"/home/wall/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-user-secret\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Following parties' inbox\" routerLink=\"/home/followingPartiesInbox/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-envelope\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Following people' status\" routerLink=\"/home/followingPeopleStatus/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-tv\"></i>            \n    </button>\n    <button class=\"box design des\" routerLink=\"/home/friends/{{friendId}}/{{name}}\" title=\"Friends\">\n        <i class=\"fa fa-user-friends\"></i>        \n    </button>\n    <button class=\"box design des\" title=\"Channels\" routerLink=\"/home/channels/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-warehouse\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Display picture\" routerLink=\"/home/displayPicture/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-portrait\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"box design des\" title=\"Follow\" (click)=\"add()\" >\n        <i class=\"fa fa-user-plus\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"box design des\" title=\"Unfollow\" (click)=\"remove()\">\n        <i class=\"fa fa-user-minus\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"design box des\" title=\"Clear chat\" (click)=\"clear()\">\n            <i class=\"fa fa-trash-alt\"></i>\n        </button>\n</div>\n<div class=\"pos fixed bottom lef\">\n  <input  class=\"inpu full black write\" [(ngModel)]=\"searchTerm\">\n</div>\n<div class=\"fixed full fix\">\n    <button title=\"Following\" [class.design]=\"!thi\"  [class.white]=\"thi\" (click)=\"that=false; thi=true;\" class=\"des half\">\n        <i class=\"fa fa-user-check\"></i>\n    </button>\n    <button title=\"Followers\" [class.white]=\"that\" [class.design]=\"!that\" (click)=\"thi=false; that=true\" class=\"des half\">\n        <i class=\"fa fa-user-times\"></i>\n    </button>\n    </div>\n  <div class=\"spas space\" *ngIf=\"that\">\n  <div *ngFor=\"let fffriend of fffriends | async | reverse\">\n      <div *ngFor=\"let user of users | async | filter:searchTerm\">\n      <div class=\"spac write writ\" *ngIf=\"user.channelId === fffriend.userId\">\n    <a href=\"/home/partyChat/{{user.channelId}}/{{user.name}}#bottom\" class=\"bold\">{{user.name}}</a>\n    <div class=\"right it\">{{user.time | date:\"EEEE, MMMM d, y 'at' h:mm a\"}}</div>\n    <div class=\"clear\"></div>\n    </div>\n  </div>\n  </div>\n</div>\n<div class=\"spas space\" *ngIf=\"thi\">\n  <div *ngFor=\"let ffriend of ffriends | async | reverse\">\n      <div *ngFor=\"let user of users | async | filter:searchTerm\">\n      <div class=\"spac write writ\" *ngIf=\"user.channelId === ffriend.userId\">\n    <a href=\"/home/partyChat/{{user.channelId}}/{{user.name}}#bottom\" class=\"bold\">{{user.name}}</a>\n    <div class=\"right it\">{{user.time | date:\"EEEE, MMMM d, y 'at' h:mm a\"}}</div>\n    <div class=\"clear\"></div>\n    </div>\n  </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/their-communities/their-communities.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/their-communities/their-communities.component.ts ***!
  \******************************************************************/
/*! exports provided: TheirCommunitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheirCommunitiesComponent", function() { return TheirCommunitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TheirCommunitiesComponent = /** @class */ (function () {
    function TheirCommunitiesComponent(route, fire, auth) {
        this.route = route;
        this.fire = fire;
        this.auth = auth;
    }
    TheirCommunitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
        });
        this.friendId = this.route.snapshot.paramMap.get('id');
        this.name = this.route.snapshot.paramMap.get('name');
        if (this.name.length > 26)
            this.namee = this.name.substring(0, 25) + "...";
        else
            this.namee = this.name;
        this.thi = true;
        this.users = this.fire.list('party', function (ref) { return ref.orderByChild('show').equalTo(true); }).valueChanges();
        this.ffriends = this.fire.list('gfriend/' + this.friendId, function (ref) { return ref.orderByChild('time'); }).valueChanges();
        this.fffriends = this.fire.list('ifriend/' + this.friendId, function (ref) { return ref.orderByChild('time'); }).valueChanges();
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
    };
    TheirCommunitiesComponent.prototype.g = function () {
        this.open = false;
    };
    TheirCommunitiesComponent.prototype.clear = function () {
        var val = confirm("Clear " + this.name + "'s chat");
        if (val) {
            this.fire.object('messages/' + this.userId + '/' + this.friendId).remove();
            this.fire.object('inbox/' + this.friendId + '/' + this.userId).remove();
            alert('Cleared');
        }
    };
    TheirCommunitiesComponent.prototype.add = function () {
        var time = firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"].ServerValue.TIMESTAMP;
        this.fire.object('ffriend/' + this.userId + '/' + this.friendId).set({
            userId: this.friendId,
            time: time
        });
        this.fire.object('fffriend/' + this.friendId + '/' + this.userId).set({
            userId: this.userId,
            time: time
        });
    };
    TheirCommunitiesComponent.prototype.remove = function () {
        this.fire.object('ffriend/' + this.userId + '/' + this.friendId).remove();
        this.fire.object('fffriend/' + this.friendId + '/' + this.userId).remove();
    };
    TheirCommunitiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-their-communities',
            template: __webpack_require__(/*! ./their-communities.component.html */ "./src/app/their-communities/their-communities.component.html"),
            styles: [__webpack_require__(/*! ./their-communities.component.css */ "./src/app/their-communities/their-communities.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], TheirCommunitiesComponent);
    return TheirCommunitiesComponent;
}());



/***/ }),

/***/ "./src/app/their-created-channels/their-created-channels.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/their-created-channels/their-created-channels.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZWlyLWNyZWF0ZWQtY2hhbm5lbHMvdGhlaXItY3JlYXRlZC1jaGFubmVscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/their-created-channels/their-created-channels.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/their-created-channels/their-created-channels.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n  <i class=\"fa fa-mail-bulk it green\" title=\"Forum\"></i>\n  <a class=\"bold\" (click)=\"open=true\">{{namee}}</a>\n</div>\n<div *ngIf=\"open\" class=\"page fixed index bottom top lef rit black\" (click)=\"g()\">\n</div>\n<div *ngIf=\"open\" class=\"fixed index bottom\" (click)=\"g()\">\n    <a href=\"/home/chat/{{friendId}}/{{name}}#bottom\" class=\"design left bo dess download\" title=\"Chat\">\n        <i class=\"fa fa-comment gree do\"></i>            \n    </a>\n    <button class=\"box design des\" title=\"Forum\" routerLink=\"/home/forum/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-mail-bulk\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Profile\" routerLink=\"/home/profile/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-user-tie\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Wall\" routerLink=\"/home/wall/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-user-secret\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Following parties' inbox\" routerLink=\"/home/followingPartiesInbox/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-envelope\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Following people' status\" routerLink=\"/home/followingPeopleStatus/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-tv\"></i>            \n    </button>\n    <button class=\"box design des\" routerLink=\"/home/friends/{{friendId}}/{{name}}\" title=\"Friends\">\n        <i class=\"fa fa-user-friends\"></i>        \n    </button>\n    <button class=\"box design des\" title=\"Channels\" routerLink=\"/home/channels/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-warehouse\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Display picture\" routerLink=\"/home/displayPicture/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-portrait\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"box design des\" title=\"Follow\" (click)=\"add()\" >\n        <i class=\"fa fa-user-plus\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"box design des\" title=\"Unfollow\" (click)=\"remove()\">\n        <i class=\"fa fa-user-minus\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"design box des\" title=\"Clear chat\" (click)=\"clear()\">\n        <i class=\"fa fa-trash-alt\"></i>\n    </button>\n</div>\n<div class=\"spa space\">\n<div class=\"spac writ\" *ngFor=\"let message of messages | async | reverse | filter:searchTerm\">\n  <div class=\"write\">\n  <a href=\"/home/partyChat/{{message.channelId}}/{{message.name}}#bottom\" class=\"bold\">{{message.name}}</a>\n  <div class=\"right it\">{{message.time| date:\"EEEE, MMMM d, y 'at' h:mm a\"}}</div>\n  <div class=\"clear\"></div>\n  </div>\n</div> \n</div>\n<div class=\"pos fixed bottom lef\">\n  <input class=\"inpu full black write\" [(ngModel)]=\"searchTerm\">\n</div>\n\n"

/***/ }),

/***/ "./src/app/their-created-channels/their-created-channels.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/their-created-channels/their-created-channels.component.ts ***!
  \****************************************************************************/
/*! exports provided: TheirCreatedChannelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheirCreatedChannelsComponent", function() { return TheirCreatedChannelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TheirCreatedChannelsComponent = /** @class */ (function () {
    function TheirCreatedChannelsComponent(route, auth, fire) {
        this.route = route;
        this.auth = auth;
        this.fire = fire;
    }
    TheirCreatedChannelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
        });
        this.friendId = this.route.snapshot.paramMap.get('id');
        this.name = this.route.snapshot.paramMap.get('name');
        if (this.name.length > 26)
            this.namee = this.name.substring(0, 25) + "...";
        else
            this.namee = this.name;
        this.messages = this.fire.list('created/' + this.friendId, function (ref) { return ref.orderByChild('show').equalTo(true); }).valueChanges();
    };
    TheirCreatedChannelsComponent.prototype.g = function () {
        this.open = false;
    };
    TheirCreatedChannelsComponent.prototype.clear = function () {
        var val = confirm("Clear " + this.name + "'s chat");
        if (val) {
            this.fire.object('messages/' + this.userId + '/' + this.friendId).remove();
            this.fire.object('inbox/' + this.friendId + '/' + this.userId).remove();
            alert('Cleared');
        }
    };
    TheirCreatedChannelsComponent.prototype.add = function () {
        var time = firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"].ServerValue.TIMESTAMP;
        this.fire.object('ffriend/' + this.userId + '/' + this.friendId).set({
            userId: this.friendId,
            time: time
        });
        this.fire.object('fffriend/' + this.friendId + '/' + this.userId).set({
            userId: this.userId,
            time: time
        });
    };
    TheirCreatedChannelsComponent.prototype.remove = function () {
        this.fire.object('ffriend/' + this.userId + '/' + this.friendId).remove();
        this.fire.object('fffriend/' + this.friendId + '/' + this.userId).remove();
    };
    TheirCreatedChannelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-their-created-channels',
            template: __webpack_require__(/*! ./their-created-channels.component.html */ "./src/app/their-created-channels/their-created-channels.component.html"),
            styles: [__webpack_require__(/*! ./their-created-channels.component.css */ "./src/app/their-created-channels/their-created-channels.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], TheirCreatedChannelsComponent);
    return TheirCreatedChannelsComponent;
}());



/***/ }),

/***/ "./src/app/their-diplay-picture/their-diplay-picture.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/their-diplay-picture/their-diplay-picture.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZWlyLWRpcGxheS1waWN0dXJlL3RoZWlyLWRpcGxheS1waWN0dXJlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/their-diplay-picture/their-diplay-picture.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/their-diplay-picture/their-diplay-picture.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n  <i class=\"fa fa-portrait it green\" title=\"Display picture\"></i>\n  <a class=\"bold\" (click)=\"open=true\">{{namee}}</a>\n</div>\n<div *ngIf=\"open\" class=\"page fixed index bottom top lef rit black\" (click)=\"g()\">\n</div>\n<div *ngIf=\"open\" class=\"fixed index bottom\" (click)=\"g()\">\n        <a href=\"/home/chat/{{friendId}}/{{name}}#bottom\" class=\"design left bo dess download\" title=\"Chat\">\n            <i class=\"fa fa-comment gree do\"></i>            \n        </a>\n    <button class=\"box design des\" title=\"Forum\" routerLink=\"/home/forum/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-mail-bulk\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Profile\" routerLink=\"/home/profile/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-user-tie\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Wall\" routerLink=\"/home/wall/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-user-secret\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Following parties' inbox\" routerLink=\"/home/followingPartiesInbox/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-envelope\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Following people' status\" routerLink=\"/home/followingPeopleStatus/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-tv\"></i>            \n    </button>\n    <button class=\"box design des\" routerLink=\"/home/friends/{{friendId}}/{{name}}\" title=\"Friends\">\n        <i class=\"fa fa-user-friends\"></i>        \n    </button>\n    <button class=\"box design des\" title=\"Channels\" routerLink=\"/home/channels/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-warehouse\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Display picture\" routerLink=\"/home/displayPicture/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-portrait\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"box design des\" title=\"Follow\" (click)=\"add()\" >\n        <i class=\"fa fa-user-plus\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"box design des\" title=\"Unfollow\" (click)=\"remove()\">\n        <i class=\"fa fa-user-minus\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"design box des\" title=\"Clear chat\" (click)=\"clear()\">\n        <i class=\"fa fa-trash-alt\"></i>\n    </button>\n</div>\n<div class=\"sp\">\n    <div class=\"write\">\n        {{text}}\n        <br>\n  <a [href]=\"url\" *ngIf=\"url\" download class=\"design left bo dess download\" title=\"Download file\">\n    <i class=\"fa fa-download gree do\"></i>\n  </a>\n  <div class=\"clear\"></div>\n  </div>\n<img *ngIf=\"ext === 'jpg' || ext === 'png' || ext === 'gif'\" [src]=\"url\">    \n  <video *ngIf=\"ext === 'mp4'\" controls>\n    <source [src]=\"url\" type=\"video/mp4\">\n</video>\n<audio *ngIf=\"ext === 'mp3'\" controls>\n    <source [src]=\"url\" type=\"audio/mp3\">\n</audio>\n<i *ngIf=\"ext && ext !== 'mp3' && ext !== 'mp4' && ext !== 'jpg' && ext !== 'png' && ext !== 'gif'\" class=\"fa fa-5x fa-file\"></i>\n\n</div>"

/***/ }),

/***/ "./src/app/their-diplay-picture/their-diplay-picture.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/their-diplay-picture/their-diplay-picture.component.ts ***!
  \************************************************************************/
/*! exports provided: TheirDiplayPictureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheirDiplayPictureComponent", function() { return TheirDiplayPictureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TheirDiplayPictureComponent = /** @class */ (function () {
    function TheirDiplayPictureComponent(route, fire, auth, db) {
        this.route = route;
        this.fire = fire;
        this.auth = auth;
        this.db = db;
    }
    TheirDiplayPictureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
        });
        this.friendId = this.route.snapshot.paramMap.get('id');
        this.name = this.route.snapshot.paramMap.get('name');
        if (this.name.length > 26)
            this.namee = this.name.substring(0, 25) + "...";
        else
            this.namee = this.name;
        this.db.doc('user/' + this.friendId).get().subscribe(function (snapshot) {
            _this.text = snapshot.data().name;
            _this.url = snapshot.data().url;
            _this.ext = snapshot.data().ext;
        });
    };
    TheirDiplayPictureComponent.prototype.g = function () {
        this.open = false;
    };
    TheirDiplayPictureComponent.prototype.clear = function () {
        var val = confirm("Clear " + this.name + "'s chat");
        if (val) {
            this.fire.object('messages/' + this.userId + '/' + this.friendId).remove();
            this.fire.object('inbox/' + this.friendId + '/' + this.userId).remove();
            alert('Cleared');
        }
    };
    TheirDiplayPictureComponent.prototype.add = function () {
        var time = firebase_app__WEBPACK_IMPORTED_MODULE_5__["database"].ServerValue.TIMESTAMP;
        this.fire.object('ffriend/' + this.userId + '/' + this.friendId).set({
            userId: this.friendId,
            time: time
        });
        this.fire.object('fffriend/' + this.friendId + '/' + this.userId).set({
            userId: this.userId,
            time: time
        });
    };
    TheirDiplayPictureComponent.prototype.remove = function () {
        this.fire.object('ffriend/' + this.userId + '/' + this.friendId).remove();
        this.fire.object('fffriend/' + this.friendId + '/' + this.userId).remove();
    };
    TheirDiplayPictureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-their-diplay-picture',
            template: __webpack_require__(/*! ./their-diplay-picture.component.html */ "./src/app/their-diplay-picture/their-diplay-picture.component.html"),
            styles: [__webpack_require__(/*! ./their-diplay-picture.component.css */ "./src/app/their-diplay-picture/their-diplay-picture.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], TheirDiplayPictureComponent);
    return TheirDiplayPictureComponent;
}());



/***/ }),

/***/ "./src/app/their-following-channels-inbox/their-following-channels-inbox.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/their-following-channels-inbox/their-following-channels-inbox.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZWlyLWZvbGxvd2luZy1jaGFubmVscy1pbmJveC90aGVpci1mb2xsb3dpbmctY2hhbm5lbHMtaW5ib3guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/their-following-channels-inbox/their-following-channels-inbox.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/their-following-channels-inbox/their-following-channels-inbox.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n  <i class=\"fa fa-envelope it green\" title=\"Following parties' inbox\"></i>\n  <a class=\"bold\" (click)=\"open=true\">{{namee}}</a>\n</div>\n<div *ngIf=\"open\" class=\"page fixed index bottom top lef rit black\" (click)=\"g()\">\n</div>\n<div *ngIf=\"open\" class=\"fixed index bottom\" (click)=\"g()\">\n    <a href=\"/home/chat/{{friendId}}/{{name}}#bottom\" class=\"design left bo dess download\" title=\"Chat\">\n        <i class=\"fa fa-comment gree do\"></i>            \n    </a>\n    <button class=\"box design des\" title=\"Forum\" routerLink=\"/home/forum/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-mail-bulk\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Profile\" routerLink=\"/home/profile/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-user-tie\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Wall\" routerLink=\"/home/wall/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-user-secret\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Following parties' inbox\" routerLink=\"/home/followingPartiesInbox/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-envelope\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Following people' status\" routerLink=\"/home/followingPeopleStatus/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-tv\"></i>            \n    </button>\n    <button class=\"box design des\" routerLink=\"/home/friends/{{friendId}}/{{name}}\" title=\"Friends\">\n        <i class=\"fa fa-user-friends\"></i>        \n    </button>\n    <button class=\"box design des\" title=\"Channels\" routerLink=\"/home/channels/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-warehouse\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Display picture\" routerLink=\"/home/displayPicture/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-portrait\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"box design des\" title=\"Follow\" (click)=\"add()\" >\n        <i class=\"fa fa-user-plus\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"box design des\" title=\"Unfollow\" (click)=\"remove()\">\n        <i class=\"fa fa-user-minus\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"design box des\" title=\"Clear chat\" (click)=\"clear()\">\n        <i class=\"fa fa-trash-alt\"></i>\n    </button>\n</div>\n<div class=\"spa space\">\n<div *ngFor=\"let friend of friends | async | reverse\">  \n  <div *ngFor=\"let message of messages | async | filter:searchTerm\">\n    <div class=\"spac writ\" *ngIf=\"message.channelId === friend.userId\">\n<div class=\"write\">\n  <a href=\"/home/partyChat/{{message.channelId}}/{{message.name}}#bottom\" class=\"bold\">{{message.name}}</a>\n<br>\n{{message.text}}\n<div class=\"right it\">{{message.time | date:\"EEEE, MMMM d, y 'at' h:mm a\"}}</div>\n<div class=\"clear\"></div>\n<a [href]=\"message.url\" *ngIf=\"message.ext\" download class=\"design left bo dess download\" title=\"Download file\">\n  <i class=\"fa fa-download gree do\"></i>\n</a>\n<div class=\"clear\"></div>\n</div>\n<img *ngIf=\"message.ext === 'jpg' || message.ext === 'png' || message.ext === 'gif'\" [src]=\"message.url\">    \n<video *ngIf=\"message.ext === 'mp4'\" controls>\n  <source [src]=\"message.url\" type=\"video/mp4\">\n</video>\n<audio *ngIf=\"message.ext === 'mp3'\" controls>\n  <source [src]=\"message.url\" type=\"audio/mp3\">\n</audio>\n<i *ngIf=\"message.ext && message.ext !== 'mp3' && message.ext !== 'mp4' && message.ext !== 'jpg' && message.ext !== 'png' && message.ext !== 'gif'\" class=\"fa fa-5x fa-file\"></i>\n</div>\n</div>\n</div>\n</div>\n<div class=\"pos fixed bottom lef\">\n  <input [(ngModel)]=\"searchTerm\" class=\"inpu full black write\">\n  </div>"

/***/ }),

/***/ "./src/app/their-following-channels-inbox/their-following-channels-inbox.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/their-following-channels-inbox/their-following-channels-inbox.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TheirFollowingChannelsInboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheirFollowingChannelsInboxComponent", function() { return TheirFollowingChannelsInboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TheirFollowingChannelsInboxComponent = /** @class */ (function () {
    function TheirFollowingChannelsInboxComponent(route, fire, auth) {
        this.route = route;
        this.fire = fire;
        this.auth = auth;
    }
    TheirFollowingChannelsInboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
        });
        this.friendId = this.route.snapshot.paramMap.get('id');
        this.name = this.route.snapshot.paramMap.get('name');
        if (this.name.length > 26)
            this.namee = this.name.substring(0, 25) + "...";
        else
            this.namee = this.name;
        this.messages = this.fire.list('ginbox', function (ref) { return ref.orderByChild('show').equalTo(true); }).valueChanges();
        this.friends = this.fire.list('gfriend/' + this.friendId, function (ref) { return ref.orderByChild('time'); }).valueChanges();
    };
    TheirFollowingChannelsInboxComponent.prototype.g = function () {
        this.open = false;
    };
    TheirFollowingChannelsInboxComponent.prototype.clear = function () {
        var val = confirm("Clear " + this.name + "'s chat");
        if (val) {
            this.fire.object('messages/' + this.userId + '/' + this.friendId).remove();
            this.fire.object('inbox/' + this.friendId + '/' + this.userId).remove();
            alert('Cleared');
        }
    };
    TheirFollowingChannelsInboxComponent.prototype.add = function () {
        var time = firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"].ServerValue.TIMESTAMP;
        this.fire.object('ffriend/' + this.userId + '/' + this.friendId).set({
            userId: this.friendId,
            time: time
        });
        this.fire.object('fffriend/' + this.friendId + '/' + this.userId).set({
            userId: this.userId,
            time: time
        });
    };
    TheirFollowingChannelsInboxComponent.prototype.remove = function () {
        this.fire.object('ffriend/' + this.userId + '/' + this.friendId).remove();
        this.fire.object('fffriend/' + this.friendId + '/' + this.userId).remove();
    };
    TheirFollowingChannelsInboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-their-following-channels-inbox',
            template: __webpack_require__(/*! ./their-following-channels-inbox.component.html */ "./src/app/their-following-channels-inbox/their-following-channels-inbox.component.html"),
            styles: [__webpack_require__(/*! ./their-following-channels-inbox.component.css */ "./src/app/their-following-channels-inbox/their-following-channels-inbox.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], TheirFollowingChannelsInboxComponent);
    return TheirFollowingChannelsInboxComponent;
}());



/***/ }),

/***/ "./src/app/their-following-people-status/their-following-people-status.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/their-following-people-status/their-following-people-status.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZWlyLWZvbGxvd2luZy1wZW9wbGUtc3RhdHVzL3RoZWlyLWZvbGxvd2luZy1wZW9wbGUtc3RhdHVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/their-following-people-status/their-following-people-status.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/their-following-people-status/their-following-people-status.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n  <i class=\"fa fa-tv it green\" title=\"Following people' status\"></i>\n  <a class=\"bold\" (click)=\"open=true\">{{namee}}</a>\n</div>\n<div *ngIf=\"open\" class=\"page fixed index bottom top lef rit black\" (click)=\"g()\">\n</div>\n<div *ngIf=\"open\" class=\"fixed index bottom\" (click)=\"g()\">\n    <a href=\"/home/chat/{{friendId}}/{{name}}#bottom\" class=\"design left bo dess download\" title=\"Chat\">\n        <i class=\"fa fa-comment gree do\"></i>            \n    </a>\n    <button class=\"box design des\" title=\"Forum\" routerLink=\"/home/forum/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-mail-bulk\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Profile\" routerLink=\"/home/profile/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-user-tie\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Wall\" routerLink=\"/home/wall/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-user-secret\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Following parties' inbox\" routerLink=\"/home/followingPartiesInbox/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-envelope\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Following people' status\" routerLink=\"/home/followingPeopleStatus/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-tv\"></i>            \n    </button>\n    <button class=\"box design des\" routerLink=\"/home/friends/{{friendId}}/{{name}}\" title=\"Friends\">\n        <i class=\"fa fa-user-friends\"></i>        \n    </button>\n    <button class=\"box design des\" title=\"Channels\" routerLink=\"/home/channels/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-warehouse\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Display picture\" routerLink=\"/home/displayPicture/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-portrait\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"box design des\" title=\"Follow\" (click)=\"add()\" >\n        <i class=\"fa fa-user-plus\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"box design des\" title=\"Unfollow\" (click)=\"remove()\">\n        <i class=\"fa fa-user-minus\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"design box des\" title=\"Clear chat\" (click)=\"clear()\">\n        <i class=\"fa fa-trash-alt\"></i>\n    </button>\n</div>\n<div class=\"spa space\">\n<div *ngFor=\"let friend of friends | async | reverse\">  \n  <div *ngFor=\"let message of messages | async | filter:searchTerm\" [class.me]=\"message.userId === userId\">\n    <div class=\"spac writ\" *ngIf=\"message.userId === friend.userId\">\n<div class=\"write\">\n  <a href=\"/home/chat/{{message.userId}}/{{message.name}}#bottom\" class=\"bold\">{{message.name}}</a>\n<br>\n{{message.text}}\n<div class=\"right it\">{{message.time | date:\"EEEE, MMMM d, y 'at' h:mm a\"}}</div>\n<div class=\"clear\"></div>\n<a [href]=\"message.url\" *ngIf=\"message.ext\" download class=\"design left bo dess download\" title=\"Download file\">\n  <i class=\"fa fa-download gree do\"></i>\n</a>\n<div class=\"clear\"></div>\n</div>\n<img *ngIf=\"message.ext === 'jpg' || message.ext === 'png' || message.ext === 'gif'\" [src]=\"message.url\">    \n<video *ngIf=\"message.ext === 'mp4'\" controls>\n  <source [src]=\"message.url\" type=\"video/mp4\">\n</video>\n<audio *ngIf=\"message.ext === 'mp3'\" controls>\n  <source [src]=\"message.url\" type=\"audio/mp3\">\n</audio>\n<i *ngIf=\"message.ext && message.ext !== 'mp3' && message.ext !== 'mp4' && message.ext !== 'jpg' && message.ext !== 'png' && message.ext !== 'gif'\" class=\"fa fa-5x fa-file\"></i>\n</div>\n</div>\n</div>\n</div>\n<div class=\"pos fixed bottom lef\">\n  <input [(ngModel)]=\"searchTerm\" class=\"inpu full black write\">\n  </div>"

/***/ }),

/***/ "./src/app/their-following-people-status/their-following-people-status.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/their-following-people-status/their-following-people-status.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TheirFollowingPeopleStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheirFollowingPeopleStatusComponent", function() { return TheirFollowingPeopleStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TheirFollowingPeopleStatusComponent = /** @class */ (function () {
    function TheirFollowingPeopleStatusComponent(route, fire, auth) {
        this.route = route;
        this.fire = fire;
        this.auth = auth;
    }
    TheirFollowingPeopleStatusComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
        });
        this.friendId = this.route.snapshot.paramMap.get('id');
        this.name = this.route.snapshot.paramMap.get('name');
        if (this.name.length > 26)
            this.namee = this.name.substring(0, 25) + "...";
        else
            this.namee = this.name;
        this.messages = this.fire.list('status').valueChanges();
        this.friends = this.fire.list('ffriend/' + this.friendId, function (ref) { return ref.orderByChild('time'); }).valueChanges();
    };
    TheirFollowingPeopleStatusComponent.prototype.g = function () {
        this.open = false;
    };
    TheirFollowingPeopleStatusComponent.prototype.clear = function () {
        var val = confirm("Clear " + this.name + "'s chat");
        if (val) {
            this.fire.object('messages/' + this.userId + '/' + this.friendId).remove();
            this.fire.object('inbox/' + this.friendId + '/' + this.userId).remove();
            alert('Cleared');
        }
    };
    TheirFollowingPeopleStatusComponent.prototype.add = function () {
        var time = firebase_app__WEBPACK_IMPORTED_MODULE_3__["database"].ServerValue.TIMESTAMP;
        this.fire.object('ffriend/' + this.userId + '/' + this.friendId).set({
            userId: this.friendId,
            time: time
        });
        this.fire.object('fffriend/' + this.friendId + '/' + this.userId).set({
            userId: this.userId,
            time: time
        });
    };
    TheirFollowingPeopleStatusComponent.prototype.remove = function () {
        this.fire.object('ffriend/' + this.userId + '/' + this.friendId).remove();
        this.fire.object('fffriend/' + this.friendId + '/' + this.userId).remove();
    };
    TheirFollowingPeopleStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-their-following-people-status',
            template: __webpack_require__(/*! ./their-following-people-status.component.html */ "./src/app/their-following-people-status/their-following-people-status.component.html"),
            styles: [__webpack_require__(/*! ./their-following-people-status.component.css */ "./src/app/their-following-people-status/their-following-people-status.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
    ], TheirFollowingPeopleStatusComponent);
    return TheirFollowingPeopleStatusComponent;
}());



/***/ }),

/***/ "./src/app/their-friends/their-friends.component.css":
/*!***********************************************************!*\
  !*** ./src/app/their-friends/their-friends.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZWlyLWZyaWVuZHMvdGhlaXItZnJpZW5kcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/their-friends/their-friends.component.html":
/*!************************************************************!*\
  !*** ./src/app/their-friends/their-friends.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n  <i class=\"fa fa-user-friends it green\" title=\"Friends\"></i>\n  <a class=\"bold\" (click)=\"open=true\">{{namee}}</a>\n</div>\n<div *ngIf=\"open\" class=\"page fixed index bottom top lef rit black\" (click)=\"g()\">\n</div>\n<div *ngIf=\"open\" class=\"fixed index bottom\" (click)=\"g()\">\n    <a href=\"/home/chat/{{friendId}}/{{name}}#bottom\" class=\"design left bo dess download\" title=\"Chat\">\n        <i class=\"fa fa-comment gree do\"></i>            \n    </a>\n    <button class=\"box design des\" title=\"Forum\" routerLink=\"/home/forum/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-mail-bulk\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Profile\" routerLink=\"/home/profile/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-user-tie\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Wall\" routerLink=\"/home/wall/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-user-secret\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Following parties' inbox\" routerLink=\"/home/followingPartiesInbox/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-envelope\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Following people' status\" routerLink=\"/home/followingPeopleStatus/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-tv\"></i>            \n    </button>\n    <button class=\"box design des\" routerLink=\"/home/friends/{{friendId}}/{{name}}\" title=\"Friends\">\n        <i class=\"fa fa-user-friends\"></i>        \n    </button>\n    <button class=\"box design des\" title=\"Channels\" routerLink=\"/home/channels/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-warehouse\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Display picture\" routerLink=\"/home/displayPicture/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-portrait\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"box design des\" title=\"Follow\" (click)=\"add()\" >\n        <i class=\"fa fa-user-plus\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"box design des\" title=\"Unfollow\" (click)=\"remove()\">\n        <i class=\"fa fa-user-minus\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"design box des\" title=\"Clear chat\" (click)=\"clear()\">\n        <i class=\"fa fa-trash-alt\"></i>\n    </button>\n</div>\n<div class=\"pos fixed bottom lef\">\n  <input  class=\"inpu full black write\" [(ngModel)]=\"searchTerm\">\n</div>\n<div class=\"fixed full fix\">\n    <button title=\"Following\" [class.design]=\"!thi\"  [class.white]=\"thi\" (click)=\"that=false; thi=true;\" class=\"des half\">\n        <i class=\"fa fa-user-check\"></i>\n    </button>\n    <button title=\"Followers\" [class.white]=\"that\" [class.design]=\"!that\" (click)=\"thi=false; that=true\" class=\"des half\">\n        <i class=\"fa fa-user-times\"></i>\n    </button>\n    </div>\n  <div class=\"spas space\" *ngIf=\"that\">\n  <div *ngFor=\"let fffriend of fffriends | async | reverse\">\n    <div *ngFor=\"let user of users | async | filter:searchTerm\" [class.me]=\"user.userId === userId\">\n      <div class=\"spac write writ\" *ngIf=\"user.userId === fffriend.userId\">\n    <a href=\"/home/chat/{{user.userId}}/{{user.name}}#bottom\" class=\"bold\">{{user.name}}</a>\n    </div>\n  </div>\n  </div>\n</div>\n<div class=\"spas space\" *ngIf=\"thi\">\n    <div *ngFor=\"let ffriend of ffriends | async | reverse\">\n    <div *ngFor=\"let user of users | async | filter:searchTerm\" [class.me]=\"message.userId === userId\">\n      <div class=\"spac write writ\" *ngIf=\"user.userId === ffriend.userId\">\n    <a href=\"/home/chat/{{user.userId}}/{{user.name}}#bottom\" class=\"bold\">{{user.name}}</a>\n    </div>\n  </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/their-friends/their-friends.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/their-friends/their-friends.component.ts ***!
  \**********************************************************/
/*! exports provided: TheirFriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheirFriendsComponent", function() { return TheirFriendsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TheirFriendsComponent = /** @class */ (function () {
    function TheirFriendsComponent(route, fire, auth, db) {
        this.route = route;
        this.fire = fire;
        this.auth = auth;
        this.db = db;
    }
    TheirFriendsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
        });
        this.friendId = this.route.snapshot.paramMap.get('id');
        this.name = this.route.snapshot.paramMap.get('name');
        if (this.name.length > 26)
            this.namee = this.name.substring(0, 25) + "...";
        else
            this.namee = this.name;
        this.thi = true;
        this.users = this.db.collection('users').valueChanges();
        this.ffriends = this.fire.list('ffriend/' + this.friendId, function (ref) { return ref.orderByChild('time'); }).valueChanges();
        this.fffriends = this.fire.list('fffriend/' + this.friendId, function (ref) { return ref.orderByChild('time'); }).valueChanges();
    };
    TheirFriendsComponent.prototype.g = function () {
        this.open = false;
    };
    TheirFriendsComponent.prototype.clear = function () {
        var val = confirm("Clear " + this.name + "'s chat");
        if (val) {
            this.fire.object('messages/' + this.userId + '/' + this.friendId).remove();
            this.fire.object('inbox/' + this.friendId + '/' + this.userId).remove();
            alert('Cleared');
        }
    };
    TheirFriendsComponent.prototype.add = function () {
        var time = firebase_app__WEBPACK_IMPORTED_MODULE_5__["database"].ServerValue.TIMESTAMP;
        this.fire.object('ffriend/' + this.userId + '/' + this.friendId).set({
            userId: this.friendId,
            time: time
        });
        this.fire.object('fffriend/' + this.friendId + '/' + this.userId).set({
            userId: this.userId,
            time: time
        });
    };
    TheirFriendsComponent.prototype.remove = function () {
        this.fire.object('ffriend/' + this.userId + '/' + this.friendId).remove();
        this.fire.object('fffriend/' + this.friendId + '/' + this.userId).remove();
    };
    TheirFriendsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-their-friends',
            template: __webpack_require__(/*! ./their-friends.component.html */ "./src/app/their-friends/their-friends.component.html"),
            styles: [__webpack_require__(/*! ./their-friends.component.css */ "./src/app/their-friends/their-friends.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], TheirFriendsComponent);
    return TheirFriendsComponent;
}());



/***/ }),

/***/ "./src/app/their-gallery/their-gallery.component.css":
/*!***********************************************************!*\
  !*** ./src/app/their-gallery/their-gallery.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZWlyLWdhbGxlcnkvdGhlaXItZ2FsbGVyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/their-gallery/their-gallery.component.html":
/*!************************************************************!*\
  !*** ./src/app/their-gallery/their-gallery.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n  <i class=\"fa fa-user-clock it green\" title=\"Gallery\"></i>\n  <a class=\"bold\" (click)=\"open=true\">\n      {{namee}}\n    </a>\n    </div>\n    <div *ngIf=\"open\" class=\"page fixed index bottom top lef rit black\" (click)=\"g()\">\n    </div>\n    <div *ngIf=\"open\" class=\"fixed index bottom\" (click)=\"g()\">\n      <a href=\"/home/partyChat/{{friendId}}/{{name}}#bottom\" class=\"design left bo dess download\" title=\"Party chat\">\n        <i class=\"fa fa-comments gree do\"></i>            \n      </a>      \n      <button class=\"box design des\" title=\"Wall\" routerLink=\"/home/partyWall/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-user-secret\"></i>            \n      </button>\n      <button class=\"box design des\" title=\"Gallery\" routerLink=\"/home/partyGallery/{{friendId}}/{{name}}\">\n          <i class=\"fa fa-user-clock\"></i>            \n      </button>\n      <button class=\"box design des\" title=\"Display picture\" routerLink=\"/home/partyDisplayPicture/{{friendId}}/{{name}}\">\n          <i class=\"fa fa-portrait\"></i>            \n      </button>\n      <button class=\"box design des\" routerLink=\"/home/fanPage/{{friendId}}/{{name}}\" title=\"Fan page\">\n        <i class=\"fa fa-user-circle\"></i>        \n      </button>\n      <button [disabled]=\"!userId\" class=\"box design des\" title=\"Follow\" (click)=\"add()\" >\n          <i class=\"fa fa-user-plus\"></i>            \n      </button>\n      <button [disabled]=\"!userId\" class=\"box design des\" title=\"Unfollow\" (click)=\"remove()\">\n          <i class=\"fa fa-user-minus\"></i>            \n      </button>\n    </div>\n<div class=\"spa space\">\n<div class=\"spac writ\" *ngFor=\"let message of messages | async | reverse | filter:searchTerm\">\n<div class=\"write\">\n{{message.name}}\n<div class=\"right it\">{{message.time | date:\"EEEE, MMMM d, y 'at' h:mm a\"}}</div>\n<div class=\"clear\"></div>\n<a [href]=\"message.url\" download class=\"design left bo dess download\" title=\"Download file\">\n  <i class=\"fa fa-download gree do\"></i>\n</a>\n<div class=\"clear\"></div>\n</div>\n<img *ngIf=\"message.ext === 'jpg' || message.ext === 'png' || message.ext === 'gif'\" [src]=\"message.url\">    \n<video *ngIf=\"message.ext === 'mp4'\" controls>\n  <source [src]=\"message.url\" type=\"video/mp4\">\n</video>\n<audio *ngIf=\"message.ext === 'mp3'\" controls>\n  <source [src]=\"message.url\" type=\"audio/mp3\">\n</audio>\n<i *ngIf=\"message.ext && message.ext !== 'mp3' && message.ext !== 'mp4' && message.ext !== 'jpg' && message.ext !== 'png' && message.ext !== 'gif'\" class=\"fa fa-5x fa-file\"></i>\n\n</div>\n</div>\n<div class=\"pos fixed bottom lef\">\n  <input [(ngModel)]=\"searchTerm\" class=\"inpu full black write\">\n  </div>"

/***/ }),

/***/ "./src/app/their-gallery/their-gallery.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/their-gallery/their-gallery.component.ts ***!
  \**********************************************************/
/*! exports provided: TheirGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheirGalleryComponent", function() { return TheirGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TheirGalleryComponent = /** @class */ (function () {
    function TheirGalleryComponent(route, auth, fire) {
        this.route = route;
        this.auth = auth;
        this.fire = fire;
    }
    TheirGalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
        });
        this.friendId = this.route.snapshot.paramMap.get('id');
        this.name = this.route.snapshot.paramMap.get('name');
        if (this.name.length > 26)
            this.namee = this.name.substring(0, 25) + "...";
        else
            this.namee = this.name;
        this.messages = this.fire.list('ggallery/' + this.friendId).valueChanges();
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
    };
    TheirGalleryComponent.prototype.g = function () {
        this.open = false;
    };
    TheirGalleryComponent.prototype.add = function () {
        var time = firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"].ServerValue.TIMESTAMP;
        this.fire.object('gfriend/' + this.userId + '/' + this.friendId).set({
            userId: this.friendId,
            time: time
        });
        this.fire.object('ggfriend/' + this.friendId + '/' + this.userId).set({
            userId: this.userId,
            time: time
        });
    };
    TheirGalleryComponent.prototype.remove = function () {
        this.fire.object('gfriend/' + this.userId + '/' + this.friendId).remove();
        this.fire.object('ggfriend/' + this.friendId + '/' + this.userId).remove();
    };
    TheirGalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-their-gallery',
            template: __webpack_require__(/*! ./their-gallery.component.html */ "./src/app/their-gallery/their-gallery.component.html"),
            styles: [__webpack_require__(/*! ./their-gallery.component.css */ "./src/app/their-gallery/their-gallery.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
    ], TheirGalleryComponent);
    return TheirGalleryComponent;
}());



/***/ }),

/***/ "./src/app/their-profile/their-profile.component.css":
/*!***********************************************************!*\
  !*** ./src/app/their-profile/their-profile.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZWlyLXByb2ZpbGUvdGhlaXItcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/their-profile/their-profile.component.html":
/*!************************************************************!*\
  !*** ./src/app/their-profile/their-profile.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n  <i class=\"fa fa-user-tie it green\" title=\"Profile\"></i>\n  <a class=\"bold\" (click)=\"open=true\">{{namee}}</a>\n</div>\n<div *ngIf=\"open\" class=\"page fixed index bottom top lef rit black\" (click)=\"g()\">\n</div>\n<div *ngIf=\"open\" class=\"fixed index bottom\" (click)=\"g()\">\n    <a href=\"/home/chat/{{friendId}}/{{name}}#bottom\" class=\"design left bo dess download\" title=\"Chat\">\n        <i class=\"fa fa-comment gree do\"></i>            \n    </a>\n    <button class=\"box design des\" title=\"Forum\" routerLink=\"/home/forum/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-mail-bulk\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Profile\" routerLink=\"/home/profile/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-user-tie\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Wall\" routerLink=\"/home/wall/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-user-secret\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Following parties' inbox\" routerLink=\"/home/followingPartiesInbox/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-envelope\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Following people' status\" routerLink=\"/home/followingPeopleStatus/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-tv\"></i>            \n    </button>\n    <button class=\"box design des\" routerLink=\"/home/friends/{{friendId}}/{{name}}\" title=\"Friends\">\n        <i class=\"fa fa-user-friends\"></i>        \n    </button>\n    <button class=\"box design des\" title=\"Channels\" routerLink=\"/home/channels/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-warehouse\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Display picture\" routerLink=\"/home/displayPicture/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-portrait\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"box design des\" title=\"Follow\" (click)=\"add()\" >\n        <i class=\"fa fa-user-plus\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"box design des\" title=\"Unfollow\" (click)=\"remove()\">\n        <i class=\"fa fa-user-minus\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"design box des\" title=\"Clear chat\" (click)=\"clear()\">\n        <i class=\"fa fa-trash-alt\"></i>\n    </button>\n</div>\n<div class=\"spa space\">    \n<div class=\"spac writ\" *ngFor=\"let message of messages | async | reverse | filter:searchTerm\">\n<div class=\"write\">\n{{message.name}}\n<div class=\"right it\">{{message.time | date:\"EEEE, MMMM d, y 'at' h:mm a\"}}</div>\n<div class=\"clear\"></div>\n<a [href]=\"message.url\" download *ngIf=\"message.ext\" class=\"design left bo dess download\" title=\"Download file\">\n  <i class=\"fa fa-download gree do\"></i>\n</a>\n<div class=\"clear\"></div>\n</div>\n<img *ngIf=\"message.ext === 'jpg' || message.ext === 'png' || message.ext === 'gif'\" [src]=\"message.url\">    \n<video *ngIf=\"message.ext === 'mp4'\" controls>\n  <source [src]=\"message.url\" type=\"video/mp4\">\n</video>\n<audio *ngIf=\"message.ext === 'mp3'\" controls>\n  <source [src]=\"message.url\" type=\"audio/mp3\">\n</audio>\n<i *ngIf=\"message.ext && message.ext !== 'mp3' && message.ext !== 'mp4' && message.ext !== 'jpg' && message.ext !== 'png' && message.ext !== 'gif'\" class=\"fa fa-5x fa-file\"></i>\n\n</div>\n</div>\n<div class=\"pos fixed bottom lef\">\n  <input [(ngModel)]=\"searchTerm\"  class=\"inpu full black write\">  \n</div>\n"

/***/ }),

/***/ "./src/app/their-profile/their-profile.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/their-profile/their-profile.component.ts ***!
  \**********************************************************/
/*! exports provided: TheirProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheirProfileComponent", function() { return TheirProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TheirProfileComponent = /** @class */ (function () {
    function TheirProfileComponent(route, fire, auth) {
        this.route = route;
        this.fire = fire;
        this.auth = auth;
    }
    TheirProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
        });
        this.friendId = this.route.snapshot.paramMap.get('id');
        this.name = this.route.snapshot.paramMap.get('name');
        if (this.name.length > 26)
            this.namee = this.name.substring(0, 25) + "...";
        else
            this.namee = this.name;
        this.messages = this.fire.list('otherprofile/' + this.friendId).valueChanges();
    };
    TheirProfileComponent.prototype.g = function () {
        this.open = false;
    };
    TheirProfileComponent.prototype.clear = function () {
        var val = confirm("Clear " + this.name + "'s chat");
        if (val) {
            this.fire.object('messages/' + this.userId + '/' + this.friendId).remove();
            this.fire.object('inbox/' + this.friendId + '/' + this.userId).remove();
            alert('Cleared');
        }
    };
    TheirProfileComponent.prototype.add = function () {
        var time = firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"].ServerValue.TIMESTAMP;
        this.fire.object('ffriend/' + this.userId + '/' + this.friendId).set({
            userId: this.friendId,
            time: time
        });
        this.fire.object('fffriend/' + this.friendId + '/' + this.userId).set({
            userId: this.userId,
            time: time
        });
    };
    TheirProfileComponent.prototype.remove = function () {
        this.fire.object('ffriend/' + this.userId + '/' + this.friendId).remove();
        this.fire.object('fffriend/' + this.friendId + '/' + this.userId).remove();
    };
    TheirProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-their-profile',
            template: __webpack_require__(/*! ./their-profile.component.html */ "./src/app/their-profile/their-profile.component.html"),
            styles: [__webpack_require__(/*! ./their-profile.component.css */ "./src/app/their-profile/their-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], TheirProfileComponent);
    return TheirProfileComponent;
}());



/***/ }),

/***/ "./src/app/their-wall/their-wall.component.css":
/*!*****************************************************!*\
  !*** ./src/app/their-wall/their-wall.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZWlyLXdhbGwvdGhlaXItd2FsbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/their-wall/their-wall.component.html":
/*!******************************************************!*\
  !*** ./src/app/their-wall/their-wall.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n  <i class=\"fa fa-user-secret it green\" title=\"Wall\"></i>\n  <a class=\"bold\" (click)=\"open=true\">{{namee}}</a>\n</div>\n<div *ngIf=\"open\" class=\"page fixed index bottom top lef rit black\" (click)=\"g()\">\n</div>\n<div *ngIf=\"open\" class=\"fixed index bottom\" (click)=\"g()\">\n    <a href=\"/home/chat/{{friendId}}/{{name}}#bottom\" class=\"design left bo dess download\" title=\"Chat\">\n        <i class=\"fa fa-comment gree do\"></i>            \n    </a>\n    <button class=\"box design des\" title=\"Forum\" routerLink=\"/home/forum/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-mail-bulk\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Profile\" routerLink=\"/home/profile/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-user-tie\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Wall\" routerLink=\"/home/wall/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-user-secret\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Following parties' inbox\" routerLink=\"/home/followingPartiesInbox/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-envelope\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Following people' status\" routerLink=\"/home/followingPeopleStatus/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-tv\"></i>            \n    </button>\n    <button class=\"box design des\" routerLink=\"/home/friends/{{friendId}}/{{name}}\" title=\"Friends\">\n        <i class=\"fa fa-user-friends\"></i>        \n    </button>\n    <button class=\"box design des\" title=\"Channels\" routerLink=\"/home/channels/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-warehouse\"></i>            \n    </button>\n    <button class=\"box design des\" title=\"Display picture\" routerLink=\"/home/displayPicture/{{friendId}}/{{name}}\">\n        <i class=\"fa fa-portrait\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"box design des\" title=\"Follow\" (click)=\"add()\" >\n        <i class=\"fa fa-user-plus\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"box design des\" title=\"Unfollow\" (click)=\"remove()\">\n        <i class=\"fa fa-user-minus\"></i>            \n    </button>\n    <button [disabled]=\"!userId\" class=\"design box des\" title=\"Clear chat\" (click)=\"clear()\">\n        <i class=\"fa fa-trash-alt\"></i>\n    </button>\n</div>\n<div class=\"spa space\">\n<div class=\"spac writ\" *ngFor=\"let message of messages | async | reverse | filter:searchTerm\">\n<div class=\"write\">\n{{message.name}}\n<div class=\"right it\">{{message.time | date:\"EEEE, MMMM d, y 'at' h:mm a\"}}</div>\n<div class=\"clear\"></div>\n<a [href]=\"message.url\" download class=\"design left bo dess download\" title=\"Download file\">\n  <i class=\"fa fa-download gree do\"></i>\n</a>\n<div class=\"clear\"></div>\n</div>\n<img *ngIf=\"message.ext === 'jpg' || message.ext === 'png' || message.ext === 'gif'\" [src]=\"message.url\">    \n<video *ngIf=\"message.ext === 'mp4'\" controls>\n  <source [src]=\"message.url\" type=\"video/mp4\">\n</video>\n<audio *ngIf=\"message.ext === 'mp3'\" controls>\n  <source [src]=\"message.url\" type=\"audio/mp3\">\n</audio>\n<i *ngIf=\"message.ext && message.ext !== 'mp3' && message.ext !== 'mp4' && message.ext !== 'jpg' && message.ext !== 'png' && message.ext !== 'gif'\" class=\"fa fa-5x fa-file\"></i>\n\n</div>\n</div>\n<div class=\"pos fixed bottom lef\">\n  <input [(ngModel)]=\"searchTerm\"  class=\"inpu full black write\">  \n</div>"

/***/ }),

/***/ "./src/app/their-wall/their-wall.component.ts":
/*!****************************************************!*\
  !*** ./src/app/their-wall/their-wall.component.ts ***!
  \****************************************************/
/*! exports provided: TheirWallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheirWallComponent", function() { return TheirWallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TheirWallComponent = /** @class */ (function () {
    function TheirWallComponent(route, fire, auth) {
        this.route = route;
        this.fire = fire;
        this.auth = auth;
    }
    TheirWallComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
        });
        this.friendId = this.route.snapshot.paramMap.get('id');
        this.name = this.route.snapshot.paramMap.get('name');
        if (this.name.length > 26)
            this.namee = this.name.substring(0, 25) + "...";
        else
            this.namee = this.name;
        this.messages = this.fire.list('otherwall/' + this.friendId).valueChanges();
    };
    TheirWallComponent.prototype.g = function () {
        this.open = false;
    };
    TheirWallComponent.prototype.clear = function () {
        var val = confirm("Clear " + this.name + "'s chat");
        if (val) {
            this.fire.object('messages/' + this.userId + '/' + this.friendId).remove();
            this.fire.object('inbox/' + this.friendId + '/' + this.userId).remove();
            alert('Cleared');
        }
    };
    TheirWallComponent.prototype.add = function () {
        var time = firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"].ServerValue.TIMESTAMP;
        this.fire.object('ffriend/' + this.userId + '/' + this.friendId).set({
            userId: this.friendId,
            time: time
        });
        this.fire.object('fffriend/' + this.friendId + '/' + this.userId).set({
            userId: this.userId,
            time: time
        });
    };
    TheirWallComponent.prototype.remove = function () {
        this.fire.object('ffriend/' + this.userId + '/' + this.friendId).remove();
        this.fire.object('fffriend/' + this.friendId + '/' + this.userId).remove();
    };
    TheirWallComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-their-wall',
            template: __webpack_require__(/*! ./their-wall.component.html */ "./src/app/their-wall/their-wall.component.html"),
            styles: [__webpack_require__(/*! ./their-wall.component.css */ "./src/app/their-wall/their-wall.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], TheirWallComponent);
    return TheirWallComponent;
}());



/***/ }),

/***/ "./src/app/wall/wall.component.css":
/*!*****************************************!*\
  !*** ./src/app/wall/wall.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhbGwvd2FsbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/wall/wall.component.html":
/*!******************************************!*\
  !*** ./src/app/wall/wall.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posi fixed top lef rit\">\n  <i class=\"fa fa-user-secret it green\" title=\"Wall\"></i>\n</div>\n<div class=\"spa space\">\n<div class=\"spac writ\" *ngFor=\"let message of messages | async | reverse | filter:searchTerm\">\n<div class=\"write\">\n{{message.name}}\n<div class=\"right it\">{{message.time | date:\"EEEE, MMMM d, y 'at' h:mm a\"}}</div>\n<div class=\"clear\"></div>\n<button class=\"design box des\" title=\"Use as display picture\" (click)=\"dp(message.name,message.ext,message.url)\">\n  <i class=\"fa fa-id-card\"></i>\n</button>\n<button class=\"design box des\" title=\"Delete file\" (click)=\"delete(message.id,message.name, message.url)\">\n  <i class=\"fa fa-trash\"></i>\n</button>\n<a [href]=\"message.url\" download class=\"design left bo dess download\" title=\"Download file\">\n  <i class=\"fa fa-download gree do\"></i>\n</a>\n<div class=\"clear\"></div>\n</div>\n<img *ngIf=\"message.ext === 'jpg' || message.ext === 'png' || message.ext === 'gif'\" [src]=\"message.url\">    \n<video *ngIf=\"message.ext === 'mp4'\" controls>\n  <source [src]=\"message.url\" type=\"video/mp4\">\n</video>\n<audio *ngIf=\"message.ext === 'mp3'\" controls>\n  <source [src]=\"message.url\" type=\"audio/mp3\">\n</audio>\n<i *ngIf=\"message.ext && message.ext !== 'mp3' && message.ext !== 'mp4' && message.ext !== 'jpg' && message.ext !== 'png' && message.ext !== 'gif'\" class=\"fa fa-5x fa-file\"></i>\n\n</div>\n</div>\n<div class=\"down fixed bottom lef rit\">\n    <label *ngIf=\"userId\" class=\"file design dess bo\" title=\"Upload file\">\n        <input type=\"file\" class=\"no\" (change)=\"upload($event)\">\n        <i class=\"fa fa-upload gree\"></i>\n        </label>\n<div class=\"doo d\">\n  <input [(ngModel)]=\"searchTerm\"  class=\"inpu full black write\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/wall/wall.component.ts":
/*!****************************************!*\
  !*** ./src/app/wall/wall.component.ts ***!
  \****************************************/
/*! exports provided: WallComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallComponent", function() { return WallComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WallComponent = /** @class */ (function () {
    function WallComponent(afStorage, fire, auth, db) {
        this.afStorage = afStorage;
        this.fire = fire;
        this.auth = auth;
        this.db = db;
    }
    WallComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authState.subscribe(function (user) {
            _this.userId = user.uid;
            _this.messages = _this.fire.list('wall/' + _this.userId).valueChanges();
        });
    };
    WallComponent.prototype.delete = function (d, e, f) {
        var _this = this;
        var val = confirm("Delete " + e + "'s file");
        if (val) {
            this.fire.object('wall/' + this.userId + '/' + d).remove();
            this.fire.object('otherwall/' + this.userId + '/' + d).remove();
            this.afStorage.ref('wall/' + d).delete();
            this.db.doc('user/' + this.userId).get().subscribe(function (snapshot) {
                if (snapshot.data().url === f)
                    _this.db.doc('user/' + _this.userId).delete();
            });
            alert('Deleted');
        }
    };
    WallComponent.prototype.dp = function (a, b, c) {
        this.db.doc('user/' + this.userId).set({
            name: a,
            ext: b,
            url: c
        });
    };
    WallComponent.prototype.upload = function (e) {
        var _this = this;
        var file = e.target.files[0];
        var fileName = file.name;
        var ext = fileName.split('.').pop();
        var id = this.fire.createPushId();
        var time = firebase_app__WEBPACK_IMPORTED_MODULE_1__["database"].ServerValue.TIMESTAMP;
        var ref = this.afStorage.ref('wall/' + id);
        ref.put(file).then(function () {
            ref.getDownloadURL().subscribe(function (url) {
                _this.fire.object('wall/' + _this.userId + '/' + id).set({
                    id: id,
                    name: fileName,
                    time: time,
                    url: url,
                    ext: ext
                });
                _this.fire.object('otherwall/' + _this.userId + '/' + id).set({
                    name: fileName,
                    time: time,
                    url: url,
                    ext: ext
                });
                _this.db.doc('user/' + _this.userId).set({
                    name: fileName,
                    ext: ext,
                    url: url
                });
            });
        }).catch(function (e) {
            alert(e.message);
        });
    };
    WallComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wall',
            template: __webpack_require__(/*! ./wall.component.html */ "./src/app/wall/wall.component.html"),
            styles: [__webpack_require__(/*! ./wall.component.css */ "./src/app/wall/wall.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], WallComponent);
    return WallComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Documents\project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map