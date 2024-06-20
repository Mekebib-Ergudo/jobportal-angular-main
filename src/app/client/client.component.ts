import { Component } from '@angular/core';
import { JobService } from '../services/job.service';
import { Job } from '../models/job.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent {
  jobs: Job[] | any;
  constructor(private jobService: JobService) {}
  ngOnInit() {
    this.jobService.getJobs().subscribe((jobs) => (this.jobs = jobs));
  }
}
