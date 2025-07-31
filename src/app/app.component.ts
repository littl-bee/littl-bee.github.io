import { Component } from '@angular/core';
import { About } from './pages/about/about';
import { Header } from './components/header/header';
import { Navigation } from './components/navigation/navigation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [About, Header, Navigation],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}


