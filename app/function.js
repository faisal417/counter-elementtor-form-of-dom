/*
*Set Alert Function
*/
 
const setAlert=( msg, type='danger')=>{
    return `<p class="alert alert-${type} d-flex justify-content-between">
    ${msg}<button data-bs-dismiss="alert" class="btn-close"></button></p>`;
}
 
/*
*Email check
*/
 
const emailCheck = (email) => {
    let pattern=/^[a-z0-9\._]{1,}@[a-z0-9]{1,}.[a-z]{1,4}$/;
    return pattern.test(email);
}
/*
*Phone check
*/
const phoneCheck = (phone) => {
    let pattern=/^(01|8801|\+8801)[0-9]{9}$/;
    return pattern.test(phone);
}
