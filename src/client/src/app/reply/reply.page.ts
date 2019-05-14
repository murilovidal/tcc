import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.page.html',
  styleUrls: ['./reply.page.scss'],
})
export class ReplyPage implements OnInit {

  public data: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.question;
      }
    });
   }

  ngOnInit() {
    console.log(this.data);
  }
}
