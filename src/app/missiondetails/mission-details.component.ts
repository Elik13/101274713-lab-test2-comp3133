import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Mission} from '../model/mission';
import {SpacexapiService} from '../network/spacexapi.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-view-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.css']
})
export class MissionDetailsComponent implements OnInit {
  selectedMission: Observable<Mission>;
  selectedMissionId: number;

  constructor(private route: ActivatedRoute,
              private spacexapiService: SpacexapiService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.selectedMissionId = +params['flightNumber']);
    this.selectedMission = this.spacexapiService.findAllLaunches()
      .pipe(
        map(missions =>
          missions.find(mission => mission.flight_number === this.selectedMissionId)));
  }
}
