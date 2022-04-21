function setCookie(name) {
    let date = new Date();
    // Set the cookie to expire one month from now.
    date.setTime(date.getTime() + 30*60*60*1000);
    let uID = crypto.randomUUID();
    console.log('uuid: ', uID);
    let domainName = window.location.hostname;
    document.cookie = "name=" + name + "; expires=" + date.toUTCString() + "; uid=" + uID + "; secure; domain=" + domainName + "; path=/";
    console.log('Cookie: ' + name + ' is set.');
    return String(uID);
}

function getCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
        console.log('Cookie found!');
      console.log(match[2]);
      return match[2];
    }
    else{
         console.log('Cookie: ' + name + ' was not found. Creating cookie.');
         return setCookie(name);
    }
}
