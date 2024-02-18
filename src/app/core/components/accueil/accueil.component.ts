import { AfterViewInit, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent{

  constructor(
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef
    ){}
  // =========== Declaration=============


  
  // ============= Methode ============

  signInWithGoogle() {
    console.log("Google clicked");
  }
  login(){
    this.router.navigate(['/osp/login']);
  }


}
