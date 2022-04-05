import Link from './link';

export interface Mission {
  flight_number: number
  mission_name: string;
  launch_year: number;
  details: string;
  links: Link[];
}
