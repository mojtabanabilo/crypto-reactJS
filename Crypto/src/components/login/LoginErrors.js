const validation = data => {

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const objError = {}

    if(!data.usernameValue.trim()){
        objError.usernameError = "username required";
    } else if(!regex.test(data.usernameValue)){
        objError.usernameError = "invalid usename";
    } else {
        delete objError.usernameError;
    }

    if(!data.passwordValue){
        objError.passwordError = "password required";
    } else if(data.passwordValue.length < 6){
        objError.passwordError = "6 characters or more";
    } else {
        delete objError.passwordError;
    }

    return objError;
}

export default validation;