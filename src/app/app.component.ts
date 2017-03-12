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
    
    layoutMode: MenuOrientation = MenuOrientation.STATIC;
    
    darkMenu: boolean = false;
    
    topbarMenuActive: boolean;

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

    onMenuClick($event) {
        this.menuClick = true;
        this.resetMenu = false;
    }

    onTopbarMenuButtonClick(event) {
        this.topbarItemClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;
        
        if(this.sidebarActive) {
            this.sidebarActive = false;
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