import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public questions = [];

  ngOnInit() {
    let question = `Now that your app has been created, you'll want to start building out 
                    features and components. Check out some of the resources 
                    below for next steps.`
    
    let array = [];
    for (let i = 0; i < 200; i++) {
      array.push(question);
    }

    this.questions = array;
  }


}
