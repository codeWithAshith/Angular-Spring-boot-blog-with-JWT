import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostWithId } from 'src/app/model/post_id';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts: PostWithId[] = [];

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    this.postService.getAllPosts().subscribe({
      next: (response: any) => {
        this.posts = response;
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getPostById(id: number) {
    this.router.navigate(['/post', id]);
  }
}
