 export function missedE(email, timer1){
    email.current.style.borderBottom = '3px solid red'
    email.current.value = ''
    timer1 = setTimeout(()=>{
        if(email.current) email.current.style.borderBottom = '0.5px solid rgba(0, 0, 0, 0.24)'
        clearTimeout(timer1)
    }, 2000)
    
}
 export function missedP(password, timer2){
    password.current.style.borderBottom = '3px solid red'
    password.current.value = ''
    timer2 = setTimeout(()=>{
        if(password.current) password.current.style.borderBottom = '0.5px solid rgba(0, 0, 0, 0.24)'
        clearTimeout(timer2)
    }, 2000)
    
}

 export function missedN(name, timer3){
    name.current.style.borderBottom = '3px solid red'
    name.current.value = ''
    timer3 = setTimeout(()=>{
        if(name.current) name.current.style.borderBottom = '0.5px solid rgba(0, 0, 0, 0.24)'
        clearTimeout(timer3)
    }, 2000)
    
}

