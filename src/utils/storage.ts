import { json } from "stream/consumers";
import { remove } from "xe-utils";

const USEER_ID_KEY="tz_userId";
const TOKEN_KEY="tz_token";
const USER_INFO_KEY="tz_user_info";
const PERMISSION_KEY="tz_permission";
const FIRM_ID_KEY="tz_firmId";
const FRONT_WEB_HOST_KEY="tz_FrontWebHost";
const FRONT_MENU_ID_KEY="tz_menuId";
const TABLE_COLUMN_KEY="tz_table_column";
interface Storage{
    [key:string]:any
}
type StorageType = Storage | string;

export interface webHost{
    "{backapiurl}":string,
    "{fronturl}":string,
    "{printurl}":string,
    "{tcsurl}":string
}

//设置UserToken
export function setToken(token:string){
    set(TOKEN_KEY,token);
}

//设置UserId
export function setUserId(id:string){
    set(USEER_ID_KEY,id);
}

//设置firmId
export function setFirmId(firmid:string){
    set(FIRM_ID_KEY,firmid)
}

//设置userinfo
export function setUserInfo(userInfo:string){
    setFirmId((userInfo as Storage).firmId)
    set(USER_INFO_KEY,userInfo)
}

//设置权限 Permission
export function setPermission(data:StorageType){
    return set(PERMISSION_KEY,data);
}

//设置 FrontWebHost
export function setFrontWebHost(webHost:StorageType){
    set(FRONT_WEB_HOST_KEY,webHost);
}

//设置菜单选项卡
export function setTabsMenuId(menuId:StorageType){
    set(FRONT_MENU_ID_KEY,menuId)
}

//设置表格列属性
export function setTableColumn(data:Storage){
    set(TABLE_COLUMN_KEY,data);
}

/***************** get ****************** */
//获取token
export function getToken(){
    return get(TOKEN_KEY) as string |null;
}

//获取USER_ID
export function getUserId(){
    return get(USEER_ID_KEY) as string | null;
}

//获取 firmId
export function getFirmId(){
    return get(FIRM_ID_KEY) as string | null;
}

//获取USER_INFO
export function getUserInfo(){
    return get(USER_INFO_KEY) as Record<string,any> | null;
}

//获取权限 Permission
export function getPermission(){
    return get(PERMISSION_KEY) as Record<string,any> | null;
}

//设置 FrontWebHost
export function getFrontWebHost(){
    return (get(FRONT_WEB_HOST_KEY) || {}) as webHost;
}

//获取列表选项卡的id
export function getTabsMenuId(){
    return (get(FRONT_MENU_ID_KEY) || {}) as Storage;
}

//获取表格列数据
export function getTableColumn(){
    return(get(TABLE_COLUMN_KEY)||{}) as Storage;
}

//获取系统id
export function getSystemId(){
    return "5554544445";
}

/***************** remove *********************/

//删除token
export function removeToken(){
    remove(TOKEN_KEY);
}

//删除UID
export function removeUserId(){
    remove(USEER_ID_KEY);
}

//删除UINFO
export function removeUserInfo(){
    remove(USER_INFO_KEY);
}

/********************* 包装方法 *****************************/

export function set(key:string,content:StorageType){
    if(!content && content !== 0) return;
    if(typeof content === 'object'){
        content = JSON.stringify(content);
    }
    localStorage.setItem(key,content);
}

export function get(key:string):null|string|Record<string,any>{
    const info = localStorage.getItem(key);
    if(!info)return info;
    try{
        return JSON.parse(info);
    }catch(error){
        return info;
    }
}
export function remove(key:string){
    localStorage.removeItem(key);
}

export function clear(){
    Object.keys(localStorage).forEach(key=>{
        if(key !== TABLE_COLUMN_KEY){
            remove(key);
        }
    })
}

export default{
    setToken,
    getToken,
    removeToken,
    setUserId,
    getUserId,
    removeUserId,
    setUserInfo,
    getUserInfo,
    removeUserInfo,
    setPermission,
    getPermission,
    set,
    get,
    remove,
    clear
}