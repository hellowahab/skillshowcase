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
    const newPost: Post = {
      title: this.CreatePostInput.nativeElement.value,
      author: 'Gemini',
      createdDate: new Date(),
      content: this.CreatePostInput.nativeElement.value,
      id: 0,
      privacyLevel: 'public',
      UserId: 1
    }

    this.postService.savePost(newPost).subscribe(
      (response: any) => {
        console.log(response);        
      },
      (error: any) => {
        console.log(error);
      }    
    );
  }
}
