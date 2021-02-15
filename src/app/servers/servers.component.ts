import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // default and recommended selector method
  // selector: '[app-servers]', // attribute method, add it in html element as attribute
  // selector: '.app-servers', // class method.   Note: id and psuedo selectors won't work in angular
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server>', template or templateUrl - either of them is must to define component
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = 'Test Server';
  userName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer 2'];
  showDetails = false;
  log = [];
  num = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server is created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
