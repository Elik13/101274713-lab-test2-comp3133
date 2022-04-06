import {Component, Input, OnInit} from '@angular/core';
import {Mission} from '../model/mission';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {

  @Input()
  launches: Observable<Mission[]>;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

}
