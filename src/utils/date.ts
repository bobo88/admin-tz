import dayjs from "dayjs";

export type dataType = number | string;
/**
 * 是否为闰年
 */
export const isLeapYear=(y:number)=>{
    return (y % 4 === 0 && 100 !== 0) || y % 400 === 0;
}
/**
 * 返回星期数
 */
export const getWhatDay = (year:dataType,month:dataType,day:dataType)=>{
    const date = new Date(year+"/"+month+"/"+day);
    const index = date.getDay();
    const dayNames = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
    ]
    return dayNames[index];
}

/**
 * 返回星期数
 */
export const getMonthPreDay = (year:dataType,month:dataType)=>{
    const date = new Date(year+"/"+month+"/01");
    let day =date.getDay();
    if(day === 0){
        day = 7;
    }
    return dayjs;
}

/**
 * 返回月份天数
 */

export const getMonthDays = (year:string,month:string)=>{
    if(/^0/.test(month)){
        month = month.split("")[1];
    }
    return [
        0,
        31,
        isLeapYear(Number(year))?29:28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ]
}
/**
 * 补齐数字位数
 */
export const getNumTwoBit = (n:dateType)=>{
    n = Number(n);
    return (n>9?"":"0")+n;
}

/**
 * 日期对象转换成字符串
 */
export const date2Str = (date:Date,split:string|null="-")=>{
    split = split || "-";
    const y = date.getFullYear();
    const m = getNumTwoBit(date.getMonth()+1);
    const d = getNumTwoBit(date.getDate());
    return [y,m,d].join(split);
}

/**
 *返回日期格式字符串
 */
export const letgetDay = (i:number = 0)=>{
    let date = new Date();
    const diff = i*(1000*60*24);
    date = new Date(date.getTime()+diff);
    return date2Str(date);
}
/**
 * 时间比较
 */
export const compareDate = (date1:string,date2:string)=>{
    const startTime = new Date(date1.replace("-","/").replace("-","/"));
    const endTime = new Date(date2.replace("-","/").replace("-","/"));
    if(startTime >= endTime){
        return false;
    }
    return true;
}
/**
 * 时间是否相等
 */
export const isEqual = (date1:dataType,date2:dataType)=>{
    const startTime = new Date(date1).getTime();
    const endTime = new Date(date2).getTime();
    if(startTime === endTime){
        return true;
    }
    return false;
}