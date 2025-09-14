import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MaterialModule } from '../../ui/material.module';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule, CommonModule, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  modules = [
    {
      title: 'Admins',
      description: 'View your dashboard with key metrics and insights asda sadsasdasdas asdf asdf asdf asdfas asdf asdfas asdf asdf.',
      traits: ['charming', 'graceful', 'sassy'],
      route: '/dashboard/admin/admins',
    },
    {
      title: 'Users',
      description: 'View your dashboard with key metrics and insights.',
      traits: ['fluffy', 'alert', 'intelligent'],
      route: '/dashboard/user/users'
    },
    {
      title: 'Editors',
      description: 'View your dashboard with key metrics and insights.',
      traits: ['charming', 'graceful', 'sassy'],
      route: '/dashboard/editor/editors'
    },
    {
      title: 'Viewers',
      description: 'View your dashboard with key metrics and insights.',
      traits: ['fluffy', 'alert', 'intelligent'],
      route: '/dashboard/viewer/viewers'
    },
    {
      title: 'Cars',
      description: 'View your dashboard with key metrics and insights.',
      traits: ['charming', 'graceful', 'sassy'],
      route: '/dashboard/cars/cars'
    },
    {
      title: 'Articles',
      description: 'View your dashboard with key metrics and insights.',
      traits: ['charming', 'graceful', 'sassy'],
      route: '/dashboard/articles/articles'
    }
  ]
}
