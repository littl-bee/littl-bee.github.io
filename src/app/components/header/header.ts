import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [MatMenuModule, MatButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  selectedLanguage = 'ENG';

  selectLanguage(lang: string) {
    this.selectedLanguage = lang === 'en' ? 'ENG' : 'ESP';
    // Add your language switching logic here
    console.log('Language changed to:', lang);
  }
}
