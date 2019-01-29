import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {
  searchTerm:string;
  channels:Observable<any[]>;
  constructor(private fire:AngularFireDatabase) { }

  ngOnInit() {
  this.channels = this.fire.list('party', ref => ref.orderByChild('show').equalTo(true)).valueChanges();

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
  }
}
