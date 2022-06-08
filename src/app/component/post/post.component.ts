import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/model/post';
import { PostWithId } from 'src/app/model/post_id';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  id: number = 0;
  post: PostWithId = { id: 0, title: '', content: '' };
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.postService.getpost(this.id).subscribe({
      next: (response: any) => {
        this.post = response;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
