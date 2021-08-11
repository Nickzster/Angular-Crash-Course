import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'angular-crash-course';
  showAddTask: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((isBeingDisplayed) => (this.showAddTask = isBeingDisplayed));
  }

  ngOnInit(): void {
    // Executes whenever the component is loaded.
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
    console.log('Toggle');
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
