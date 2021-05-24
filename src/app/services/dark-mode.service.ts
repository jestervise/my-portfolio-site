import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  isDarkMode = false;

  constructor() { 
  }

  init(){
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      this.isDarkMode = true;
    } else {
      document.documentElement.classList.remove('dark')
      this.isDarkMode = false;
    }

    return this.isDarkMode;
  }

  getIsDarkMode(){
    return this.isDarkMode;
  }

  setIsDarkMode(darkMode:boolean){
    if(darkMode){
      this.isDarkMode = true;
    }else{
      this.isDarkMode = false;
    }

    localStorage.theme = this.isDarkMode?'dark':'light';
    this.isDarkMode? document.documentElement.classList.add('dark'): document.documentElement.classList.remove('dark');
    return this.isDarkMode;
  }
}
