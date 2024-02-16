import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  constructor(private fs: Firestore) { }

  getUniversities() {
    let universityCollection = collection(this.fs, 'universities');
    return collectionData(universityCollection, { idField: 'id' });
  }
}
