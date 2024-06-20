import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Job } from 'src/app/models/job.model';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'admin-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Output() onAddJob = new EventEmitter<Job>();
  @Output() onUpdateJob = new EventEmitter<Job>();
  job: any;

  constructor(
    private jobService: JobService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.job = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
      company: new FormControl(null, [Validators.required]),
      location: new FormControl(null, [Validators.required]),
      mode: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
    });

    if (this.data.job) {
      this.job.patchValue({
        title: this.data.job.title,
        description: this.data.job.description,
        company: this.data.job.company,
        location: this.data.job.location,
        mode: this.data.job.mode,
        category: this.data.job.category,
      });
    }
  }

  onPostJob() {
    this.jobService.addJob(this.job.value).subscribe({
      next: () => console.log('Job added successfully'),
      error: (err) => console.error('Error adding job:', err),
    });
  }
  updateJob() {
    this.jobService
      .updateJob({ ...this.job.value, id: this.data.job.id })
      .subscribe({
        next: () => console.log('Job updated successfully'),
        error: (err) => console.error('Error updating job:', err),
      });
  }
}
