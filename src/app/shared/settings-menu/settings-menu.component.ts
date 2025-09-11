import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MaterialModule } from '../../ui/material.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-settings-menu',
  standalone: true,
  imports: [MaterialModule, RouterLink],
  templateUrl: './settings-menu.component.html',
  styleUrl: './settings-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsMenuComponent {}
