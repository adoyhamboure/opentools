import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public open = new Subject<boolean>();
  
  private isOpen = true;

  public toggle(): void {
    this.isOpen = !this.isOpen;
    this.open.next(this.isOpen);
  }
}
