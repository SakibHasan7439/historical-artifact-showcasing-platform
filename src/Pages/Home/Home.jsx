import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner";
import FeaturesArtifacts from "../../Components/FeaturesArtifacts";
import OldestArtifact from "../../Components/OldestArtifact";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Artifact Tracker | Home</title>
            </Helmet>
            <Banner></Banner>
            <FeaturesArtifacts></FeaturesArtifacts>
            <OldestArtifact></OldestArtifact>
        </div>
    );
};

export default Home;