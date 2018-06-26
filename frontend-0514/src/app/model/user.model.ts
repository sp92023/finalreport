export class UserModel {
  user_id: number;
  email: string;
  username: string;
  uid: number;
  image: number;
  employee_no: number;

  constructor(user_id: number, email: string, username: string, uid: number, image: number , employee_no: number) {
    this.user_id = user_id;
    this.email = email;
    this.username = username;
    this.uid = uid;
    this.image = image;
    this.employee_no = employee_no;
  }
}
