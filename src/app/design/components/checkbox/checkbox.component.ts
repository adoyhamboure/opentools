import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, FormsModule, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CheckboxComponent,
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor  {
  @Input() public disabled: boolean | string = false;

  @Input() public required: boolean | string = false;

  @Input() public checked: boolean | string = false;
  
  private _value = false;

  public get value(): boolean {
    return this._value;
  }

  public set value(v: boolean) {
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

  private onChange: (_: any) => void = (_: any) => {};

  private onTouch = (): void => {};

  public registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  public writeValue(v: boolean): void {
    this._value = v;
    this.onChange(v);
  }

  public change(model: boolean): void {
    this.writeValue(model);
  }

}
