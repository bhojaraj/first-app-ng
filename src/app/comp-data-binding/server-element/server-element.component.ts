import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, ShadowDom are also there
})
// encapsulation is for global css apply, for example, by default, css inside a component is for that particular component because of strange div ng-shdfbh property, If ViewEncapsulation.None is used, it won't add that strange value
export class ServerElementComponent implements OnInit {
  @Input('cdbSrvElement') element: {
    type: string;
    name: string;
    content: string;
  };

  constructor() {}

  ngOnInit(): void {}
}
