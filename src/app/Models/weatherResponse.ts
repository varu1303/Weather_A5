import { cityData } from './cityData';
import { reportBreakdown } from './report';


export interface weatherResponse {
  cod: string;
  message: string;
  cnt: boolean;
  list: Array<reportBreakdown>;
  city: cityData;
}