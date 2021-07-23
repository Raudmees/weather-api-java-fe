import { useState } from 'react'
import { Card, Button, Toast } from 'react-bootstrap'
import axios from 'axios'

const SearchResult = (props) => {
  const [show, setShow] = useState(false)

  const postCityNameAndWeatherDatatoDatabase = async (data) => {
    try {
      await axios.post('http://localhost:8080/api/weather', { ...data })
      setShow(true)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Card>
        <Card.Header as='h5'>{props.data.cityName}</Card.Header>
        <Card.Body className='d-flex flex-row justify-content-between'>
          <Card.Text>Temperature: {props.data.temperature} °C</Card.Text>
          <Card.Text>Wind speed: {props.data.windSpeed} m/s</Card.Text>
          <Card.Text>Humidity: {props.data.humidity} %</Card.Text>
          <Button
            variant='success'
            onClick={() => postCityNameAndWeatherDatatoDatabase(props.data)}
          >
            Save for polling
          </Button>
        </Card.Body>
      </Card>
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={3000}
          autohide
          bg="success"
          className="float-end mt-2"
        >
          <Toast.Body>City added to polling list!</Toast.Body>
        </Toast>
    </div>
  )
}

export default SearchResult
