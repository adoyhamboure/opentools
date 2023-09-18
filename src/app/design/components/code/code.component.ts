import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { ToastrService } from 'ngx-toastr';
import {Clipboard} from '@angular/cdk/clipboard';


@Component({
  selector: 'app-code',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent {
  @Input() public code!: string;

  private readonly toastr = inject(ToastrService);

  private readonly clipboard = inject(Clipboard)

  public onCopy(): void {
    this.clipboard.copy(this.code);
    this.toastr.success('Copied to clipboard', 'Success', {timeOut: 1000});
  }
}
