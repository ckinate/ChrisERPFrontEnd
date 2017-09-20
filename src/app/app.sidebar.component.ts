import {Component, Inject, forwardRef} from '@angular/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-sidebar',
      templateUrl: './app.sidebar.component.html'
})
export class AppSideBarComponent {

    constructor(@Inject(forwardRef(() => AppComponent)) public app: AppComponent) {}

}
