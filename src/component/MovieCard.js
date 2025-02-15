import { IMG_CND_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div>
        <img alt='Movie Card' src={IMG_CND_URL + posterPath}/>
    </div>
  )
}

export default MovieCard