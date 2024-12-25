import { Accordion } from "flowbite-react";

const FAQAccordion = () => {
    return (
        <div className="md:w-1/2">
            <h1 className="pl-4 text-2xl font-bold md:text-4xl">Frequently Asked Questions</h1>
            <Accordion collapseAll>
            <Accordion.Panel>
            <Accordion.Title className="p-4">How are historical artifacts discovered?</Accordion.Title>
            <Accordion.Content className="border-b border-black">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                The discovery of historical artifacts is often the result of careful research, fieldwork, and sometimes even chance
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                    <strong>Planned Excavations:</strong> Most artifacts are discovered during systematic archaeological excavations, where archaeologists dig at sites that are thought to contain historical remnants. These excavations can happen in a variety of locations, including ancient cities, burial sites, temples, and battlefields.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                    <strong>Survey and Mapping:</strong> Before excavation begins, archaeologists often conduct surveys of the land, looking for surface artifacts or signs of ancient structures. This can involve walking over large areas, looking for pottery shards, bones, or other remains.
                </p>
            </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
            <Accordion.Title className="p-4">Why are historical artifacts important?</Accordion.Title>
            <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                Artifacts help us understand the daily life, customs, and practices of ancient peoples. Items like pottery, tools, clothing, and artworks give us a tangible connection to the people who lived long ago. They help us comprehend their beliefs, values, social structures, and technological advancements.
                </p>
            </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
            <Accordion.Title className="p-4">What is the oldest artifact ever discovered?</Accordion.Title>
            <Accordion.Content>
                <h2 className="text-lg font-playfair md:text-2xl">Lomekwi 3 Stone Tools</h2>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                    one of the most significant contenders is the stone tools discovered in Lomekwi 3 in Kenya, which are estimated to be around 3.3 million years old.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                    These stone tools predate the genus Homo, which includes modern humans, by around 700,000 years. This suggests that the ability to make tools was not exclusive to Homo species but could have been practiced by other hominin ancestors, such as Australopithecus.
                </p>       
            </Accordion.Content>
            </Accordion.Panel>

            <Accordion.Panel>
            <Accordion.Title className="p-4">What is the most famous historical artifact in the world?</Accordion.Title>
            <Accordion.Content>
                <h2 className="text-lg font-playfair md:text-2xl">Rosetta Stone</h2>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                The Rosetta Stone is one of the most significant historical artifacts ever discovered. It is a granodiorite stele that was created in 196 BCE during the Ptolemaic dynasty in Egypt. The stone is inscribed with the same text written in three scripts: Hieroglyphics, Demotic, and Ancient Greek.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                Importance: The stone provided the key to deciphering Egyptian hieroglyphs, a language that had been a mystery for centuries. 
                </p>
            </Accordion.Content>
            </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default FAQAccordion;