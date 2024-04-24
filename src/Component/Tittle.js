import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Tittle = (props) => {
  return (
    <Row className='justify-content-center'>
       <Col sm="8"><p>يوجد لديك {props.data.length} مواعيد</p></Col>
    </Row>
  )
}
