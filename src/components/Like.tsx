import React, { useEffect, useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
    onClick: () => void,
    status: boolean
}


const Like = ({onClick, status}: Props) => {

        
   if(status) return <AiFillHeart size={50} color="#AAAAAA" onClick={onClick}/>
   return <AiOutlineHeart size={50} onClick={onClick}/>
    
}

export default Like