import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private fs: Firestore) { }

  getActivities() {
    let activityCollection = collection(this.fs, 'activities');
    return collectionData(activityCollection, { idField: 'id' });
  }

  addActivity(name: string) {
    let data = { name: name };
    let activityCollection = collection(this.fs, 'activities');
    return addDoc(activityCollection, data);
  }
}
