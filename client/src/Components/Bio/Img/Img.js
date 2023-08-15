
import './img.css'

function Img(props){


    if(window.screen.width >= 500) return <img src={require(`../../../imgs/Users/${props.src}`)} alt=""/>

    else return <img src={require(`../../../imgs/Users/${props.src}`)} alt="" className="mobile_bio_img"/>
        

}
export default Img 


