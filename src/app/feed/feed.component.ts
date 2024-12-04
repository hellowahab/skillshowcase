import { Component, ElementRef, ViewChild, ɵprovideZonelessChangeDetection } from '@angular/core';
import { PostComponent } from "./post/post.component";
import { PostService } from '../services/post.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GeminiGoogleAiService } from '../services/gemini-google-ai.service.ts.service';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [PostComponent, NgFor, FormsModule],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {
  @ViewChild('CreatePostInput') CreatePostInput!: ElementRef;
  posts: any = []; // Array of posts
  errorMessage: string = ''; // Error message to display
  textValue: string = ''; // Text value to bind with the input field

  // Constructor to inject the service
  constructor(private postService: PostService,
           private genAiService: GeminiGoogleAiService) { }

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

  rewriteWithAIClick() {
    console.log(this.CreatePostInput.nativeElement.value); 
    this.askGemini(this.CreatePostInput.nativeElement.value);
    //this.CreatePostInput.nativeElement.value = this.askGemini(this.CreatePostInput.nativeElement.value);
    //console.log(this.CreatePostInput.nativeElement.value); 
  }

  askGemini(text: string) {
    this.genAiService.askGemini(text).then(
      (result: string) => {
        console.log(result);
        this.CreatePostInput.nativeElement.value = result;
      },
      (error: Error) => {
        alert(error);
      },
    );
  }

}
