import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public post: any;
  constructor(private posts: PostService) { }

  ngOnInit(): void {
  	//this.posts.add('Primer String');
  	//this.posts.add('TestingPost...');
  	this.posts.getPost().subscribe(data => {
      this.post = data;
    });
  	//this.escribir = this.mostrar[0];
  }

}
