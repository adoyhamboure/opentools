import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { HeaderComponent } from '@shared/components/header/header.component';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { NavigationService } from '@shared/services/navigation.service';

@UntilDestroy()
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [CommonModule, NavbarComponent, HeaderComponent, RouterModule],
})
export class LayoutComponent implements OnInit {
  private readonly navigation = inject(NavigationService);

  public open = true;

  public ngOnInit(): void {
    this.navigation.open.pipe(untilDestroyed(this)).subscribe((open) => {
      this.open = open;
    });
  }
}
