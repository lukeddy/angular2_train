
/**
 * 英雄模型
 * 
 * @export
 * @class Hero
 */
export class Hero{
    constructor(
        public id:number,
        public name:string,
        public power:string,
        public alterEgo?:string 
    ){}
}