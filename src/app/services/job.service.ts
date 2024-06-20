import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private collection = 'jobs';

  constructor(private firestore: AngularFirestore) {}

  getJobs(): Observable<Job[]> {
    return this.firestore
      .collection<Job>(this.collection)
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as Job;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }
  getJobById(id: string): Observable<Job> {
    return this.firestore
      .doc<Job>(`${this.collection}/${id}`)
      .snapshotChanges()
      .pipe(
        map((action) => {
          const data = action.payload.data() as Job;
          const docId = action.payload.id;
          return { id: docId, ...data };
        })
      );
  }

  addJob(job: Job): Observable<void> {
    return new Observable<void>((observer) => {
      this.firestore
        .collection(this.collection)
        .add(job)
        .then(() => {
          observer.next();
          observer.complete();
        });
    });
  }

  updateJob(job: Job): Observable<void> {
    return new Observable<void>((observer) => {
      this.firestore
        .doc(`${this.collection}/${job.id}`)
        .update(job)
        .then(() => {
          observer.next();
          observer.complete();
        });
    });
  }

  deleteJob(id: string): Observable<void> {
    return new Observable<void>((observer) => {
      this.firestore
        .doc(`${this.collection}/${id}`)
        .delete()
        .then(() => {
          observer.next();
          observer.complete();
        });
    });
  }
}
