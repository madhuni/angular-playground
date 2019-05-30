import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-playground',
  templateUrl: './directive-playground.component.html',
  styleUrls: ['./directive-playground.component.css']
})
export class DirectivePlaygroundComponent implements OnInit {

  searchQuery: string;

  list: User[] = [
    {
      name: 'Kanishka Mohan Madhuni',
      age: 26,
      role: 'Senior Frontend Engineer',
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
    },
    {
      name: 'Shankar Natarajan',
      age: 30,
      role: 'Director of Product Engineering',
      company: 'Soroco'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onSearch(query: string) {
    this.searchQuery = query;
    if (this.searchQuery.length) {
      this.searchAPI(this.searchQuery);
    }
  }

  searchAPI(query: string) {
    console.log(`Search API is called with query ${query}`);
  }
}

export interface User {
  name: string;
  age: number;
  role: string;
  company: string;
}
