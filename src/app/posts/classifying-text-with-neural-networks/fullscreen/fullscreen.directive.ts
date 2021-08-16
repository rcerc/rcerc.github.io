import {
  AfterContentInit,
  Directive,
  ElementRef,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appFullscreen]',
})
export class FullscreenDirective implements AfterContentInit {
  constructor(private readonly el: ElementRef<HTMLElement>) {}

  ngAfterContentInit() {
    this.enterState();
  }

  @HostListener('click')
  private async toggleFullscreen() {
    if (document.fullscreenElement === null) {
      await this.el.nativeElement.requestFullscreen();
      this.exitState();
    } else {
      await document.exitFullscreen();
      this.enterState();
    }
  }

  private enterState() {
    this.el.nativeElement.style.cursor = 'zoom-in';
    this.el.nativeElement.title = 'Click to enter fullscreen';
  }

  private exitState() {
    this.el.nativeElement.style.cursor = 'zoom-out';
    this.el.nativeElement.title = 'Click to exit fullscreen';
  }
}
