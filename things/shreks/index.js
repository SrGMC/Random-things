var date = new Date();

class ShrekDate {
    constructor() {
        // year, month, day, hours, minutes, seconds, milliseconds
        if(arguments.length == 0){
            this.date = new Date();
        } else if(arguments.length >= 2 && arguments.length <= 7){
            for (var i = 0; i < arguments.length; i++) {
                if(typeof arguments[i] !== "number"){
                   throw new Error("Invalid arguments");
                }
            }

            if (arguments[0] < 0)
                throw new Error("Invalid argument: Year cannot be negative");
            if (arguments[1] < 0 || arguments[1] > 11)
                throw new Error("Invalid argument: Month must be between 0 and 11");
            if (arguments[2] < 0)
                throw new Error("Invalid argument: Day cannot be negative");
            if (arguments[3] < 0 || arguments[3] > 23)
                throw new Error("Invalid argument: Hours must be between 0 and 23");
            if (arguments[4] < 0 || arguments[4] > 59)
                throw new Error("Invalid argument: Minutes must be between 0 and 59");
            if (arguments[5] < 0 || arguments[5] > 59)
                throw new Error("Invalid argument: Seconds must be between 0 and 59");
            if (arguments[6] < 0 || arguments[6] > 999)
                throw new Error("Invalid argument: Milliseconds must be between 0 and 999");

            if(((arguments[1] === 0 || arguments[1] === 2 || arguments[1] === 4 || arguments[1] === 6 || arguments[1] === 7 || arguments[1] === 9 || arguments[1] === 11) && arguments[2] > 31) ||
                (arguments[1] === 1 && arguments[2] > 28) ||
                ((arguments[1] === 3 || arguments[1] === 5 || arguments[1] === 8 || arguments[1] === 10) && arguments[2] > 30))
                throw new Error("Invalid argument: Day for month " + arguments[1] + " cannot be " + arguments[2]);


            this.year = arguments[0];
            this.month = arguments[1];
            this.day = arguments[2];
            this.hours = arguments[3];
            this.minutes = arguments[4];
            this.seconds = arguments[5];
            this.milliseconds = arguments[6];
            this.date = new Date(this.year, this.month,
                (this.day === undefined) ? 0 : this.day,
                (this.hours === undefined) ? 0 : this.hours,
                (this.minutes === undefined) ? 0 : this.minutes,
                (this.seconds === undefined) ? 0 : this.seconds,
                (this.milliseconds === undefined) ? 0 : this.milliseconds);
        } else {
            throw new Error("Invalid arguments");
        }
    }

    static now(){
        var currentDate = (Date.now()) / 60000;
        return currentDate / 95;
    }

    getTime(){
        var millis = Date.parse(this.date.toString()) / 60000;
        return millis / 95;
    }

    elapsed(shrekdate){
        var elapsed = Math.abs(shrekdate.date.getTime() - this.date.getTime()) / 60000;
        return elapsed / 95;
    }
}

var date1 = new ShrekDate();
var date2 = new ShrekDate(2018, 4, 17, 16);
console.log("Between " + date1.date.toString() + " and " + date2.date.toString() + " will pass " + date1.elapsed(date2) + " shreks");
