import { Component } from '@angular/core';

@Component({
  selector: 'warning-alert',
  template: `
    <p>WARNING! you are in danger</p>
  `,
  styles: [
    `
      p {
        background-color: mistyrose;
        padding: 20px;
        border: 1px solid red;
      }
    `
  ]
})
export class WarningAlertComponent {}
