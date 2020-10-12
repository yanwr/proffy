export default class StandardError {

  private timestamp:string;
  private status:number;
  private error:string;
  private message:string;
  private path:string;

  constructor(status:number, error:string, message:string, path:string){
    this.timestamp = new Date().toISOString();
    this.status = status;
    this.error = error;
    this.message = message;
    this.path = path;
  }

  // public get getStatus():number {
  //   return this.status;
  // };
}