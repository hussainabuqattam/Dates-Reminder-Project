import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import person from '../Image/person.jpg'

export const ListaGroup = (props) => {
  return (
   <ListGroup>
      <ListGroup.Item className='List_Style'>
         <Image src={person} className='img_circle'/>
                <div className='textdetails'>
                    <h3>{props.username}</h3>
                    <p>{props.email}</p>
                </div>        
      </ListGroup.Item>
   </ListGroup>
  )
}
