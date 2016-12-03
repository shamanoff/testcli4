import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-prop',
  template: `
   {{result}}
  `,
  styles: []
})
export class PropComponent {
 @Input() result: number = 0;
}
