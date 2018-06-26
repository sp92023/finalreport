export class BookingEventModel {
  id: string;
  roomid: number;
  room: string;
  userid: number;
  start_date: string;
  end_date: string;
  text: string;
  flag: boolean;
  username: string;

  constructor(id: string, roomid: number, room: string, userid: number, start_date: string, end_date: string, text: string, flag: boolean, username: string) {
    this.id = id;
    this.roomid = roomid;
    this.room = room;
    this.userid = userid;
    this.start_date = start_date;
    this.end_date = end_date;
    this.text = text;
    this.flag = flag;
    this.username = username;
  }
}
