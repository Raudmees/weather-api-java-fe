import Record from '../components/Record'
import { getAllRecordPoints } from '../store/weather-actions'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Records = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllRecordPoints())
    }, [dispatch])

    const cityNameWithRecordPoints = useSelector(state => state.recordPoints)

    return (<div className="container mt-5">
       {cityNameWithRecordPoints.map((recordPoint, index) => (
       <Record data={recordPoint} key={index}></Record>
       ))}
    </div>)
}

export default Records