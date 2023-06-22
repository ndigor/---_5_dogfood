const onResponse  = (res) => {
    return res.ok ? res.json() : Promise.reject('Error')
} 

class Api {
  constructor(data) {
    this.baseUrl = data.baseUrl;
    this.headers = data.headers;
  }
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

  updateUserInfo(data) {
    return fetch(`${this.baseUrl}/users/me`, {
    ...this.freshHeaders(),
      method: "PATCH",
      body: JSON.stringify(data)
    }).then(onResponse);
  }
  updateUserAvatar(data) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
    ...this.freshHeaders(),
      method: "PATCH",
      body: JSON.stringify(data)
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
    headers: {
        "Content-Type": "application/json",
        authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQ2YjE1ZThmYmM0NzNmYTg5Y2U1NzYiLCJncm91cCI6Imdyb3VwLTEyIiwiaWF0IjoxNjgyMzU4NjE5LCJleHAiOjE3MTM4OTQ2MTl9.79zquAglgG_3kM45B1yt1aDx_WOc1Tm1oIzzQeNmg6o'
    }
}

export const api = new Api(config);

export const getProductList = () => {
  return fetch(`${config.baseUrl}/products`, {
      method: "GET",
      headers: config.headers,
  }).then(onResponse);
}

