

//Project One
const button=document.getElementById('add');
const button_2=document.getElementById('back');
const output=document.getElementById('data');
const message=document.getElementById('message');
const n1=document.getElementById('n1');
const n2=document.getElementById('n2');
const n3=document.getElementById('n3');
const n4=document.getElementById('n4');
const n5=document.getElementById('n5');
const a1=document.getElementById('a1');
const a2=document.getElementById('a2');
 
 
let count=0;
 
 
button.onclick=()=>{
    count++;
    n4.play();
    if (count<=10) {
        output.innerHTML=count;
        message.innerText='';
    }else{
        count=10;
        message.innerText='You can not go froward';
    }
};
 
button_2.onclick=()=>{
    count--;
    n5.play();
    if (count>=0) {
        output.innerHTML=count;
        message.innerText='';
    }else{
        count=0;
        message.innerText='You can not go backward';
    }
};
 
 
// Project Two
 
const forward=document.getElementById('forward');
const backward=document.getElementById('backward');
const reset=document.getElementById('reset');
const data_1=document.getElementById('data_1');
const message_1=document.getElementById('message_1');
 
let countTwo=0;
let clearTimeCounting='';
 
forward.onclick=()=>{
 
    clearTimeCounting=setInterval(()=>{
        countTwo++;
        data_1.innerHTML=countTwo;
        n2.play();
 
        if (countTwo==10) {
            clearInterval(clearTimeCounting)
            a2.play();
        }
    },1000);
};
 
backward.onclick=()=>{
    clearInterval(clearTimeCounting);
    n4.play();
};
 
reset.onclick=()=>{
    clearInterval(clearTimeCounting);
    countTwo=0;
    data_1.innerHTML=countTwo;
    a2.play();
};


//Elementor Project


const heading=document.getElementById('heading');
const fontSize=document.getElementById('fontSize');
const color=document.getElementById('color');
const fontFamily=document.getElementById('fontFamily');
const fontWeight=document.getElementById('fontWeight');
const elementorOutput=document.getElementById('elementorOutput');
const align=document.querySelectorAll('.align');
 
heading.onkeyup=()=>{
    elementorOutput.innerText=heading.value;
    elementorOutput.style.fontSize='20px';
}
 
align.forEach(item =>{
        item.onchange=()=> {
            elementorOutput.style.textAlign=item.value;
        }
})
 
fontSize.oninput=()=>{
    elementorOutput.style.fontSize=fontSize.value + 'px';
}
 
color.oninput=()=>{
    elementorOutput.style.color=color.value;
}
 
fontFamily.onchange=()=>{
    elementorOutput.style.fontFamily=fontFamily.value;
}
fontWeight.onchange=()=>{
    elementorOutput.style.fontWeight=fontWeight.value;
}

//Class 14 Form Project

const userDataForm=document.getElementById('userDataForm')
const msg=document.querySelector('.msg')
const name_req=document.querySelector('.name-req')
const email_req=document.querySelector('.email-req')
const phone_req=document.querySelector('.phone-req')
const uname_req=document.querySelector('.uname-req')
 
// userDataForm.addEventListener('submit',()=>{
//     alert()
// })
// userDataForm.onsubmit=()=>{
//     alert()
// }
//সাবমিট বাটন এ যদি আমরা শুধু সাবমিট ব্যবহার করি   তবে তা সাবমিট করার সময় বারবার  রেলোড নেবে  
//এখান থেকে মুক্তি পাওয়া জন্য return false  ব্যবহার করব
userDataForm.onsubmit=(event)=>{
    event.preventDefault();
   
    let name=document.getElementById('name');
    let email=document.getElementById('email');
    let phone=document.getElementById('phone');
    let uName=document.getElementById('uName');
   
 
 
    if (name.value==''||email.value==''||phone.value==''||uName.value=='') {
        msg.innerHTML=setAlert('All fields are required');
    }else if(emailCheck(email.value) == false ){
        msg.innerHTML=setAlert('Invalid email address','warning');
    }else if(phoneCheck(phone.value) == false ){
        msg.innerHTML=setAlert('Invalid phone number','warning');
    }else{
        msg.innerHTML=setAlert('Data Stable','success');
    }
 
 
 
    if (name.value=='') {
        name_req.innerHTML=`<sapn style="color: red;">*Required</sapn>`;
    }else{
        name_req.innerHTML=``;
    }
 
    if (email.value=='') {
        email_req.innerHTML=`<sapn style="color: red;">*Required</sapn>`;
    }else{
        email_req.innerHTML=``;
    }
 
    if (phone.value=='') {
        phone_req.innerHTML=`<sapn style="color: red;">*Required</sapn>`;
    }else{
        phone_req.innerHTML=``;
    }
 
    if (uName.value=='') {
        uname_req.innerHTML=`<sapn style="color: red;">*Required</sapn>`;
    }else{
        uname_req.innerHTML=``;
    }

}