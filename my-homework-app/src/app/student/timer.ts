export class Timer {
  intervalID: number;
  sec: number;
  min: number;
  hours: number;
  days: number;

  constructor(intervalID: number, sec: number, min: number, hours: number, days: number) {
    this.intervalID = intervalID;
    this.sec = sec;
    this.min = min;
    this.hours = hours;
    this.days = days;
  }
}
