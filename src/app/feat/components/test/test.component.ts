import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements AfterViewInit, OnInit{
  @ViewChild('element') element!: ElementRef
  @ViewChild('listquality') listquality!: ElementRef
  @ViewChild('listquality2') listquality2!: ElementRef
  @ViewChild('myquality') myquality!: ElementRef
  @ViewChild('test') testContainer!: ElementRef

constructor(
  private renderer: Renderer2
  ){}
 
  test_nombre_quality(container: any, identiant: string){
    const div = container.nativeElement.querySelector(`#${identiant}`);
    const elt = div.querySelectorAll('.elt');
    if(elt.length <= 4){
        this.renderer.addClass(div,'btn_disable') 
        const alert = this.renderer.createElement('span')
        alert.innerHTML = `3 Qualité  à chaque type <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
      </svg>`
        this.renderer.addClass(alert,'alert')
        this.renderer.appendChild(this.testContainer.nativeElement, alert)
        setTimeout(() => {
          this.renderer.removeChild(this.testContainer.nativeElement, alert)
        }, 3000)
    }
  }
  
  selecteQuality(container: any): void{
      container.nativeElement.querySelectorAll('.li').forEach((container_quality: any) =>{
        console.log(container_quality);
      const id = container_quality.id;
      console.log(id);
      container_quality.querySelectorAll('.elt').forEach((quality: any) =>{
          quality.addEventListener('click', () => {
          this.test_nombre_quality(container, id)
          const test_myquality = this.myquality.nativeElement.querySelectorAll('span');     
            if(!(test_myquality.length>=12)){
              const text = quality.innerHTML
              this.registerQuality(text);
              this.renderer.removeChild(container_quality, quality)
            }
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
    this.selecteQuality(this.listquality)
    this.selecteQuality(this.listquality2)
  }
  ngOnInit(): void {
  }
}
