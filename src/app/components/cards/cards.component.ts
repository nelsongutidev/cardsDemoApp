import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { data } from 'src/app/data';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  public persons = data;
  public genders = [
    {
      id: 0,
      value: '👦🏻',
    },
    {
      id: 1,
      value: '👧',
    },
    {
      id: 2,
      value: '👦🏻+👧',
    },
  ];
  public selectedGender = '👦🏻+👧';
  public allPersonsHaveGender: boolean;
  constructor() {}

  ngOnInit(): void {
    this.allPersonsHaveGender = data.every(({ gender }) => gender);
    console.log('this.allPersonsHaveGender: ', this.allPersonsHaveGender);
  }

  filter(event) {
    console.log('event: ', event.target.value);
    this.persons =
      event.target.value === '👦🏻+👧'
        ? data
        : data.filter(({ gender }) => gender === event.target.value);
  }
  getBG(gender) {
    if (!this.allPersonsHaveGender) {
      return '';
    }
    return gender === '👧' ? '#fadadd' : '#afeeee';
  }
}
