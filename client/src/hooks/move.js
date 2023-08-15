function move(register, item, hideBlock){
    if(!register){
        item.current.style.transform = `translate(-50%, -50%)`;
        hideBlock.current.style.display = 'flex'
    }
    else{
        item.current.style.transform = `translate(-50%, -270%)`;
        hideBlock.current.style.display = 'none'
    }
}
export default move