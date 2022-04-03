let idToken = null;

function authenticateUser() {
    let url_string = window.location.href;
    let url = new URL(url_string);
    let idToken = url.searchParams.get("id_token");
    idtoken = eyJraWQiOiJIR0tRUmZROGl5UEhaOWU2ZmNqWXhcL2NYREdEa2R3QklVQzJFOElQeW45MD0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiTHF0X1AzbTl2cXRWSUd1R2pybkFpdyIsInN1YiI6ImI0YzhiOGIxLTA0OWItNGUxNS05YTc5LTQ1YTJjYzgxNzM5MyIsImF1ZCI6IjFhZzUydDk1Y25uYTNnbmM1Y2Q3aHBhdXJ2IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInRva2VuX3VzZSI6ImlkIiwiYXV0aF90aW1lIjoxNjQwNDExMzM0LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9Zd003Y0NJWTEiLCJjb2duaXRvOnVzZXJuYW1lIjoiYXVzb3NhZ2llIiwiZXhwIjoxNjQwNDE0OTM0LCJpYXQiOjE2NDA0MTEzMzQsImp0aSI6IjkxY2NkNjA2LWIwNzMtNGVmYy05ZGU4LTg5NzQ4NDQ3ODU3YSIsImVtYWlsIjoiYXVzb3NhZ2llQGdtYWlsLmNvbSJ9.cXDZ2o0PwuF1-sGRkQ8ut4CQXWjS8NEYofcYnU45GqANaSfWU10lUUEu4XBKkWXt4kQgfW0QUdYJek1m4Bq8cjVBco9T_7joyKzx3x-8NNcqNxv4boDmE78iThVcjdH22T-b-AOKTXa9UgA3tdBZNYMK7UNxVjbi-NupPTVkOA8dHmlsvLT7IS-gbf0v6HMtMCg7WnSO44JEKNMx7goIhlg80BouoQuMyd4jF37mRRlLrlVrq52ovP313yATcwV3Caa4_3HwAAiSVroZjbYsMYpYQ7r_D6RFed3vxpDBSsHfsQjOVKf9cr52k3pJmIkH2qHsd52_hz9_sKAqPf1bPQ;
    if (idToken != null) {
        console.log("You are signed in!!");
        console.log(idToken);
        let decoded_token = jwt_decode(idToken);
        console.log(decoded_token);
        // auth();
    } else {
        console.log("You are not signed in.");
    }
}