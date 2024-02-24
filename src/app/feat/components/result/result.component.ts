import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  constructor(
    private renderer: Renderer2,
  ){}
  @ViewChild('container_result') container_result!: ElementRef
  toogle: boolean = false;

  profession(){
   
  const profession = this.renderer.createElement('div') // on cre une elt span
  if(this.toogle == false){
    profession.innerHTML = `
    <h1> Developper</h1>
    <h1> Agent BTB</h1>
    <h1> Biologiste</h1>
    `
    this.renderer.addClass(profession, 'profession');// on ajoute une classe alerte sur les span
    this.renderer.appendChild(this.container_result.nativeElement, profession);
    this.renderer.appendChild(this.container_result.nativeElement, profession);
    this.toogle = true;
    console.log(this.toogle);
    
  }
  else{
    const childToRemove = this.container_result.nativeElement.children[2];
    this.renderer.removeChild(this.container_result.nativeElement, childToRemove);
    this.toogle = false;
  }
  } 
}
