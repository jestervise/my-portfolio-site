import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  locale= '';
  LOCALE_LIST = ['en-US','cn'];
  isMuted = false;

  constructor(private darkModeService:DarkModeService) { }

  ngOnInit(): void {
    const language = navigator.languages.find((l)=>l.includes("en") || l.includes("zh") || l.includes("cn"));
    this.locale =language?language:this.LOCALE_LIST[0];
  }

  switchLocale(){
    this.locale = this.locale.includes("en")?this.LOCALE_LIST[1]:this.locale = this.LOCALE_LIST[0];
  }

  switchMuteStatus(){
    this.isMuted = !this.isMuted;
  }

  getDarkMode(){
    return this.darkModeService.getIsDarkMode();
  }
}
