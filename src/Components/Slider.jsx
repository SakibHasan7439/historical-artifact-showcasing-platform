/* eslint-disable react/prop-types */
const Slider = ({ image, text }) => {
    return (
        <div className="w-full bg-center bg-cover h-[600px]" style={{ background: `url(${image})`}}>
            <div className="flex items-center justify-center w-full h-full bg-gray-900/60">
                <div className="text-center md:w-3/4 lg:w-[60%]">
                    <h1 className="md:text-xl font-semibold text-white">
                        {text}    
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Slider;