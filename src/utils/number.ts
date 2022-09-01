(function(Number){
    Number.prototype.plus = function(arg:number,acc = 0){
        let r1,r2;
        try{
            r1 = this.toString().split(".")[1].length;
        }catch(e){
            r1 = 0;
        };
        try{
            r2 = arg.toString().split(".")[1].length;
        }catch(e){
            r2 = 0;
        };
        const m = Math.pow(10,Math.max(r1,r2));
        const a = parseInt((this as number * m + 0.5).toString()); 
        const b = arg< 0 ? parseInt((arg * m - 0.5).toString()):parseInt((arg*m+0.5).toString());
        const result = (a + b) / m;
        if(acc){
            return Number(Number(result).toFixed(parseInt(acc.toString())));
        }else{
            return result;
        }
    };
    Number.prototype.minus = function(arg:number,acc = 0){
        return this.plus(-arg,acc);
    }
    Number.prototype.times = function(arg:number,acc=0){
        let m = 0;
        const s1 = this.toString();
        const s2 = arg.toString();
        try{
            m += s1.split(".")[1].length;
        }catch(e){

        }
        try{
            m += s2.split(".")[1].length;
        }catch(e){
            const result = (Number(s1.replace(".",""))*Number(s2.replace(".",""))) / Math.pow(10,m);
            if(acc){
                return Number(Number(result).toFixed(parseInt(acc.toString())));
            }else{
                return result;
            }
        }
    };
    Number.prototype.div = function(arg:number,acc = 0){
        let r1,r2;
        try{
            r1 = this.toString().split(".")[1].length;
        }catch(e){
            r1 = 0;
        }
        try{
            r2 = arg.toString().split(".")[1].length;
        }catch(e){
            r2 = 0;
        }
        if(!this || !arg){
            return 0;
        }
        const m = Math.pow(10,Math.max(r1,r2));
        const a = parseInt((this as number * m + 0.5).toString());
        const b = parseInt((arg * m + 0.5).toString());
        const result = a / b;
        if(acc){
            return Number(Number(result).toFixed(parseInt(acc.toString())));
        }else{
            return result;
        }
    }
    Number.prototype.toFixedZero = function(acc = 2){
        let amount = this.toString();
        const arr = amount.toString().split(".");
        if(arr.length > 1 && acc - arr[1].length > 0){
            amount = amount.padEnd(amount.length + acc - arr[1].length,'0');
        }else if(arr.length === 1){
            amount += "."+"".padEnd(acc,"0");
        }
        return amount;
    }
})(Number);
export {}