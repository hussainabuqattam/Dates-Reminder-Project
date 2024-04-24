import React from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PageContainer } from './PageContainer';
export const ButtonAction = (props) => {
    const statedatafalse = () =>{
        props.showhiden(false)
    }
    const statedatatrue = () =>{
        props.showhiden(true)
    }
  return (
    <Row className='justify-content-center'>
       <Col sm="8" className='m-2 d-flex justify-content-between'>
            <Button variant="danger" className='p-2' onClick={statedatafalse}>حذف المواعيد</Button>
            <Button variant="success" className='p-2' onClick={statedatatrue}>عرض المواعيد</Button>
        </Col>
    </Row>
  )
  
}
