
export class Helper {
  constructor(){}

  static getNowTime(){
    const time = new Date()
    const year = time.getFullYear();
    const month = time.getMonth();
    const day = time.getDate();
    return year + '' + (month+1) + '' + day;
  }
  
}
