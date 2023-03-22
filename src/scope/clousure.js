function greeting(){
    let username = 'Oscar';

    function displayUserName(){
        return `Hello ${username}`;
    }

    return displayUserName;
}

greeting();
