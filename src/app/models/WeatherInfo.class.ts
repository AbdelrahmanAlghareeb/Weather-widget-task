export class WeatherInfo {
    constructor(
        public lowerDegree:number,
        public upperDegree:number,
        public averageDegree:number,
        public weatherStatus:string,
        public location:string,
        public date:Date
    ){

    }
}