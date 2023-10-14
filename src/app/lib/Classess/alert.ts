export class Alert {
  title:string ;
  msg:string;
  status:boolean;
  constructor(title:string, msg:string,status:boolean=true){
    this.title=title;
    this.msg=msg;
    this.status=status;
  }
}
