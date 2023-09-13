import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Mode } from '@shared/enums/Mode';

@Component({
  selector: 'app-theme-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent {

  public currentMode: Mode = Mode.LIGHT;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  public onToggle(): void 
  {
    console.log('toggle')
    this.document.body.classList.toggle(this.currentMode);
    if (this.currentMode === Mode.LIGHT) {
      this._updateCurrentMode(Mode.DARK);
    } else {
      this._updateCurrentMode(Mode.LIGHT);
    }
  }

  private _updateCurrentMode(mode: Mode) {
    this.currentMode = mode;
    this.document.body.classList.toggle(mode);

  }
}
