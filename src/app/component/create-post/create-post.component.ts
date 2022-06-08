import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  formPost: Post = { content: '', title: '' };

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {}

  createPost() {
    this.postService.createPost(this.formPost).subscribe({
      next: (response: any) => {
        console.log(response);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
