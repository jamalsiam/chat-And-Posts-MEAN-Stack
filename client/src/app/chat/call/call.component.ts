import { Component, OnInit, ViewChild } from '@angular/core';
import { ChatService } from '../service/chat.service';
import { DataService } from '../../data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent implements OnInit {
  @ViewChild('myPeerVideo') myPeerVideo: any;
  @ViewChild('myVideo') myVideo: any;

  targetpeer: any;
  peer: any;

  n = <any>navigator;
  constructor(public chat: ChatService, private service: DataService, private route: Router,
    private activatedRoute: ActivatedRoute, private storage: LocalStorageService) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      const myPeerVideo = this.myPeerVideo.nativeElement;
      const myVideo = this.myVideo.nativeElement;
      let peerx: any;

      this.n.getUserMedia = (this.n.getUserMedia || this.n.webkitGetUserMedia || this.n.mozGetUserMedia || this.n.msGetUserMedia);
      if (params.type === '1' && this.chat.recordCaller) {

        this.n.getUserMedia({ video: this.chat.recordCaller.from.video, audio: true }, function (stream) {
          myVideo.src = URL.createObjectURL(stream);
          myVideo.play();
          peerx = new SimplePeer({
            initiator: true,
            trickle: false,
            stream: stream
          });

          peerx.on('signal', function (data) {
            this.targetpeer = data;
          });

          peerx.on('data', function (data) {
            console.log('Recieved message:' + data);
          });

          peerx.on('stream', function (stream) {
            myPeerVideo.src = URL.createObjectURL(stream);
            myPeerVideo.play();
          });

        }, function (err) {
          console.log('Failed to get stream', err);
        });
        setTimeout(() => {
          this.peer = peerx;
          this.xx(this.peer);
          this.chat.receiveResponseOfNotificationCall().subscribe(res => {
            this.connect(res['key']);
          });
        }, 1000);


      } else if (params.type === '2' && this.chat.recordReceiver) {
        console.log(this.chat.recordReceiver);

        this.n.getUserMedia({ video: this.chat.recordReceiver.video, audio: true }, function (stream) {
          myVideo.src = URL.createObjectURL(stream);
          myVideo.play();
          peerx = new SimplePeer({
            initiator: false,
            trickle: false,
            stream: stream
          });

          peerx.on('signal', function (data) {
            // console.log(JSON.stringify(data));
            this.targetpeer = data;
          });

          peerx.on('data', function (data) {
            console.log('Recieved message:' + data);
          });

          peerx.on('stream', function (stream) {
            myPeerVideo.src = URL.createObjectURL(stream);
            myPeerVideo.play();
          });

        }, function (err) {
          console.log('Failed to get stream', err);
        });


        setTimeout(() => {
          this.peer = peerx;
          this.connect(this.chat.recordReceiver.key);
        }, 1000);

        setTimeout(() => {
          this.xxx(this.peer);
        }, 1200);

      } else {
        this.route.navigate(['']);
      }
    });

  }

  connect(key) {
    this.peer.signal(key);
  }

  xx(peerKey) {
    this.chat.recordCaller.from['key'] = peerKey.targetpeer;
    this.chat.sendNotificationCallFromCaller(this.chat.recordCaller);
  }

  xxx(peerKey) {
    this.chat.sendResponseOfNotificationCallToSender({
      toId: this.chat.recordReceiver.id,
      key: peerKey.targetpeer
    });
  }

}

