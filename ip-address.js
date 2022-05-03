
async function sendIP(ipAddr, pageUrl, apiKey, id, cookieID) {
    console.log('Executing sendIP() from jsdelivr');
    url = 'https://dlnes1h1gk.execute-api.us-east-2.amazonaws.com/test0_3/searchip';
    let currentPage = new URL(window.location.href);
    let params = new URLSearchParams(currentPage.search);
    let testValue = params.get('testScript');
    let uuid = params.get('randomId');
    let requestBody = {};
    if (testValue === 'true' && uuid !== null) {
        requestBody = JSON.stringify({ ip : ipAddr, page : pageUrl, cookie: cookieID, randomId: uuid, isTest: true});
        console.log('Sending test request to backend.');
    } else {
        requestBody = JSON.stringify({ ip : ipAddr, page : pageUrl, cookie: cookieID});
    }
    fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'x-api-key': apiKey,
            'ID': id,
        },
        body: requestBody
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
