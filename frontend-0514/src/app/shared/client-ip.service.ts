import { Injectable } from '@angular/core';

@Injectable()
export class ClientIpService {
  constructor() { }

  getClientIp(firstIpAddress, secondIpAddress) {
      // NOTE: window.RTCPeerConnection is "not a constructor" in FF22/23
      const rtc = new RTCPeerConnection({iceServers: []});
      rtc.createDataChannel('', <RTCDataChannelInit>{reliable: false}); // FF [and now Chrome!] needs a channel/stream to proceed


      rtc.onicecandidate = function (evt) {
        // convert the candidate to SDP so we can run it through our general parser
        // see https://twitter.com/lancestout/status/525796175425720320 for details
        if (evt.candidate) { grepSDP('a=' + evt.candidate.candidate); }
      };
      rtc.createOffer(function (offerDesc) {
        grepSDP(offerDesc.sdp);
        rtc.setLocalDescription(offerDesc);
      }, function (e) { console.warn('offer failed', e); });

      const addrs = Object.create(null);
      addrs['0.0.0.0'] = false;
      function updateDisplay(newAddr) {
        if (newAddr in addrs) { return; } else { addrs[newAddr] = true; }
        const displayAddrs = Object.keys(addrs).filter(function (k) { return addrs[k]; });
        let ipSplit: string[];
        ipSplit = displayAddrs.toString().split('.');
        if (ipSplit[0] === firstIpAddress && ipSplit[1] === secondIpAddress) {
          console.log('the ip address is under office');
          setCookie(true);
        } else {
          console.log('the ip address is not under office');
          setCookie(false);
        }
      }

      function grepSDP(sdp) {
        sdp.split('\r\n').forEach(function (line) { // c.f. http://tools.ietf.org/html/rfc4566#page-39
          if (~line.indexOf('a=candidate')) {     // http://tools.ietf.org/html/rfc4566#section-5.13
            const parts = line.split(' '),        // http://tools.ietf.org/html/rfc5245#section-15.1
              addr = parts[4],
              type = parts[7];
            if (type === 'host') { updateDisplay(addr); }
          } else if (~line.indexOf('c=')) {       // http://tools.ietf.org/html/rfc4566#section-5.7
            const parts = line.split(' '),
              addr = parts[2];
            updateDisplay(addr);
          }
        });
      }

      function setCookie(clientIpCheck) {
        document.cookie = 'ClientIpCheck=' + clientIpCheck;
      }
  }
}
