export default class UserInfo {
    constructor({nameSelector, jobSelector}){
        this._nameSelector = document.querySelector(nameSelector);
        this._jobSelector = document.querySelector(jobSelector);
    }

    getUserInfo(){
        return [this._nameSelector.textContent, this._jobSelector.textContent];
    }

    setUserInfo(nameSelector, jobSelector) {
        this._nameSelector.textContent = nameSelector;
        this._jobSelector.textContent = jobSelector;
    }
} 