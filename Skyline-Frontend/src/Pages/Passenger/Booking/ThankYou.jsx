import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    
    <section>
        <Container>
            <Row>
                <Col lg='12' className='pt-5 text-align-center text-center mt-[200px]'>
                    <div className="thank_you">
                        <span><i class="fa-regular fa-circle-check fs-1" 
                        style={{'color':"var(--secondary-color)"}}></i></span>
                        <h1 className="mb-3 fw-semibold display-1" 
                        style={{'fontFamily':"var(--subtitle-font-name)"}}>Thank You</h1>
                        <h3 className="mb-4 fs-5">Your Tour is booked.</h3>

                        <Button className='btn primary__btn w-25 mt-4 !important'><Link to='/home'>Back to Home</Link></Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ThankYou