import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-event-list-page',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './event-list-page.component.html',
  styleUrl: './event-list-page.component.css'
})
export class EventListPageComponent {

}
