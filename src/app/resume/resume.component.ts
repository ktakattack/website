import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.sass']
})
export class ResumeComponent implements OnInit {

  @ViewChild('stickyMenu') menuElement: ElementRef

  sticky: boolean = false
  elementPosition: any

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.elementPosition = this.menuElement.nativeElement.offsetTop

  }

  @HostListener('window:scroll', ['$event'])
  handleScroll(){
    const windowScroll = window.pageYOffset
    if(windowScroll >= this.elementPosition){
      this.sticky = true
    } else {
      this.sticky = false
    }
  }

}
