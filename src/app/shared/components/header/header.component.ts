import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeSwitchComponent } from '@design/components/theme-switch/theme-switch.component';
import { NavigationService } from '@shared/services/navigation.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [ThemeSwitchComponent, RouterModule],
})
export class HeaderComponent {
  private readonly navigation = inject(NavigationService);


  public onMenuClick(): void {
    this.navigation.toggle();
  }
}
