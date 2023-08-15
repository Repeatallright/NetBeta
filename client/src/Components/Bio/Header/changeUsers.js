import { DataFetching } from "../../../hooks/DataFetching"
import currentIndexPerson from "../../../hooks/findCurrentUser"

export function changeUsers(usersDate, currentUser, currentPerson, name, setU){


    let newUsers = usersDate.map(item =>{
        if(item.id == currentUser.id){
            item.name = name
            return item
        }
        return item
    })


    newUsers.forEach(element => {
        for (let key in element.treads){
            element.treads[key].forEach(item=>{
                if(item?.id == currentUser.id) item.postName = name
            })
        }
    });


    currentPerson = newUsers[currentIndexPerson(newUsers, currentPerson)] || currentPerson
    currentUser = newUsers[currentIndexPerson(newUsers, currentUser)] || currentUser
    setU(newUsers, currentPerson, currentUser)
    DataFetching.setUsers(newUsers)

    
}