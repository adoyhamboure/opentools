import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewSeparatorComponent } from '@design/components/view-separator/view-separator.component';
import { opacityAnimation } from '@design/animations/opacity';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from '@design/components/checkbox/checkbox.component';
import { SliderComponent } from '@design/components/slider/slider.component';
import { NgxColorsModule } from 'ngx-colors';
import { SelectComponent } from '@design/components/select/select.component';
import { SelectItem } from '@design/interfaces/SelectItem';
import { CodeComponent } from '@design/components/code/code.component';

@Component({
  selector: 'app-border-outline',
  standalone: true,
  imports: [
    CommonModule, 
    ViewSeparatorComponent, 
    FormsModule, 
    CheckboxComponent,
    SliderComponent,
    NgxColorsModule,
    SelectComponent,
    CodeComponent,
  ],
  templateUrl: './border-outline.component.html',
  styleUrls: ['./border-outline.component.scss'],
  animations: [opacityAnimation],
})
export class BorderOutlineComponent {

  public individualBorders = false;
  
  public allBorderWidth = 1;

  public color = 'rgb(0, 0, 0)';

  public boxColor = 'rgb(30, 136, 229)';

  public boxContainerColor = 'rgb(255, 255, 255)';

  public opacity = 100;

  public borderTypes: SelectItem[] = [
    { label: 'Solid', value: 'solid' },
    { label: 'Dashed', value: 'dashed' },
    { label: 'Dotted', value: 'dotted' },
    { label: 'Double', value: 'double' },
    { label: 'Groove', value: 'groove' },
    { label: 'Ridge', value: 'ridge' },
    { label: 'Inset', value: 'inset' },
    { label: 'Outset', value: 'outset' },
    { label: 'Hidden', value: 'hidden' },
  ];

  public type = this.borderTypes[0].value;

  public get colorWithOpacity(): string {
    return `${this.color.slice(0, -1)}, ${this.opacity / 100})`;
  }

  public get code(): string {
    return `border: ${`${this.allBorderWidth}px ${this.type} ${this.colorWithOpacity}`}`;
  }

  public onResetAll(): void {
    this.individualBorders = false;
    this.allBorderWidth = 1;
    this.color = 'rgb(0, 0, 0)';
    this.boxColor = 'rgb(30, 136, 229)';
    this.boxContainerColor = 'rgb(255, 255, 255)';
    this.opacity = 100;
    this.type = this.borderTypes[0].value;
  }

  public log(e:any): void {
    console.log(e);
    console.log('type', this.type);

  }
}
