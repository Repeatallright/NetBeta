import { DataFetching } from "../../../hooks/DataFetching";
export function changePosts(postsDate, currentUser, name, setP){;
    let posts = [];
    postsDate.forEach(element => {
        let post = element.map(item=>{
            if(item?.postName == currentUser.name){
                item.postName = name
                return item
            }
            return item
        })
        posts.push(post)
    });

    currentUser.name = name
    setP(posts, currentUser)
    DataFetching.setPosts(posts)
}
