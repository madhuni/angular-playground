import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DropdownFilterComponent),
    multi: true
  }]
})

export class DropdownFilterComponent implements ControlValueAccessor {
  
  @Input() options: any[];
  @Input() placeholder: string;

  value: any; // value which is coming from the reactive from 'formControlName'
  onInputChanged: () => void; // callback function to listen 'onChange' event
  onInputBlurred: () => void; // callback function to listen 'onBlur' event
  disabled: boolean; // disabled property

  constructor() { }

  /**
   * After implementing the ControlValueAccesor, we will always need to override the methods provided
   * by the interface. Below see the example how we can override the methods.
  */

  /* To write the value input field */
  writeValue(value: string): void {
    console.log(value);
    this.value = value ? value : '';
  }

  /* To listen to the 'onChange' event */
  registerOnChange(fn: any): void {
    this.onInputChanged = fn;
  }

  /* To update the Touched property of reactive form */
  registerOnTouched(fn: any): void {
    this.onInputBlurred = fn;
  }

  /* To update the disabled property on the input */
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit() {
  }

}
