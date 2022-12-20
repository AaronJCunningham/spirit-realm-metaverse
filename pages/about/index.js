import Link from "next/link";
import Description from "../../components/about/Description";
import { RoadMap } from "../../components/about/RoadMap";
import Team from "../../components/about/Team";
import MetaDataHeader from "../../components/metaheader/MetaDataHeader";

const About = () => {
  return (
    <>
      <MetaDataHeader
        title={"About"}
        content={"More information about our team, roadmap, and more..."}
      />
      <div className="page-container">
        <div className="margin">
          <Description />
          {/* <RoadMap /> */}
          <div className="links-privacy">
            <Link href="/privacy">Privacy Policy - </Link>
            <Link href="/terms">Terms and Services</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
