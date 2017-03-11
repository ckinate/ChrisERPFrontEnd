import {Component,AfterViewInit,ElementRef,Renderer,ViewChild} from '@angular/core';

enum MenuOrientation {
    STATIC,
    OVERLAY
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    
    activeTabIndex: number;
    
    sidebarActive: boolean;
    
    layoutCompact: boolean = false;

    layoutMode: MenuOrientation = MenuOrientation.STATIC;
    
    darkMenu: boolean = false;
    
    profileMode: string = 'inline';

    rotateMenuButton: boolean;

    topbarMenuActive: boolean;

    overlayMenuActive: boolean;

    staticMenuDesktopInactive: boolean;

    staticMenuMobileActive: boolean;

    menuClick: boolean;

    topbarItemClick: boolean;

    activeTopbarItem: any;

    documentClickListener: Function;

    resetMenu: boolean;

    constructor(public renderer: Renderer) {}
    
    onTabClick(event: Event, index: number) {
        this.activeTabIndex = index;
        this.sidebarActive = true;
    }
    
    closeSidebar(event: Event) {
        this.sidebarActive = false;
        event.preventDefault();
    }

    onMenuButtonClick(event) {
        this.rotateMenuButton = !this.rotateMenuButton;
        this.topbarMenuActive = false;

        if(this.layoutMode === MenuOrientation.OVERLAY) {
            this.overlayMenuActive = !this.overlayMenuActive;
        }
        else {
            if(this.isDesktop())
                this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
            else
                this.staticMenuMobileActive = !this.staticMenuMobileActive;
        }

        event.preventDefault();
    }

    onMenuClick($event) {
        this.menuClick = true;
        this.resetMenu = false;
    }

    onTopbarMenuButtonClick(event) {
        this.topbarItemClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;
        
        if(this.overlayMenuActive || this.staticMenuMobileActive) {
            this.rotateMenuButton = false;
            this.overlayMenuActive = false;
            this.staticMenuMobileActive = false;
        }
        
        event.preventDefault();
    }

    onTopbarItemClick(event, item) {
        this.topbarItemClick = true;

        if(this.activeTopbarItem === item)
            this.activeTopbarItem = null;
        else
            this.activeTopbarItem = item;

        event.preventDefault();
    }

    isTablet() {
        let width = window.innerWidth;
        return width <= 1024 && width > 640;
    }

    isDesktop() {
        return window.innerWidth > 1024;
    }

    isMobile() {
        return window.innerWidth <= 640;
    }

    isOverlay() {
        return this.layoutMode === MenuOrientation.OVERLAY;
    }

    changeToStaticMenu() {
        this.layoutMode = MenuOrientation.STATIC;
    }

    changeToOverlayMenu() {
        this.layoutMode = MenuOrientation.OVERLAY;
    }

    ngOnDestroy() {
        if(this.documentClickListener) {
            this.documentClickListener();
        }  
    }

}