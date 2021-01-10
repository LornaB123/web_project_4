export default class UserInfo {
    constructor({nameSelector, jobSelector, avatar}){
        this._nameSelector = document.querySelector(nameSelector);
        this._jobSelector = document.querySelector(jobSelector);
        this._avatar = avatar;
    }

    getUserInfo(){
        return this.userIfno = [this._nameSelector.textContent, this._jobSelector.textContent];
    }

    setUserInfo(nameSelector, jobSelector, userAvatar) {
        this._userInfo = {nameSelector, jobSelector, userAvatar};
        if(userAvatar){
            this._userInfo.userAvatar = avatarImage.src;
            this._userInfo.nameSelector = nameSelector.textContent;
            this._userInfo.jobSelector = jobSelector.textContent;
        }
        this._nameSelector.textContent = nameSelector;
        this._jobSelector.textContent = jobSelector;
    }
} 