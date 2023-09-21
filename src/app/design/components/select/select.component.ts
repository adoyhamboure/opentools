import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl, 
  ControlValueAccessor, 
  FormsModule, 
  NG_VALUE_ACCESSOR, 
  ValidationErrors } from '@angular/forms';
import { SelectItem } from '@design/interfaces/SelectItem';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  @Input() public list: SelectItem[] = [];

  public control!: AbstractControl;

  private _value = '';

  public get value(): string {
    return this._value;
  }

  public set value(v: string) {
    if (v === this._value) {
      return;
    }
    this._value = v;
    this.onChange(v);
  }

  public id!: string;

  constructor() {
    this.id = `input_${Math.floor((Math.random() * 10000) + 1)}`;
  }

  public onChange: (_: any) => void = (_: any) => {};

  public onTouch = (): void => {};

  public registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  public writeValue(v: string): void {
    this._value = v;
    this.onChange(v);
  }

  public change(model: string): void {
    this.writeValue(model);
  }

  public validate(control: AbstractControl): ValidationErrors | null {
    this.control = control;
    
    return null;
  }
}
