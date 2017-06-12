function auth(login, password){
    if(login === 'login' && password === 'password'){
        return 'You are logged in!';
    }
    else{
        return 'Login is failed!';
    }
}
