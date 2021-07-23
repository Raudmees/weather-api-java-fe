import Search from '../components/Search'
import SearchResult from '../components/SearchResult'

import { useSelector } from 'react-redux'

const Home = () => {
    const weatherData = useSelector(state => state.cityWeather)
    return <div>
        <Search></Search>
        <div className="container mt-4">
        {Object.keys(weatherData).length === 0 ? (
            <p className="text-center">Enter a valid city name!</p>
        ) : (
            <SearchResult data={weatherData}></SearchResult>
        )}
        </div>
    </div>
}

export default Home