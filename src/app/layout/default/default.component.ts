import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import {
  NzMenuItemComponent,
  NzMenuModule,
  NzSubMenuComponent,
  NzSubMenuTitleComponent
} from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
    selector: 'app-layout-default',
    imports: [
        RouterLink,
        NzIconModule,
        NzSubMenuTitleComponent,
        NzSubMenuComponent,
        NzMenuItemComponent,
        NzMenuModule,
        RouterOutlet,
        NzLayoutModule,
        NzBreadCrumbModule,
        NzAvatarModule
    ],
    templateUrl: './default.component.html',
    styleUrl: './default.component.scss'
})
export class DefaultComponent {}
