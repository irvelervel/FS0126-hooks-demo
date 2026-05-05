import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import StateExample from './components/StateExample'
import EffectExample from './components/EffectExample'
function App() {
  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col className="text-center">
          {/* <StateExample /> */}
          <EffectExample />
        </Col>
      </Row>
    </Container>
  )
}

export default App
