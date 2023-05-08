const getResponseData = (response, status) => {
    if (response.status === status) {
      return response.json();
    }
    return Promise.reject(response.status);
} 

export const registration = (name, email, password) => {
  return fetch('https://diplomamarkuhaaa.nomoredomains.work/signup', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({name: name,
    email: email, password: password})
  })
  .then(response => getResponseData(response, 200))
};

export const login = (email, password) => { 
  return fetch('https://diplomamarkuhaaa.nomoredomains.work/signin', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({email: email,
      password: password})
  })
  .then(response => getResponseData(response, 200))
};