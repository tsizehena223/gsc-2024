import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private fs: Firestore) { }

  getActivities1() {
    let activityCollection = collection(this.fs, 'activities1');
    return collectionData(activityCollection, { idField: 'id' });
  }
  getActivities2() {
    let activityCollection = collection(this.fs, 'activities2');
    return collectionData(activityCollection, { idField: 'id' });
  }
  getActivities3() {
    let activityCollection = collection(this.fs, 'activities3');
    return collectionData(activityCollection, { idField: 'id' });
  }
  getActivities4() {
    let activityCollection = collection(this.fs, 'activities4');
    return collectionData(activityCollection, { idField: 'id' });
  }

  getQualities1() {
    let activityCollection = collection(this.fs, 'qualities1');
    return collectionData(activityCollection, { idField: 'id' });
  }
  getQualities2() {
    let activityCollection = collection(this.fs, 'qualities2');
    return collectionData(activityCollection, { idField: 'id' });
  }
  getQualities3() {
    let activityCollection = collection(this.fs, 'qualities3');
    return collectionData(activityCollection, { idField: 'id' });
  }
  getQualities4() {
    let activityCollection = collection(this.fs, 'qualities4');
    return collectionData(activityCollection, { idField: 'id' });
  }

}
