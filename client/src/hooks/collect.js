import { DataFetching } from "./DataFetching";
import currentIndexPerson from "./findCurrentUser";
import { currentIndex } from "./findCurrentUser";
const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
const weekNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


    
///////////////////////////////////
function getCurrentDate() {
    let da = new Date()
    let month = monthNames[da.getMonth()];
    let week = weekNames[((da.getDay() + 6) % 7)];
    let day = da.getDate();
    return `${month}, ${week}, ${day.length<=1? `0${day}`: day}`
}
//////////////////////////////////////
function createCollectPost(time, content, postId, currentUser) {
    if(content){
        return {
            imgUrl: currentUser.img,
            postName: currentUser.name,
            postDate: time,
            postContent: content,
            id: currentUser.id,
            postId: postId
        }
    }else return false
    
}
////////////////////////////////////
function getCurrentTime() {
    let time = (function () {
        let day = new Date()
        return `
        ${`${day.getHours()}`.length<=1 ? `0${day.getHours()}` : day.getHours()}
         : ${`${day.getMinutes()}`.length<=1? `0${day.getMinutes()}` : day.getMinutes()}
        `;
    }())
    return time
}
///////////////////////////////////

function createPostId(content){
        let id = `${Math.floor(Math.random() * 1000000)}` + `${content.length}`
        return id
}
/////////////////////////////////



async function collect(message, postsDate, currentUser, currentPerson, isTrade, setPosts, usersDate, dispatch, showError, isPush){
    let content = message
    let newPostsDate = [...postsDate]
    
    let time = getCurrentTime()
    let date = getCurrentDate()
    let postId = createPostId(content)
    let post = createCollectPost(time, content, postId, currentUser)
    if(post){
        if(currentUser && !isTrade){
            let isDate = [];
            newPostsDate.forEach(item => {
                isDate.push(item[0] === date)
                if (item[0] === date) {
                    item.push(post)
                    return true
                }
            })

            if (!isDate.includes(true)) {
                if (content !== 'clear') {
                    newPostsDate.push([date])
                    newPostsDate[newPostsDate.length - 1].push(post)
                }
            }
            console.log(newPostsDate);
            console.log();
            dispatch({type:'SET_P', item: newPostsDate})
            DataFetching.setPosts(newPostsDate, showError)
            
            
    }
    ///////////////////////////////////////////
    else if(isTrade){
        let users = [...usersDate]

        if(await users[users.indexOf(currentUser)]){
            if(!currentUser.treads[currentPerson.id]){
                users[users.indexOf(currentUser)].treads[currentPerson.id] = []
                users[users.indexOf(currentPerson)].treads[currentUser.id] = []
                currentUser.treads[currentPerson.id] = []
                currentPerson.treads[currentUser.id] = []
            }
        }

        if (!await users[currentIndex(users, currentUser)].treads[currentPerson.id].includes(date)) {
            await users[currentIndex(users, currentUser)].treads[currentPerson.id].push(date)
            await users[currentIndexPerson(users, currentPerson)].treads[currentUser.id].push(date)
        }
        await users[currentIndex(users, currentUser)].treads[currentPerson.id].push(post);
        await users[currentIndexPerson(users, currentPerson)].treads[currentUser.id].push(post)
        dispatch({type: 'SET_UD', item: users})
        dispatch({type: 'SET_C_U', item: users[currentIndex(users, currentUser)]})
        DataFetching.setUsers(users, showError)
    }
}
    
        setTimeout(() => {
            window.scrollBy({
                top: 1000,
                behavior: "smooth"
                })
        }, 10);
}

export default collect