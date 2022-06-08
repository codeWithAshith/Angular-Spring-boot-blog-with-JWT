import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  createPost(post: Post) {
    return this.http.post(`http://localhost:9091/api/post`, post);
  }

  getAllPosts() {
    return this.http.get(`http://localhost:9091/api/post/all`);
  }

  getpost(id: number) {
    return this.http.get(`http://localhost:9091/api/post/${id}`);
  }
}
