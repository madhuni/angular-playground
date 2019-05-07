import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { DISABLED } from '../../../node_modules/@angular/forms/src/model';


@Component({
  selector: 'app-cva-playground',
  templateUrl: './cva-playground.component.html',
  styleUrls: ['./cva-playground.component.css']
})
export class CvaPlaygroundComponent implements OnInit {

  /**
   * In this component we are going to use Reactive form with the Angular component
   * using the bridge called "ControlValueAccessor".
  */

  sampleForm: FormGroup;

  cities: any[];

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.cities = [
      {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
      {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
      {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
      {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
      {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
    ];

    this.setupForm();
  }

  setupForm() {
    this.sampleForm = this.fb.group({
      name: this.fb.control(''),
      email: this.fb.control(''),
      location: this.fb.control({value: '', disabled: false}, [Validators.required])
    });
  }

  get f() {
    return this.sampleForm.controls;
  }

  validateLocation() {
    const value = this.f.location.value;
    if(value === 'New York') {
      this.f.location.disable();
    }
  }

  save(form: FormGroup) {
    console.log(form, this.f.location.value);
  }

}
