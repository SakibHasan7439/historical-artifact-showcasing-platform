import oldestArtifact from "../assets/oldestArtifact.jpg"
import secondArtifact from "../assets/artifact2.jpg"
import oldestThird from "../assets/oldest3.jpg"
import oldestForth from "../assets/oldest4.jpg"

const OldestArtifact = () => {
    return (
        <div className="bg-gray-900 pt-12">
            <h1 className="text-white text-center text-2xl md:text-3xl font-playfair">Oldest Historical Artifact founded by human</h1>
            <section className="flex flex-col py-8 lg:py-12 md:flex-row gap-8 items-center justify-center bg-gray-900">
            {/* Wrapper for image and details */}
            <div className="relative flex-1 group max-w-md text-white">
                {/* Main Image */}
                <div className="overflow-hidden rounded-lg">
                <img
                    src={oldestArtifact}
                    alt="Oldest Artifact"
                    className="w-full h-auto transform transition-transform duration-500 ease-out group-hover:scale-110"
                />
                </div>

                {/* Details Box */}
                <div className="absolute bottom-0 left-0 w-full bg-black/80 p-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-10 transition-all duration-700 ease-out">
                <h2 className="text-lg font-bold">Oldest Artifact Found</h2>
                <p className="text-sm">
                    This artifact, discovered in western Ukraine, dates back to approximately 3.3 million years ago.
                </p>
                </div>
            </div>
            <div className="relative flex-1 group max-w-md text-white">
                {/* Main Image */}
                <div className="overflow-hidden rounded-lg">
                <img
                    src={secondArtifact}
                    alt="Oldest Artifact"
                    className="w-full h-auto md:h-[346px] lg:h-[400px] transform transition-transform duration-500 ease-out group-hover:scale-110"
                />
                </div>

                {/* Details Box */}
                <div className="absolute bottom-0 left-0 w-full bg-black/80 p-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-10 transition-all duration-700 ease-out">
                <h2 className="text-lg font-bold">Oldest Stone Tools</h2>
                <p className="text-sm">
                    The oldest stone tools ever discovered - older than humanity itself.
                    The Artifact age is approximately  3.3 million year .
                </p>
                </div>
            </div>
            </section>

            <section className="flex flex-col py-8 lg:py-12 md:flex-row gap-8 items-center justify-center bg-gray-900">
            {/* Wrapper for image and details */}
            <div className="relative flex-1 group max-w-md text-white">
                {/* Main Image */}
                <div className="overflow-hidden rounded-lg">
                <img
                    src={oldestThird}
                    alt="Oldest Artifact"
                    className="w-full h-auto lg:h-[400px] transform transition-transform duration-500 ease-out group-hover:scale-110"
                />
                </div>

                {/* Details Box */}
                <div className="absolute bottom-0 left-0 w-full bg-black/80 p-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-10 transition-all duration-700 ease-out">
                <h2 className="text-lg font-bold">The Narmer Palette</h2>
                <p className="text-sm">
                The Narmer Palette is an ancient Egyptian archaeological artifact that dates back to around 3100 BCE
                </p>
                </div>
            </div>
            <div className="relative flex-1 group max-w-md text-white">
                {/* Main Image */}
                <div className="overflow-hidden rounded-lg">
                <img
                    src={oldestForth}
                    alt="Oldest Artifact"
                    className="w-full h-auto md:h-[346px] lg:h-[400px] transform transition-transform duration-500 ease-out group-hover:scale-110"
                />
                </div>

                {/* Details Box */}
                <div className="absolute bottom-0 left-0 w-full bg-black/80 p-4 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-10 transition-all duration-700 ease-out">
                <h2 className="text-lg font-bold">Oldowan Stone Tools</h2>
                <p className="text-sm">
                    One of the oldest stone tools ever discovered , dating back approximately 2.6 million years
                </p>
                </div>
            </div>
            </section>
        </div>
    );
};

export default OldestArtifact;