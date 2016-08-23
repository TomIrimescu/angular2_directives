import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';


@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
	@HostListener('mouseenter') mouseover(){
		this.backgroundColor = 'pink';
	};
	@HostListener('mouseleave') mouseleave(){
		this.backgroundColor = 'white';
	};
	@HostBinding('style.backgroundColor')get setColor(){
		return this.backgroundColor;
	};
	private  backgroundColor = 'white';
	constructor() {
	// constructor(private elementRef: ElementRef, private renderer: Renderer) {
		// this approach does not work across all devices well
		// this.elementRef.nativeElement.style.backgroundColor = 'red';
		// this approach is more reliable across all devices
		// this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'red');
  }

	@HostListener('click', ['$event'])
	onClick(highlight) {
		console.log("Event Target" + highlight.target);
	}

}

