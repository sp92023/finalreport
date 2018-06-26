export class UserMentionModel {
  username: string;
  mention: string;

  constructor(username: string, mention: string) {
    this.username = username;
    this.mention = mention;
  }
}
