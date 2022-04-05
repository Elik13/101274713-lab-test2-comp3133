import {Component, OnInit} from '@angular/core';
import {Mission} from '../model/mission';
import {SpacexapiService} from '../network/spacexapi.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  launches: Observable<Mission[]>;

  constructor(private coursesService: SpacexapiService) {
  }

  ngOnInit() {
    this.launches = this.coursesService.findAllLaunches();
  }

}
