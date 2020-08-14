import React, { useState } from 'react'
import { Card, Badge,  Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import './App.css'
import { Button } from 'semantic-ui-react'
import { Icon, Label } from 'semantic-ui-react'
const color = [
  'orange',
]
const size = [
  'large',
  
]
export default function Job({ job }) {
  const [open, setOpen] = useState(false)
  
  return (
    <Card className="mb-3" style={{borderRadius:20}}>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title style={{fontFamily:'Poppins',fontSize:25}}>
              {job.title} - <span style={{fontFamily:'Poppins',fontSize:20}} className="text-muted font-weight-light">{job.company}</span>
            </Card.Title>
            <Card.Subtitle style={{fontFamily:'Poppins'}} className="text-muted mb-2">
              {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Label style={{fontFamily:'Baloo Tamma 2',marginTop:10,marginBottom:10}} size={size} color={color} key={color}>
            {job.type}
            </Label>
            <Label style={{fontFamily:'Baloo Tamma 2'}}  size={size} color={color} key={color}>
             {job.location}
            </Label>
           
            <div style={{ wordBreak: 'break-all' }}>
              <p style={{fontFamily:'Baloo Tamma 2',fontSize:18}}>How to apply - <span><ReactMarkdown style={{fontFamily:'Baloo Tamma 2',fontSize:25}} source={job.how_to_apply} /></span></p>
            
            </div>
          </div>
          <img className="d-none d-md-block" height="50" alt={job.company} src={job.company_logo} />
        </div>
        <Card.Text style={{marginTop:20}}>
        <Button style={{fontFamily:'Baloo Tamma 2'}} onClick={() => setOpen(prevOpen => !prevOpen)} primary> {open ? 'Hide Details' : 'View Details'}</Button>
        </Card.Text>
        <Collapse in={open}>
          <div className="mt-4">
            <p style={{fontFamily:'Poppins',fontSize:18}}>{job.description}</p>
          
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  )
}
