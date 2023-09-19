import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewSeparatorComponent } from '@design/components/view-separator/view-separator.component';
import { opacityAnimation } from '@design/animations/opacity';

@Component({
  selector: 'app-changelogs',
  standalone: true,
  imports: [CommonModule, ViewSeparatorComponent],
  templateUrl: './changelogs.component.html',
  styleUrls: ['./changelogs.component.scss'],
  animations: [opacityAnimation],
})
export class ChangelogsComponent {

}
