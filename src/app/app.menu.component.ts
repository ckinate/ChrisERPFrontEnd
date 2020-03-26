import {Component, OnInit} from '@angular/core';
import {AppMainComponent} from './app.main.component';

@Component({
    selector: 'app-menu',
    template: `
        <div class="menu-scroll-content">
			<ul class="navigation-menu">
				<li app-menuitem *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true"></li>
			</ul>
        </div>
    `
})
export class AppMenuComponent implements OnInit {

    public model: any[];

    constructor(public app: AppMainComponent) {}

    ngOnInit() {
        this.model = [
            {label: 'Dashboard', icon: 'dashboard', routerLink: ['/']},
            {
                label: 'Themes', icon: 'palette', badge: '5',
                items: [
                    {label: 'Blue - Amber', icon: 'brush', command: (event) => {this.changeTheme('blue'); }},
                    {label: 'Teal - Amber', icon: 'brush', command: (event) => {this.changeTheme('teal'); }},
                    {label: 'Blue Grey - Green', icon: 'brush', command: (event) => {this.changeTheme('blue-grey'); }},
                    {label: 'Cyan - Yellow', icon: 'brush', command: (event) => {this.changeTheme('cyan'); }},
                    {label: 'Dark - Blue', icon: 'brush', command: (event) => {this.changeTheme('dark-blue'); }},
                    {label: 'Dark - Green', icon: 'brush', command: (event) => {this.changeTheme('dark-green'); }},
                    {label: 'Light Blue - Green', icon: 'brush', command: (event) => {this.changeTheme('light-blue'); }},
                    {label: 'Indio - Cyan', icon: 'brush', command: (event) => {this.changeTheme('indigo'); }},
                    {label: 'Deep Purple - Pink', icon: 'brush', command: (event) => {this.changeTheme('deep-purple'); }},
                    {label: 'Green - Yellow', icon: 'brush', command: (event) => {this.changeTheme('green'); }}
                ]
            },
            {
                label: 'Menu Modes', icon: 'settings_application',
                items: [
                    {label: 'Static Menu', icon: 'menu',  command: () => this.app.changeToStaticMenu()},
                    {label: 'Overlay Menu', icon: 'exit_to_app',  command: () => this.app.changeToOverlayMenu()},
                    {label: 'Light Menu', icon: 'label_outline',  command: () => this.app.darkMenu = false},
                    {label: 'Dark Menu', icon: 'label',  command: () => this.app.darkMenu = true}
                ]
            },
            {
                label: 'Components', icon: 'list', badge: '2', badgeStyleClass: 'red-badge', routerLink: ['/components'],
                items: [
                    {label: 'Sample Page', icon: 'desktop_mac', routerLink: ['/components/sample']},
                    {label: 'Forms', icon: 'input', routerLink: ['/components/forms']},
                    {label: 'Data', icon: 'grid_on', routerLink: ['/components/data']},
                    {label: 'Panels', icon: 'content_paste', routerLink: ['/components/panels']},
                    {label: 'Overlays', icon: 'content_copy', routerLink: ['/components/overlays']},
                    {label: 'Menus', icon: 'menu', routerLink: ['/components/menus']},
                    {label: 'Messages', icon: 'message', routerLink: ['/components/messages']},
                    {label: 'Charts', icon: 'insert_chart', routerLink: ['/components/charts']},
                    {label: 'File', icon: 'attach_file', routerLink: ['/components/file']},
                    {label: 'Misc', icon: 'toys', routerLink: ['/components/misc']}
                ]
            },
            {
                label: 'Template Pages', icon: 'get_app', routerLink: ['/pages'],
                items: [
                    {label: 'Empty Page', icon: 'hourglass_empty', routerLink: ['/pages/empty']},
                    {label: 'Landing Page', icon: 'flight_land', url: 'assets/pages/landing.html', target: '_blank'},
                    {label: 'Login Page', icon: 'verified_user', routerLink: ['/login'], target: '_blank'},
                    {label: 'Error Page', icon: 'error', routerLink: ['/error'], target: '_blank'},
                    {label: '404 Page', icon: 'error_outline', routerLink: ['/404'], target: '_blank'},
                    {label: 'Access Denied Page', icon: 'security', routerLink: ['/accessdenied'], target: '_blank'}
                ]
            },
            {
                label: 'Menu Hierarchy', icon: 'menu',
                items: [
                    {
                        label: 'Submenu 1', icon: 'subject',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'subject',
                                items: [
                                    {label: 'Submenu 1.1.1', icon: 'subject'},
                                    {label: 'Submenu 1.1.2', icon: 'subject'},
                                    {label: 'Submenu 1.1.3', icon: 'subject'},
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'subject',
                                items: [
                                    {label: 'Submenu 1.2.1', icon: 'subject'},
                                    {label: 'Submenu 1.2.2', icon: 'subject'}
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'subject',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'subject',
                                items: [
                                    {label: 'Submenu 2.1.1', icon: 'subject'},
                                    {label: 'Submenu 2.1.2', icon: 'subject'},
                                    {label: 'Submenu 2.1.3', icon: 'subject'},
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'subject',
                                items: [
                                    {label: 'Submenu 2.2.1', icon: 'subject'},
                                    {label: 'Submenu 2.2.2', icon: 'subject'}
                                ]
                            },
                        ]
                    }
                ]
            },
            {label: 'Utils', icon: 'build', routerLink: ['/utils']},
            {label: 'Documentation', icon: 'find_in_page', routerLink: ['/documentation']}
        ];
    }

    changeTheme(theme) {
        const themeLink: HTMLLinkElement = document.getElementById('theme-css') as HTMLLinkElement ;
        const layoutLink: HTMLLinkElement = document.getElementById('layout-css') as HTMLLinkElement ;

        const themeHref = 'assets/theme/theme-' + theme + '.css';
        this.replaceLink(themeLink, themeHref);

        const layoutHref = 'assets/layout/css/layout-' + theme + '.css';
        this.replaceLink(layoutLink, layoutHref);
    }

    isIE() {
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    }

    replaceLink(linkElement, href) {
        if (this.isIE()) {
            linkElement.setAttribute('href', href);
        } else {
            const id = linkElement.getAttribute('id');
            const cloneLinkElement = linkElement.cloneNode(true);

            cloneLinkElement.setAttribute('href', href);
            cloneLinkElement.setAttribute('id', id + '-clone');

            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);

            cloneLinkElement.addEventListener('load', () => {
                linkElement.remove();
                cloneLinkElement.setAttribute('id', id);
            });
        }
    }
}
