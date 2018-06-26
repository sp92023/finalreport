export class ClockRecordModel {
  user_id: number;
  clock_time: string;

  constructor(user_id: number, clock_time: string) {
    this.user_id = user_id;
    this.clock_time = clock_time;
  }
}
