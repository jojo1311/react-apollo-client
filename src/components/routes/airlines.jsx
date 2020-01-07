import React from 'react'
import { Link } from "react-router-dom"
import { Column, Row } from "simple-flexbox"

const Airlines = () => {

  return (
    <>
      <Link className='menu' to={`/airlines`}>
        <h1>UK Airlines</h1>
      </Link>
      <Row horizontal="spaced">
        <Column flexGrow={1} style={{ minWidth: '280px', width: '65%' }}>
          <span>Airline List</span>
        </Column>
        <Column flexGrow={1} style={{ width: '45%' }}>
          <span>Airline Details</span>
        </Column>
      </Row>
    </>
  )
}

export default Airlines
