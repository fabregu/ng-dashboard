import { ChangeDetectionStrategy, Component, inject, ViewChild } from '@angular/core';
import { MaterialModule } from '../../ui/material.module';
import { SettingsMenuComponent } from "../settings-menu/settings-menu.component";
import { RouterOutlet } from '@angular/router';
import { DrawerMenuComponent } from "../drawer-menu/drawer-menu.component";
import { MatDrawer } from '@angular/material/sidenav';
import { ScreenSizeService } from '../../services/screen-size.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MaterialModule, SettingsMenuComponent, RouterOutlet, DrawerMenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {
  @ViewChild('drawer') drawer!: MatDrawer;
  private readonly screenSizeService = inject(ScreenSizeService);

  isMobile = this.screenSizeService.isMobile;

  onNavigate() {
    if (this.isMobile()) {
      this.drawer.close();
    }
  }
}