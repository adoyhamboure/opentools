import { Component, inject } from '@angular/core';
import { ThemeSwitchComponent } from '@design/components/theme-switch/theme-switch.component';
import { NavigationService } from '@shared/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [ThemeSwitchComponent]
})
export class HeaderComponent {
  private readonly navigation = inject(NavigationService);

  public onMenuClick(): void {
    this.navigation.toggle();
  }
}
