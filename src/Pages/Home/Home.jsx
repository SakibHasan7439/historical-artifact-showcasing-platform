import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner";
import FeaturesArtifacts from "../../Components/FeaturesArtifacts";
import OldestArtifact from "../../Components/OldestArtifact";
import FAQSection from "../../Components/FAQSection";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Artifact Tracker | Home</title>
            </Helmet>
            <Banner></Banner>
            <FeaturesArtifacts></FeaturesArtifacts>
            <OldestArtifact></OldestArtifact>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Home;