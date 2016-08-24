import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
	// you could declare the property and constructor like the following:
	/*	private elementRef: ElementRef;
	 constructor(elementRef: ElementRef){
	 this.elementRef = elementRef;
	 //this approach does not work across all devices well
	 this.elementRef.nativeElement.style.backgroundColor = 'red';
	 }*/

	// OR the following constructor uses dependency injection option 1
	/*	constructor(private elementRef: ElementRef) {
	 //this approach does not work across all devices well
	 this.elementRef.nativeElement.style.backgroundColor = 'red';
	 }*/

	// OR the following constructor uses multiple dependency injections option 2
	/*	constructor(private elementRef: ElementRef, private renderer: Renderer) {
	 //this approach is more reliable across all devices
	 this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'red');
	 }*/

	// Introduce a hover state with renderer injection
	/*	@HostListener('mouseenter') mouseover(){
	 this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'pink');
	 };
	 @HostListener('mouseleave') mouseleave(){
	 this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'white');
	 };
	 constructor(private elementRef: ElementRef, private renderer: Renderer) {}*/

	// Introduce a hover state with binding
	/*	@HostListener('mouseenter') mouseover(){
	 this.backgroundColor = 'pink';
	 };
	 @HostListener('mouseleave') mouseleave(){
	 this.backgroundColor = 'white';
	 };
	 @HostBinding('style.backgroundColor')get setColor(){
	 return this.backgroundColor;
	 };
	 private  backgroundColor = 'white';
	 constructor() {}

	 // Introduce a click event with listener passing data
	 @HostListener('click', ['$event'])
	 onClick(highlight) {
	 console.log("Event Target" + highlight.target);
	 }*/

	// Introduce a hover state with binding and property binding
	@HostListener('mouseenter') mouseover() {
		this.backgroundColor = this.highlightColor;
	};

	@HostListener('mouseleave') mouseleave() {
		this.backgroundColor = this.defaultColor;
	};

	@HostBinding('style.backgroundColor')get setColor() {
		return this.backgroundColor;
	};

	@Input() defaultColor = 'white';
	@Input('highlight') highlightColor = 'green';
	private backgroundColor: string;

	constructor() {	}

	// Introduce a click event with listener passing data
	@HostListener('click', ['$event'])
	onClick(highlight) {
		console.log("Event Target" + highlight.target);
	}

	ngOnInit(){
		this.backgroundColor = this.defaultColor;
	}

}