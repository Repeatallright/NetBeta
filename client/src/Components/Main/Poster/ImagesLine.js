import React, { useEffect, useRef } from "react";

export default function ImagesLine(props) {
  let block = useRef();
  ///////////////// Set styles
  useEffect(() => {
    block.current.style.bottom = `${props.mainW.clientHeight * 1.15}px`;
  }, [props.mainW]);
  ///////////////// Reduce images arrey on clicked image
  function reduceImgArr(arg) {
    props.setImg(props.imgArr.filter((item) => item != arg));
  }
  let Images = props.imgArr.map((item, i) => {
    let imgBlock;
    //////////////// Styles
    const imgStyles = {
      display: "flex",
      width: "150px",
      height: "90px",
      position: "absolute",
      borderRadius: "5px",
      right: 10 + i * 160 + "px",
      bottom: 0,
    };
    const closeStyle = {
      position: "absolute",
      right: 15 + i * 160 + "px",
      color: "#fff",
      bottom: 60 + "px",
      borderRadius: "50%",
    };

    /////////////// Create block
    try {
      imgBlock = (
        <div key={item} className="">
          <div
            className="close_pre_img"
            style={closeStyle}
            onClick={() => reduceImgArr(item)}
          >
            <i className="fa-solid fa-xmark"></i>
          </div>
          <img
            src={require(`../../../imgs/Posts/${item}`)}
            style={imgStyles}
            alt=""
          />
        </div>
      );
    } catch (error) {}

    return imgBlock;
  });
  return (
    <div ref={block} className="images_line">
      {Images ? Images : ""}
    </div>
  );
}
