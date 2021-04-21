import React from "react";

export const ChooseIcon = (props) => {
    const  {fill} = props;
    const color = fill ? fill : 'white'
     return <svg {...props} viewBox="0 0 39 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.3579 18.0838L5.85901 8.42536L0 14.3824L15.3579 30L39 5.957L33.141 0L15.3579 18.0838Z" fill={color}/>
    </svg>

}