import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Job } from '../models/job.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  jobs: any;
  constructor(private dialog: MatDialog, private jobService: JobService) {}
  title = 'job-posting-app';
  isModalOpen = false;

  ngOnInit() {
    this.jobService.getJobs().subscribe((jobs) => (this.jobs = jobs));
  }

  deleteJob(id: any) {
    console.log('id', id);
    this.jobService.deleteJob(id).subscribe({
      next: () => console.log('Job deleted successfully'),
      error: (err) => console.error('Error deleting job:', err),
    });
  }
  updateJobModal(job: any) {
    this.dialog.open(ModalComponent, {
      width: '400px',
      data: {
        job: job,
      },
    });
  }
  openModal(): void {
    this.dialog.open(ModalComponent, {
      width: '400px',
    });
  }
}
