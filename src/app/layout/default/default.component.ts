import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import {
  NzMenuItemComponent,
  NzMenuModule,
  NzSubMenuComponent
} from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-default',
  imports: [
    NzIconModule,
    NzSubMenuComponent,
    NzMenuItemComponent,
    NzMenuModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzAvatarModule,
    RouterOutlet
  ],
  templateUrl: './default.component.html',
  styleUrl: './default.component.scss'
})
export class DefaultComponent {}
