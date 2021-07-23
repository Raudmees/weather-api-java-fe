import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { weatherActions } from '../store/weather-slice'

const Search = () => {
  const dispatch = useDispatch()
  const [cityName, setCityName] = useState('')

  const fetchCityWeatherData = async (event) => {
    event.preventDefault();
    try {
        const res = await fetch(`http://localhost:8080/api/weather/${cityName}`)
        const data = await res.json()
        console.log(data)
        dispatch(weatherActions.setCityWeather(data))
    } catch (error) {
        console.error(error)
    }
  }

  const cityNameHandler = (event) => {
    setCityName(event.target.value)
  }

  return (
    <Form className='d-flex justify-content-center mt-5' onSubmit={fetchCityWeatherData}>
      <Form.Control
        size='lg'
        type='text'
        placeholder='New York'
        className='w-50'
        onChange={cityNameHandler}
      />
      <Button className='ms-2' variant='info' type="submit" >
        Search
      </Button>
    </Form>
  )
}

export default Search
