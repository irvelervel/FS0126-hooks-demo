import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import StateExample from './components/StateExample'
function App() {
  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col className="text-center">
          <StateExample />
        </Col>
      </Row>
    </Container>
  )
}

export default App
