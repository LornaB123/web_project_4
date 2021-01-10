export default class Api {
    constructor({baseUrl, headers}) {
        //constructor body
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    // GET specified URL-cards
    getInitialCards() {
        return fetch(this._baseUrl + '/cards', {
            headers:  this._headers
        })
        .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
        .catch(err => console.log(err))
    }

    //GET specified URL -user-info
    getUserInfo() {
        return fetch(this._baseUrl + '/users/me', {
            headers: this._headers
        })
        .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
        .catch(err => console.log(err))
    }

      getAppInfo(){
          //gather all info together and render all at once
          return Promise.all([this.getUserInfo(), this.getInitialCards()])
      }

    //POST speicifed url -cards
    addCard({ name, link }) {
        return fetch(this._baseUrl + '/cards', {
            headers:  this._headers,
            method: "POST",
            body: JSON.stringify({
                name,
                link
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
        .catch(err => console.log(err))
    }

    // //DELETE specified url =cardID
    removeCard(cardID) {
         return fetch(this._baseUrl + '/cards/' + cardID, {
             headers:  this._headers,
             method: "DELETE",
             })
         .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
         //.then(res => res.remove(cardID))
         .catch(err => console.log(err))
     }

    //PUT specified url cardID
    //DELETE specified url cardID
    changeLikeCardStatus(cardID, like) {

    }

    //PATCH user-info
    setUserInfo({ name, about }) {

    }

    //PATCH avatar
    setUserAvatar({avatar}) {
        return fetch(this._baseUrl + '/users/me/avatar', {
            headers: this._headers,
            method: "PATCH",
            body: JSON.stringify({
                avatar
            })
        })
        .then(res => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
        .catch(err => console.log(err))
    }
}

// const api = new Api({
//     baseUrl: "correct url given to me",
//     headers: {
//         authorization: "token given to me",
//         "Content-Type": "application/json"
//     }
// });