import React from 'react'
import { Form, Col } from 'react-bootstrap'
import { Input,Checkbox } from 'semantic-ui-react'
import './App.css'
export default function SearchForm({ params, onParamChange }) {
  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        <Form.Group as={Col}>
        <Input style={{fontFamily:'Poppins'}} fluid onChange={onParamChange} value={params.description} name="description" placeholder='Enter a post' />
         
        
        </Form.Group>
        <Form.Group as={Col}>
         
          <Input style={{fontFamily:'Poppins'}} fluid onChange={onParamChange} value={params.location} name="location" placeholder='Location' />
          
        </Form.Group>
        <Form.Group as={Col} xs="auto" className="ml-2">
        <Checkbox onChange={onParamChange} value={params.full_time} name="full_time" id="full-time" style={{fontFamily:'Poppins'}} label="Full Time" />
        
        </Form.Group>
      </Form.Row>
    </Form>
  )
}
