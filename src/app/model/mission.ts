import Link from './link';
import Rocket from './rocket';
import LaunchSite from './launchSite';

export interface Mission {
  flight_number: number;
  mission_name: string;
  launch_year: number;
  details: string;
  links: Link;
  rocket: Rocket;
  launch_site: LaunchSite;
}
