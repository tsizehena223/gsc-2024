import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements AfterViewInit, OnInit {
  @ViewChild('element') element!: ElementRef
  @ViewChild('listquality') listquality!: ElementRef
  @ViewChild('listquality2') listquality2!: ElementRef
  @ViewChild('listquality3') listquality3!: ElementRef
  @ViewChild('listquality4') listquality4!: ElementRef
  @ViewChild('listquality5') listquality5!: ElementRef
  @ViewChild('listquality6') listquality6!: ElementRef
  @ViewChild('myquality') myquality!: ElementRef
  @ViewChild('myactivity') myactivity!: ElementRef
  @ViewChild('myprofession') myprofession!: ElementRef
  @ViewChild('test') testContainer!: ElementRef
  @ViewChild('test1') testContainer1!: ElementRef
  @ViewChild('test2') testContainer2!: ElementRef

  constructor(
    private renderer: Renderer2,
    private service: ActivityService,
    private router: Router
  ) { }

  test_nombre_quality(container: any, identiant: string, test: any) {
    const div = container.nativeElement.querySelector(`#${identiant}`);
    const elt = div.querySelectorAll('.elt');
    if (elt.length <= 4) { // si le npmbre de qualite dans le card est a 3
      this.renderer.addClass(div, 'btn_disable') // on ajoute la calsse btn_disable a cette element
      const alert = this.renderer.createElement('span') // on cre une elt span
      alert.innerHTML = `3 Qualité  à chaque type <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
      </svg>`
      this.renderer.addClass(alert, 'alert')// on ajoute une classe alerte sur les span
      this.renderer.appendChild(test.nativeElement, alert) //  on attache l'elt a son parent
      setTimeout(() => { // on attend 3s on supprimer l'elt
        this.renderer.removeChild(test.nativeElement, alert)
      }, 3000)
    }
  }

  selecteQuality(container: any, choice: any, error: any): void {
    container.nativeElement.querySelectorAll('.li').forEach((container_quality: any) => {
      const id = container_quality.id;
      container_quality.querySelectorAll('.elt').forEach((quality: any) => {
        quality.addEventListener('click', () => {
          this.test_nombre_quality(container, id, error)
          const test_myquality = choice.nativeElement.querySelectorAll('span');
          if (!(test_myquality.length >= 12)) {
            const text = quality.innerHTML
            this.registerQuality(text, choice);
            this.renderer.removeChild(container_quality, quality)
          }
        })
      })
    })
  }

  registerQuality(quality: string, resultat: any): void {
    const newQuality = this.renderer.createElement('span');
    const text = this.renderer.createText(`${quality}`);
    this.renderer.appendChild(newQuality, text);
    this.renderer.addClass(newQuality, 'my_qualityClass');
    this.renderer.appendChild(resultat.nativeElement, newQuality)
    const test = resultat.nativeElement.querySelectorAll('span')
    if (resultat == this.myprofession && test.length == 12) {
      this.router.navigateByUrl('/osp/result')
    }

  }
  ngAfterViewInit(): void {
    this.selecteQuality(this.listquality, this.myquality, this.testContainer)
    this.selecteQuality(this.listquality2, this.myquality, this.testContainer)
    this.selecteQuality(this.listquality3, this.myactivity, this.testContainer1)
    this.selecteQuality(this.listquality4, this.myactivity, this.testContainer1)
    this.selecteQuality(this.listquality5, this.myprofession, this.testContainer2)
    this.selecteQuality(this.listquality6, this.myprofession, this.testContainer2)
  }

  // Firebase
  activities1: any = [];
  activities2: any = [];
  activities3: any = [];
  activities4: any = [];

  qualities1: any = [];
  qualities2: any = [];
  qualities3: any = [];
  qualities4: any = [];

  refreshActivities() {
    this.service.getActivities1().subscribe((res) => {
      this.activities1 = res;
    })
    this.service.getActivities2().subscribe((res) => {
      this.activities2 = res;
    })
    this.service.getActivities3().subscribe((res) => {
      this.activities3 = res;
    })
    this.service.getActivities4().subscribe((res) => {
      this.activities4 = res;
    })

    this.service.getQualities1().subscribe((res) => {
      this.qualities1 = res;
    })
    this.service.getQualities2().subscribe((res) => {
      this.qualities2 = res;
    })
    this.service.getQualities3().subscribe((res) => {
      this.qualities3 = res;
    })
    this.service.getQualities4().subscribe((res) => {
      this.qualities4 = res;
    })

  }

  ngOnInit(): void {
    this.refreshActivities();
  }
}
