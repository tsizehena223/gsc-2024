import { Component } from '@angular/core';
import { UniversityService } from 'src/app/services/university.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss']
})
export class UniversityComponent {
  title = 'University';

  constructor(private service: UniversityService) { }

  universities: any = [];

  refreshUniversities() {
    this.service.getUniversities().subscribe((res) => {
      this.universities = res;
    })
  }

  Univ() {
    this.universities = ["ISPM", "ESTI"];
  }

  ngOnInit() {
    this.Univ();
  }
}
