
async function sendIP(ipAddr, pageUrl) {
    url = 'https://j1e82lg769.execute-api.us-east-2.amazonaws.com/test/searchIp';
    fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'text/plain',
            'Accept': '*/*'
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
