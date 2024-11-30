import { Component } from '@angular/core';
import { PostComponent } from "./post/post.component";
import { PostService } from '../services/post.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [PostComponent, NgFor],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {
  posts: any = []; // Array of posts
  errorMessage: string = ''; // Error message to display

  // Constructor to inject the service
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  // Function to get the posts
  getPosts() {
    this.postService.getPosts().subscribe({
      next: (response: any) => {
        this.posts = response;
      },
      error: (error: any) => {
        this.errorMessage = error;
      }
    })
  }
}
