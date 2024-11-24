import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LeftSidebarComponent } from "./left-sidebar/left-sidebar.component";
import { FeedComponent } from "./feed/feed.component";
import { RightSidebarComponent } from "./right-sidebar/right-sidebar.component";
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
// import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, CommonModule ,RouterOutlet, HeaderComponent, LeftSidebarComponent, FeedComponent, RightSidebarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Skill Showcase';

  // constructor(private postService: PostService) { }

  // ngOnInit() {
  //   this.postService.testService().subscribe(
  //     (data) => console.log(data),
  //     (error) => console.error(error)
  //   );
  // }
}
