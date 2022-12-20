
export function validationLogin (form, allUsers) {
    let errors = {}

    if (form.username.length>12) {
        errors.username = 'username must have a maximum of 12 characters'
    }

    if (!form.username) {
        errors.username = 'must include a username'
    }

    if (form.username.includes(' ')) {
        errors.username = 'cannot include spaces in username'
    }

    if (form.password.length <5 || form.password.length >12) {
        errors.password = 'password must contain between 5 and 12 characters'
    }

    return errors
}

export function validationRegister(form, allUsers) {
    let errors= {}
    const emailregex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const repeatUsername = allUsers.find(e => e.username === form.username)
    const repeatEmail = allUsers.find(e => e.email===form.email)

    if (form.username.length>12 || form.username.length<6) {
        errors.username = 'username must contain between 6-12 characters'
    }

    if (!form.username) {
        errors.username = 'must include a username'
    }
    
    if (form.username.includes(' ')) {
        errors.username = 'cannot include spaces in username'
    }
    
    if (repeatUsername) {
        errors.username= 'This username is in use'
    }

    if (!emailregex.test(form.email)) {
        errors.email= 'You must enter a valid email'
    }
    
    if (repeatEmail) {
        errors.email= 'This email is in use'
    }

    if (form.password.length <5 || form.password.length >12) {
        errors.password = 'password must contain between 5 and 12 characters'
    }

    return errors
}