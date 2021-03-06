import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isDarkMode:boolean= false;

  constructor(private darkModeService:DarkModeService) { }

  ngOnInit(): void {
    this.isDarkMode = this.darkModeService.init();
    this.darkModeService.darkMode$.subscribe((mode)=>{
      this.isDarkMode = mode;
    })
  }

  scrollTo(link:string){
    
    console.log("scroll to contact")
  }

  switchTheme(){
    this.darkModeService.changeToDarkMode(!this.isDarkMode);
  }

}
