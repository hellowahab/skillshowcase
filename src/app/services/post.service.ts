import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiURL = 'https://localhost:7022/api';  

  constructor(private httpclient: HttpClient ) { }

  getPosts() {
    return this.httpclient.get(`${this.apiURL}/post`);
  }

}
