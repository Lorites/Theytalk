import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { FriendComponent } from './friend/friend.component';
import { CommunityComponent } from './community/community.component';
import { InboxComponent } from './inbox/inbox.component';
import { FpiComponent } from './fpi/fpi.component';
import { FciComponent } from './fci/fci.component';
import { FpsComponent } from './fps/fps.component';
import { SettingsComponent } from './settings/settings.component';
import { CreatedComponent } from './created/created.component';
import { ProfileComponent } from './profile/profile.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WallComponent } from './wall/wall.component';
import { PeopleComponent } from './people/people.component';
import { ChannelsComponent } from './channels/channels.component';
import { GroupchatComponent } from './groupchat/groupchat.component';
import { TheirCreatedChannelsComponent } from './their-created-channels/their-created-channels.component';
import { TheirProfileComponent } from './their-profile/their-profile.component';
import { TheirWallComponent } from './their-wall/their-wall.component';
import { TheirFollowingChannelsInboxComponent } from './their-following-channels-inbox/their-following-channels-inbox.component';
import { TheirFollowingPeopleStatusComponent } from './their-following-people-status/their-following-people-status.component';
import { TheirFriendsComponent } from './their-friends/their-friends.component';
import { TheirCommunitiesComponent } from './their-communities/their-communities.component';
import { DiplayPictureComponent } from './diplay-picture/diplay-picture.component';
import { TheirDiplayPictureComponent } from './their-diplay-picture/their-diplay-picture.component';
import { TheirGalleryComponent } from './their-gallery/their-gallery.component';
import { FanpageComponent } from './fanpage/fanpage.component';
import { FilterPipe } from './filter.pipe';
import { ChannelWallComponent } from './channel-wall/channel-wall.component';
import { ChannelFanpageComponent } from './channel-fanpage/channel-fanpage.component';
import { ChannelDisplayPictureComponent } from './channel-display-picture/channel-display-picture.component';
import { EditWallComponent } from './edit-wall/edit-wall.component';
import { ReversePipe } from './reverse.pipe';
const routes: Routes = [
  {path: 'home', redirectTo: '/auth', pathMatch: 'full'}, 
  {path:'auth', component:AuthComponent },
  {path:'home', component: HomeComponent, children:[
    {path:'people', component: PeopleComponent},
    {path:'friends', component: FriendComponent},
    {path:'channels', component: CommunityComponent},
    {path:'inbox', component: InboxComponent},
    {path:'settings', component: SettingsComponent},
    {path:'profile', component: ProfileComponent},
    {path:'gallery', component: GalleryComponent},
    {path:'wall', component: WallComponent},
    {path:'displayPicture', component: DiplayPictureComponent},
    {path:'forum', component: CreatedComponent},
    {path:'followingPeopleInbox', component: FpiComponent},
    {path:'followingPartiesInbox', component: FciComponent},
    {path:'followingPeopleStatus', component: FpsComponent},
    {path:'parties', component: ChannelsComponent},
    {path:'chat/:id/:name', component: ChatComponent},
    {path:'partyChat/:id/:name', component: GroupchatComponent},
    {path:'forum/:id/:name', component: TheirCreatedChannelsComponent},
    {path:'channels/:id/:name', component: TheirCommunitiesComponent},
    {path:'followingPartiesInbox/:id/:name', component: TheirFollowingChannelsInboxComponent},
    {path:'profile/:id/:name', component: TheirProfileComponent},
    {path:'wall/:id/:name', component: TheirWallComponent},
    {path:'editPartyWall/:id/:name', component: EditWallComponent},
    {path:'partyWall/:id/:name', component: ChannelWallComponent},
    {path:'friends/:id/:name', component: TheirFriendsComponent},
    {path:'displayPicture/:id/:name', component: TheirDiplayPictureComponent},
    {path:'partyDisplayPicture/:id/:name', component: ChannelDisplayPictureComponent},
    {path:'partyGallery/:id/:name', component: TheirGalleryComponent},
    {path:'fanPage/:id/:name', component: FanpageComponent},
    {path:'editFanPage/:id/:name', component: ChannelFanpageComponent},
    {path:'followingPeopleStatus/:id/:name', component: TheirFollowingPeopleStatusComponent}
  ]},
  {path: '**', redirectTo: '/auth', pathMatch: 'full'},

];
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    ChatComponent,
    FriendComponent,
    CommunityComponent,
    InboxComponent,
    FpiComponent,
    FciComponent,
    FpsComponent,
    SettingsComponent,
    CreatedComponent,
    ProfileComponent,
    GalleryComponent,
    WallComponent,
    PeopleComponent,
    ChannelsComponent,
    GroupchatComponent,
    TheirCreatedChannelsComponent,
    TheirProfileComponent,
    TheirWallComponent,
    TheirFollowingChannelsInboxComponent,
    TheirFollowingPeopleStatusComponent,
    TheirFriendsComponent,
    TheirCommunitiesComponent,
    DiplayPictureComponent,
    TheirDiplayPictureComponent,
    TheirGalleryComponent,
    FanpageComponent,
    FilterPipe,
    ChannelWallComponent,
    ChannelFanpageComponent,
    ChannelDisplayPictureComponent,
    EditWallComponent,
    ReversePipe
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCE5ClWOnAsQ6Lf_GdBIeVRIN2oDw5NAWc",
      authDomain: "talker-cdb84.firebaseapp.com",
      databaseURL: "https://talker-cdb84.firebaseio.com",
      projectId: "talker-cdb84",
      storageBucket: "talker-cdb84.appspot.com",
      messagingSenderId: "77591635657"
    }),
    AngularFirestoreModule.enablePersistence(), 
    AngularFireAuthModule, 
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
