export const userService = {
    login,
    logout,
    register
    
}; 
function login(username, password) {
    return new Promise((resolve, reject) => {
        let user = {
            token: 'SDF5F6G5DH56565DV6SD6V56B9D4BDF6B',
            email: username
        }
        localStorage.setItem('user', JSON.stringify(user));
        resolve(user)
    })
}

function logout() {
    localStorage.removeItem('user');
}

function register(user) {
    return new Promise((resolve, reject) => {
        resolve(user)
    })
}