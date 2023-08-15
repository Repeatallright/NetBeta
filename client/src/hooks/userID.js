

function generateID(){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const char1 = characters[Math.floor(Math.random()*characters.length)]
    const char2 = characters[Math.floor(Math.random()*characters.length)]
    const id = char1 + char2 + `${Math.floor(Math.random()* 10000000)}`
    return id
}

export default generateID