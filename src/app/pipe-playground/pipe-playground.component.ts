import { Component, OnInit } from '@angular/core';

import { User } from './models/user.model';

@Component({
  selector: 'app-pipe-playground',
  templateUrl: './pipe-playground.component.html',
  styleUrls: ['./pipe-playground.component.css']
})
export class PipePlaygroundComponent implements OnInit {

  sortType: string = 'asc';
  sortKey: string = 'age';

  list: User[] = [
    {
      name: 'Kanishka Mohan Madhuni',
      age: 26,
      role: 'Frontend Engineer',
      company: 'Soroco'
    },
    {
      name: 'Aakash Hasija',
      age: 23,
      role: 'Software Engineer',
      company: 'Soroco'
    },
    {
      name: 'Akshat Malik',
      age: 21,
      role: 'Software Engineer',
      company: 'Soroco'
    },
    {
      name: 'Sid bro',
      age: 30,
      role: 'Software Engineer',
      company: 'Soroco'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onSortList() {
    if (this.sortType === 'asc') {
      this.sortType = 'desc';
    } else {
      this.sortType = 'asc'
    }
  }

}
