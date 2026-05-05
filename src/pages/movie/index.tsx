import MetaDataHeader from "../../components/metaheader/MetaDataHeader";
import { YouTubeGrid } from "../../components/movie/YouTubeGrid";

const Movie = () => {
  return (
    <>
      <MetaDataHeader title={"Movie"} />
      <div className="page-container">
        <h1 className="h1-mint">MOVIE</h1>
        <YouTubeGrid />
      </div>
    </>
  );
};

export default Movie;
