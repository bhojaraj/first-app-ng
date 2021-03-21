import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-data-binding',
  templateUrl: './comp-data-binding.component.html',
  styleUrls: ['./comp-data-binding.component.css']
})
export class CompDataBindingComponent implements OnInit {
  serverElements = [
    { type: 'server', name: 'TestServer', content: 'Just a test' }
  ];

  constructor() {}

  ngOnInit(): void {}

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlurprintAdded(bluePrintData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
