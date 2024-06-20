import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { JobService } from '../../services/job.service';
import { Job } from 'src/app/models/job.model';

@Component({
  selector: 'app-client-jobDetail',
  templateUrl: './jobdetail.component.html',
  styleUrls: ['./jobdetail.component.css'],
})
export class JobDetail {
  job: Job | any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private jobService: JobService
  ) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) =>
      this.jobService
        .getJobById(params['id'])
        .subscribe((data) => (this.job = data))
    );
  }
}
