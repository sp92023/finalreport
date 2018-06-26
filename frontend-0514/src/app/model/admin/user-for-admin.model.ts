export class UserForAdminModel {
  user_id: number;
  email: string;
  username: string;
  employee_no: number;
  mention: string;
  hipchat_id: number;
  flag: number;

  constructor(user_id: number, email: string, username: string, employee_no: number, mention: string, hipchat_id: number, flag: number) {
    this.user_id = user_id;
    this.email = email;
    this.username = username;
    this.employee_no = employee_no;
    this.mention = mention;
    this.hipchat_id = hipchat_id;
    this.flag = flag;
  }
}
