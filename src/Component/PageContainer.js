import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import { Tittle } from './Tittle';
import { MainCard } from './MainCard';
import { ButtonAction } from './ButtonAction';
import { useAxiosFetch } from '../CustomHooks/AxiosFetch';




export const PageContainer = () => {
  const [data] = useAxiosFetch(`https://jsonplaceholder.typicode.com/users`);

const [ShowHide, SetShowHiden] = useState(true)
const datafalse = (state) =>{SetShowHiden(state);}
  return (
    <Container className='py-5'>
        <Tittle data={data} />
        <MainCard data={data} ShowHide={ShowHide} />
        <ButtonAction showhiden={datafalse}/>
    </Container>
  )
}
