export class RoomModel {
  id: number;
  room_name: number;
  read_permission: boolean;
  write_permission: boolean;


  constructor(id: number, room_name: number, read_permission: boolean, write_permission: boolean) {
    this.id = id;
    this.room_name = room_name;
    this.read_permission = read_permission;
    this.write_permission = write_permission;

  }
}
