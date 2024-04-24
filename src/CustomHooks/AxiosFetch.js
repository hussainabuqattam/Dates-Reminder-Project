import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const useAxiosFetch = (url) => {

const [state,setstate] = useState([])
  useEffect(() => {
    fetch(url).then(res =>res.json()).then(data => setstate(data))
    
  },[]) 
  return[state]
}

