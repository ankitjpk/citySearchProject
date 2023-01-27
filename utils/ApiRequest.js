
const getHeaderData = (requestMethod, contentType) => {
 const data = {
    method: requestMethod,
    headers: {
        Accept: 'application/json',
        'Content-Type': contentType
    }
 }
}

const makeApiRequest = (url, data, resolve, reject) => {
    fetch(url, data)
        .then((response) => {
            return response.json();
        })
        .then((responseJson) => {
            resolve(responseJson);
        })
        .catch((error)=> {
            reject(error);
        }) 
}

const makeGetRequest = (url) => {
    return new Promise((resolve, reject) => {
        const data = getHeaderData('GET', 'application/json')
        makeApiRequest(url, data, resolve, reject)
    })
}

export {
    makeGetRequest
}