import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  
  private darkMode = new BehaviorSubject<boolean>(false);

  darkMode$ = this.darkMode.asObservable();

  changeToDarkMode(isDarkMode:boolean){
    this.darkMode.next(isDarkMode);
    localStorage.theme = isDarkMode?'dark':'light';
    isDarkMode? document.documentElement.classList.add('dark'): document.documentElement.classList.remove('dark');
  }

  constructor() { 
  }

  init(){
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      this.darkMode.next(true);
      return true;
    } else {
      document.documentElement.classList.remove('dark');
      return false;
    }
  }
}
