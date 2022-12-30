export class Usuario {

    id?: number;
  username: String;
  password: String;

  constructor(
    username: string,
    password: string,
  ) 
  {
    this.username = username;
    this.password = password;
        
  }
}