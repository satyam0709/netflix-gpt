import { IMG_CND_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-40 pr-4'>
        <img alt='Movie Card' src={IMG_CND_URL + posterPath}/>
    </div>
  )
}

export default MovieCard