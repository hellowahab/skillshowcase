import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LeftSidebarComponent } from "./left-sidebar/left-sidebar.component";
import { FeedComponent } from "./feed/feed.component";
import { RightSidebarComponent } from "./right-sidebar/right-sidebar.component";
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LeftSidebarComponent, FeedComponent, RightSidebarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'skill showcase';
}
