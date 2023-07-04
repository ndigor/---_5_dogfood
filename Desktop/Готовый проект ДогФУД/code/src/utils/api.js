const onResponse  = (res) => {
  return res.ok ? res.json() : Promise.reject('Error')
} 

class Api {
  constructor(data) {
    this.baseUrl = data.baseUrl;
    this.headers = {
      "Content-Type": "application/json",
      authorization: localStorage.getItem('token')
    };
  }

token = localStorage.getItem('token')
getProductList(page = 1, limit = 15) {
  return fetch(`${this.baseUrl}/products?page=${page}&limit=${limit}`, {
      method: "GET",
      headers: this.headers,
  }).then(onResponse);
}

getUserInfo() {
  return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers
  }).then(onResponse)
}

/*Тут будет запрос на редактирование данных пользователя*/
editUserInfo(data) {
  return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: { ...this.headers, authorization: this.token },
      body: JSON.stringify(data),
  }).then(onResponse);
}
/*Метод редактирования аватара пользователя*/
  getResetUserAvatar(data) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: { ...this.headers, authorization: this.token },
      body: JSON.stringify(data),
    }).then(onResponse);
  }



searchProducts(path) {
  return fetch(`${this.baseUrl}/products/search?query=${path}`, {
      headers: this.headers
  }).then((e)=>onResponse(e))
}
addLike(productId) {
  return fetch(`${this.baseUrl}/products/likes/${productId}`, {
    headers: this.headers,
    method: "PUT"
  }).then(onResponse)
}
deleteLike(productId) {
  return fetch(`${this.baseUrl}/products/likes/${productId}`, {
    headers: this.headers,
    method: "DELETE"
  }).then(onResponse)
}
changeProductLike(productId, isLiked) {
  return fetch(`${this.baseUrl}/products/likes/${productId}`, {
    headers: this.headers,
    method:  isLiked ? "DELETE" : 'PUT'
  }).then(onResponse)
}
getProductById(id) {
  return fetch(`${this.baseUrl}/products/${id}`, {
    headers: this.headers,
  }).then(onResponse)
}


addProductReview(productId, data) {
  return fetch(`${this.baseUrl}/products/review/${productId}`, {
    headers: this.headers,
    method: "POST",
    body: JSON.stringify(data)
  }).then(onResponse)
}
deleteProductReview(productId, reviewId) {
  return fetch(`${this.baseUrl}/products/review/${productId}/${reviewId}`, {
    headers: this.headers,
    method: "DELETE",
  }).then(onResponse)
}

signin(data) {
  return fetch(`${this.baseUrl}/signin`, {
    headers: this.headers,
    method: "POST",
    body: JSON.stringify(data)
  }).then(onResponse)
}

signup(data) {
  return fetch(`${this.baseUrl}/signup`, {
    headers: this.headers,
    method: "POST",
    body: JSON.stringify(data)
  }).then(onResponse)
}
resetPass(data) {
  return fetch(`${this.baseUrl}/forgot-password`, {
    headers: this.headers,
    method: "POST",
    body: JSON.stringify(data)
  }).then(onResponse)
}
resetPassWithToken(token, data) {
  return fetch(`${this.baseUrl}/password-reset/${token}`, {
    headers: this.headers,
    method: "PATCH",
    body: JSON.stringify(data)
  }).then(onResponse)
}

}

const config = {
  baseUrl: 'https://api.react-learning.ru',
}

export const api = new Api(config);

export const getProductList = () => {
return fetch(`${config.baseUrl}/products`, {
    method: "GET",
    headers: config.headers,
}).then(onResponse);
}

