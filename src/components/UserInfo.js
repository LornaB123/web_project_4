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
        //this._userInfo = {nameSelector, jobSelector, avatar};
         //if(avatar){
            this._nameSelector.textContent = nameSelector;
            this._jobSelector.textContent = jobSelector;
            this._avatar.src = avatar;
         //} else {
         //   this._nameSelector.textContent = nameSelector;
        //    this._jobSelector.textContent = jobSelector;
        // }
    }
} 