import { Component } from '@angular/core';
import { PostComponent } from "./post/post.component";
import { CommonModule, NgFor } from '@angular/common'; 
// import { PostService } from "../services/post.service";

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [PostComponent,CommonModule,NgFor],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent {

  posts = [
    {
      profileImage: 'profile-pic.jpg',
      userName: 'Wahab Hussain',
      userTitle: 'Sofware Engineer',
      postTime: '2h ago',
      postContent: 'This is a sample post showcasing the content that users can share.',
    }
    // Add more posts as needed
  ];
  //posts: any = [];
  errorMessage: string = '';

  constructor() { }

  ngOnInit(): void {
    //this.fetchData();
  }

  // fetchData(): void {
  //   this.postService.getData().subscribe({
  //       next: (data) => {
  //         console.log(data);
  //         this.posts = data;
  //       },
  //       error: (error) => {
  //         console.log(error);
  //         this.errorMessage = error
  //       }
  //   })
  // }



  
}
