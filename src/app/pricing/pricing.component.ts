import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {
  public msg = 'Choose a plan that is right for you!';
  public msg1 = '14-day free trial, no credit card required.';
  public msg2 = 'Call +44 800 9755 164 for questions.';
  
  constructor() { }

  ngOnInit() {
  }

}
