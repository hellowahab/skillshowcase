import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../feed/post/models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiURL = 'https://localhost:7022/api';  

  constructor(private httpclient: HttpClient ) { }

  getPosts() {
    return this.httpclient.get(`${this.apiURL}/post`);
  }

  savePost(post: Post): Observable<Post> {
    return this.httpclient.post<Post>(`${this.apiURL}/post`, post);
  }

}
