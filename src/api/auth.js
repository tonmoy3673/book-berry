
// export const setAuthToken = (user) =>{
//     const currentUser = {
//         email: user.email
//     }

//     console.log(user);
//     fetch(`http://localhost:3000/user/login`, {
//         method: "POST",
//         headers: {
//             'content-type' : ['application/json']
//         },
//         body: JSON.stringify(currentUser)
//     })
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         localStorage.setItem('access-token', data.token);
//     })
// }



// export const setAuthTokenForSingUp = (user,toast,navigate,from) =>{
   
//     console.log(user);
//     fetch(`http://localhost:3000/user/register`, {
//         method: "POST",
//         headers: {
//             'content-type' : ['application/json']
//         },
//         body: JSON.stringify(user)
//     })
//     .then(res => res.json())
//     .then(data => {
//         localStorage.setItem('access-token', data.token);
//         toast.success('Account Created Successfully!!')
//             navigate(from,{replace:true});
//     })
// }


export const setAuthToken = (user) =>{
    const currentUser = {
        email: user.email
    }

    console.log(user);
    fetch(`http://localhost:3000/user/${user.email}`, {
        method: "PUT",
        headers: {
            'content-type' : ['application/json']
        },
        body: JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem('access-token', data.token);
    })
}



export const setAuthTokenForSingUp = (user,toast,navigate,from) =>{
   
    console.log(user);
    fetch(`http://localhost:3000/user/${user.email}`, {
        method: "PUT",
        headers: {
            'content-type' : ['application/json']
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem('access-token', data.token);
        toast.success('Account Created Successfully!!')
            navigate(from,{replace:true});
    })
}
