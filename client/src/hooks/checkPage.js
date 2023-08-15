import { useNavigate } from "react-router"
export function CheckPage(page, register, isTrade = false, currentUser = {}, currentPerson = {}){
    let navigate = useNavigate()

    if(page == 'general'){
        if(register == true) return 
        else navigate('/')
    }

    if(page == 'treads'){
        if(register == true && currentUser?.id && currentPerson.id && isTrade) return 
        else if(register == true && currentUser?.id) navigate('/general')
        else navigate('/')
    }
}

