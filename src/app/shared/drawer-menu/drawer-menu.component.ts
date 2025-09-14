import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { MaterialModule } from '../../ui/material.module';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-drawer-menu',
  standalone: true,
  imports: [MaterialModule, CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './drawer-menu.component.html',
  styleUrl: './drawer-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerMenuComponent {
  @Input() isMobile = false;
  @Output() itemClicked = new EventEmitter<void>();

  subMenuOpen = signal<string | null>(null);

  toggleSubMenu(menu: string) {
    this.subMenuOpen.set(this.subMenuOpen() === menu ? null : menu);
  }

  handleItemClick() {
    if (this.isMobile) {
      this.itemClicked.emit();
    }
  }
}