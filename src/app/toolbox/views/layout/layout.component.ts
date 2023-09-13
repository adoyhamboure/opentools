import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '@shared/components/header/header.component';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [NavbarComponent, HeaderComponent]
})
export class LayoutComponent implements OnInit {
  public ngOnInit(): void {
      console.log('LayoutComponent')
  }
}
