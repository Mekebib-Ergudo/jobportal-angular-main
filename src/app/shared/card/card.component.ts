import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-jobList',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class JobList {
  @Input() job: any;
  @Input() isAdmin: boolean = false;
  @Output() onDelete = new EventEmitter<string>();
  @Output() onUpdate = new EventEmitter<string>();

  deleteJobPost(id: string) {
    this.onDelete.emit(id);
  }
  updateJobPost(job: any) {
    this.onUpdate.emit(job);
  }
}
