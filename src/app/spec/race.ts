import DateTimeFormat = Intl.DateTimeFormat;
import {Score} from './score';

export class Race {
  id: string;
  name: string;
  surface: string;
  data: DateTimeFormat;
  driverRaceResults: Set<Score>;
}
