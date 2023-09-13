import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { NavigationService } from '@shared/services/navigation.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class NavbarComponent implements OnInit {
  private readonly navigation = inject(NavigationService);

  public open = true;

  public ngOnInit(): void {
    this.navigation.open.pipe(untilDestroyed(this)).subscribe((open) => {
      this.open = open;
    });
  }
}
