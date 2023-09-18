import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, ControlValueAccessor, Validator, AbstractControl, ValidationErrors, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SliderComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: SliderComponent,
      multi: true,
    },
  ],
})
export class SliderComponent implements ControlValueAccessor, Validator  {
  @Input() public min: number = 0;

  @Input() public max: number = 100;

  public control!: AbstractControl;

  private _value: string | number = '';

  public get value(): string | number {
    return this._value;
  }

  public set value(v: string | number) {
    if (v === this._value) {
      return;
    }
    this._value = v;
    this.onChange(v);
  }

  private onChange: (_: any) => void = (_: any) => {};

  public onTouch = (): void => {};

  public registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  public writeValue(v: string | number): void {
    this._value = v;
    this.onChange(v);
  }

  public change(model: string | number): void {
    this.writeValue(model);
  }

  public validate(control: AbstractControl): ValidationErrors | null {
    this.control = control;
    
    return null;
  }

}
