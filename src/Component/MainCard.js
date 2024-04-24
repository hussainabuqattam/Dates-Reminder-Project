import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ListaGroup } from './ListaGroup';
export const MainCard = (props) => {

  return (
    <Row className='justify-content-center'>
       <Col sm="8">
         <div className='maincardstyle'>
        { props.ShowHide == true ? 

            (

                props.data.map((item) =>{
                    
                    return(
                        props.ShowHide == true ? 
                        (item.id <= 5 ? ( <ListaGroup username={item.username} email={item.email} /> ): <></>  ) : (<div>No data to show </div>) 
                   )
                })
            ) : (<span className='Nodata'>No Data to show</span>)
        }
         </div>
       </Col>
    </Row>
  )
}

