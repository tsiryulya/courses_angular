import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Student} from './student';
import {Timer} from './timer';
import {Data} from '@angular/router';

const
  SEC = 1000,
  MIN = SEC * 60,
  HOUR = MIN * 60,
  DAY = HOUR * 24;

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})

export class StudentComponent implements OnInit, OnDestroy {

  student: Student;
  timer: Timer;

  constructor() {
    this.student = new Student(
      'Анастасия Цирюльникова',
      new Date(2018, 10, 26, 0, 0, 0),
      'Учусь в СФУ, ИКИТ на направлении программная инженерия, закончила 3 курс.\n' +
      '        Занималась вокалом в школе и институте. Закончила художественную школу. Люблю фотографировать.\n' +
      '        Мне нравится изучать что-то новое, не стоять на месте. Я трюдолюбива и очень упорна\n' +
      '        (порой это является и моим минусом). В будущем хочу стать профессионалом в своём деле.'
    );
    this.timer = new Timer(
      0, 0, 0, 0, 0
    );
  }

  ngOnInit() {
    this.getTime();
  }

  getTime() {
    this.timer.intervalID = setInterval(() => {
      const dif = +this.student.birthDate - +new Date();
      this.timer.days = dif / DAY | 0;
      this.timer.hours = (dif - this.timer.days * DAY) / HOUR | 0;
      this.timer.min = (dif - this.timer.days * DAY - this.timer.hours * HOUR) / MIN | 0;
      this.timer.sec = (dif - this.timer.days * DAY - this.timer.hours * HOUR - this.timer.min * MIN) / SEC | 0;
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer.intervalID);
  }
}
