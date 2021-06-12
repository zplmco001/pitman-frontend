import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  posts:Array<any>=[
    {
      username:"User1",
      user_post_think:"Content1",
      comment_results:{
        positive:40,
        negative:60
      }
    },
    {
      username:"User2",
      user_post_think:"Content2",
      comment_results:{
        positive:60,
        negative:40
      }
    },
    {
      username:"User3",
      user_post_think:"Content3",
      comment_results:{
        positive:70,
        negative:30
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
