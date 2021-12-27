let idToken = null;

function authenticateUser() {
    let url_string = window.location.href;
    let url = new URL(url_string);
    idToken = url.searchParams.get("id_token");
    if (idToken != null) {
        console.log("You are signed in!!");
        // auth();
    } else {
        console.log("You are not signed in.");
        location.href = 'https://www.google.org';
    }
}