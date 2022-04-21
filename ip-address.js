
async function sendIP(ipAddr, pageUrl, apiKey, id, cookieID) {
    console.log('Executing sendIP() from jsdelivr');
    url = 'https://dlnes1h1gk.execute-api.us-east-2.amazonaws.com/test0_3/searchip';
    fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'x-api-key': apiKey,
            'ID': id,
        },
        body: JSON.stringify({ ip : ipAddr, page : pageUrl, cookie: cookieID})
    })
    .then(data => {
        console.log('data');
        console.log(data);
        return data;
    })
    
    .catch(error => {
        console.log('error');
        console.log(error);
        return error;
    });
}
