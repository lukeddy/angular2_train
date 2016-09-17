import {StudentLevel} from "./studentlevel";

export class Lesson{
    id:string;

    constructor(public title:string ="",
                public duration=0,
                public description:string="",
                private _level:StudentLevel=StudentLevel.BEGINNER
    ){}

    set level(level:string){
        console.log("setting lesson level...");
        this._level=StudentLevel[level];
    }
}

