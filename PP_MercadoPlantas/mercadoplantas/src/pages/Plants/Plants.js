import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"

const Plants = () => {
    const {id} = useParams()
    const url = "http://localhost:3000/plants/" + id

    const {data:plant, loading, error} = useFetch(url)


  return (
    <div>Plants</div>
  )
}

export default Plants