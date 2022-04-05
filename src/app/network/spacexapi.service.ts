import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Mission} from '../model/mission';


@Injectable()
export class SpacexapiService {

  constructor(private http: HttpClient) {
  }

  findAllLaunches(): Observable<Mission[]> {
    return this.http.get<Mission[]>('https://api.spacexdata.com/v3/launches');
  }
}
