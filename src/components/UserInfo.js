import { jobInput } from "../utils/constants";

export default class UserInfo {
    constructor({nameSelector, jobSelector, avatar}){
        this._nameSelector = document.querySelector(nameSelector);
        this._jobSelector = document.querySelector(jobSelector);
        this._avatar = document.querySelector(avatar);
    }

    getUserInfo(){
        return this.userIfno = [this._nameSelector.textContent, this._jobSelector.textContent, this._avatar.src];
    }

    setUserInfo(nameSelector, jobSelector, avatar) {
        // this._userInfo = {nameSelector, jobSelector, userAvatar};
        // if(userAvatar){
        //     this._userInfo.userAvatar = userAvatar.src;
        //     this._userInfo.nameSelector = nameSelector.textContent;
        //     this._userInfo.jobSelector = jobSelector.textContent;
        // }
        // this._nameSelector.textContent = nameSelector;
        // this._jobSelector.textContent = jobSelector;
        this._nameSelector.textContent = nameSelector;
        this._jobSelector.textContent = jobSelector;
        this._avatar.src = avatar;

    }
} 