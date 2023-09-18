import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewSeparatorComponent } from '@design/components/view-separator/view-separator.component';
import { SliderComponent } from '@design/components/slider/slider.component';
import { FormsModule } from '@angular/forms';
import { CheckboxComponent } from '@design/components/checkbox/checkbox.component';
import { opacityAnimation } from '@design/animations/opacity';
import { CodeComponent } from '@design/components/code/code.component';
import { NgxColorsModule } from 'ngx-colors';


@Component({
  selector: 'app-box-shadow-generator',
  standalone: true,
  imports: [
    CommonModule, 
    ViewSeparatorComponent, 
    SliderComponent, 
    FormsModule, 
    CheckboxComponent, 
    CodeComponent, 
    NgxColorsModule
  ],
  templateUrl: './box-shadow-generator.component.html',
  styleUrls: ['./box-shadow-generator.component.scss'],
  animations: [opacityAnimation]
})
export class BoxShadowGeneratorComponent {
  public shiftRight = 0;

  public shiftDown = 0;

  public spread = 0;

  public blur = 0;

  public opacity = 100;

  public inset = false;

  public color = 'rgb(0, 0, 0)';

  public boxColor = 'rgb(30, 136, 229)';

  public boxContainerColor = 'rgb(255, 255, 255)';

  public get colorWithOpacity(): string {
    return `${this.color.slice(0, -1)}, ${this.opacity / 100})`;
  }

  public get code(): string {
    return `box-shadow:${this.inset ? ' inset' : ''} ${this.shiftRight}px ${this.shiftDown}px ${this.blur}px ${this.spread}px ${this.colorWithOpacity});
-webkit-box-shadow:${this.inset ? ' inset' : ''} ${this.shiftRight}px ${this.shiftDown}px ${this.blur}px ${this.spread}px ${this.colorWithOpacity};`;
  }
}
