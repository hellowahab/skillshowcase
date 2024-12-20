import { Component, ElementRef, ViewChild } from '@angular/core';
import { PostComponent } from "./post/post.component";
import { PostService } from '../services/post.service';
import { NgFor } from '@angular/common';
import { GeminiGoogleAiService } from '../services/gemini-google-ai.service.ts.service';
import { Post } from './post/models/post.model';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [PostComponent, NgFor],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {
  @ViewChild('CreatePostInput') CreatePostInput!: ElementRef;
  posts: any = []; // Array of posts
  errorMessage: string = ''; // Error message to display

  // Constructor to inject the service
  constructor(private postService: PostService,
    private geminiGoogleAiService: GeminiGoogleAiService
  ) { }

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

  rewriteWithAI(){
    console.log(this.CreatePostInput.nativeElement.value);
    this.askGemini(this.CreatePostInput.nativeElement.value);
  }

  askGemini(question: string){
    this.geminiGoogleAiService.AskGemini(question)
    .then((response: string) => {
      console.log(response);
      this.CreatePostInput.nativeElement.value = response;
    }
    )};

    savePost() {
      const post: Post = {
        Content: this.CreatePostInput.nativeElement.value,
        CreatedAt: new Date(),
        MediaURL: '',
        PostId: 0,
        UserId: 1,
        PrivacyLevel: 'Public'
      }
      this.postService.savePost(post).subscribe({
        next: (response: any) => {
          this.getPosts();
          this.CreatePostInput.nativeElement.value = '';
        },
        error: (error: any) => {
          this.errorMessage = error;
          console.log(error); 
        }
      });
    }
}
