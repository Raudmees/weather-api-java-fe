import { Card, Button } from 'react-bootstrap'
import { format } from 'date-fns'
import { useDispatch } from 'react-redux'
import { weatherActions } from '../store/weather-slice'
import axios from 'axios'

const Record = (props) => {
  
  const dispatch = useDispatch();

  const getDate = (value) => {
    var result = format(new Date(value), 'H:mm')
    return result
  }

  const removeCityFromDbAndState = async () => {
    try {
        const res = await axios.delete(`http://localhost:8080/api/weather/${props.data.id}`)
        console.log(res)
        dispatch(weatherActions.removeRecordPoint(props.data.id))
    } catch (error) {
        console.error(error)
    }
  }

  return (
    <Card className="my-4">
      <Card.Header className='d-flex justify-content-between'>
        <div className='d-flex align-items-center'>
          <h3 className='m-0 '>{props.data.name}</h3>
        </div>
        <Button variant='danger' onClick={removeCityFromDbAndState}>
          Delete
        </Button>
      </Card.Header>
      {props.data.recordPoints.map((recordPoint, index) => (
        <Card.Body
          className='d-flex flex-row justify-content-between'
          key={index}
        >
          <Card.Text>Temperature: {recordPoint.temperature} °C</Card.Text>
          <Card.Text>Wind speed: {recordPoint.windSpeed} m/s</Card.Text>
          <Card.Text>Humidity: {recordPoint.humidity} %</Card.Text>
          <Card.Text>Time: {getDate(recordPoint.time)}</Card.Text>
        </Card.Body>
      ))}
    </Card>
  )
}

export default Record
