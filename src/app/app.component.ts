import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { setHours, setMinutes } from 'date-fns';
import { colors } from './colors';
import { CalendarHeaderComponent } from './calendar-header.component';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  view: string = 'day';
  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      title: 'No event end date',
      start: setHours(setMinutes(new Date(), 0), 3),
      color: colors.blue
    },
    {
      title: 'No event end date',
      start: setHours(setMinutes(new Date(), 0), 5),
      color: colors.yellow
    }
  ];
}
