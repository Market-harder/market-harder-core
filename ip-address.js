
async function sendIP(ipAddr, pageUrl, apiKey) {
    url = 'https://dlnes1h1gk.execute-api.us-east-2.amazonaws.com/test0_3/searchip';
    fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'text/plain',
            'Accept': '*/*',
            'x-api-key': apiKey
        },
        body: JSON.stringify({ ip : ipAddr, page : pageUrl})
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
