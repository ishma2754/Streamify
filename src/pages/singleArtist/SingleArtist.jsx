import { Artist } from "../../components"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const SingleArtist = () => {
  const {id} = useParams()
  const { data} = useSelector((state) => state.streamify);

  const singleArtist = data?.single_artist.find((artist) => artist.id === Number(id))
  if (!singleArtist) {
    return <div>Artist not found.</div>;
  }


  return (
    <div>
      <Artist singleArtist={singleArtist}/>
    </div>
  )
}

export default SingleArtist
