import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements AfterViewInit{
  @ViewChild('element') element!: ElementRef
  @ViewChild('listquality') listquality!: ElementRef
  @ViewChild('myquality') myquality!: ElementRef

constructor(
  private renderer: Renderer2
  ){}

  selecteQuality(): void{
    this.listquality.nativeElement.querySelectorAll('.li').forEach((container_quality: any) =>{
      container_quality.querySelectorAll('.elt').forEach((quality: any) =>{
      quality.addEventListener('click', () => {
      const text = quality.innerHTML
      this.registerQuality(text)
      this.renderer.removeChild(container_quality, quality)
      })
      })
    })
   
  }

  registerQuality(quality: string): void{
   const newQuality = this.renderer.createElement('span');
   const text = this.renderer.createText(`${quality}`);
   this.renderer.appendChild(newQuality, text);
   this.renderer.addClass(newQuality, 'my_qualityClass');
   this.renderer.appendChild(this.myquality.nativeElement, newQuality)

  }
  ngAfterViewInit(): void {
    this.selecteQuality()
  }
}
