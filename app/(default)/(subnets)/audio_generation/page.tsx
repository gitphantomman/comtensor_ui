import Audio from "@/components/subnets/audio-generation";

export const metadata = {
    title: 'Subnet Audio Generation',
    description: 'This subnetwork is a decentralized system designed for text-to-audio applications within the Bittensor network. It consists of validators and miners that work collaboratively to produce high-quality audio from the provided prompts. We will start with text-to-speech (TTS) in the first phase and work simultaneously to add music generation in future updates.',
}


const Audio_Generation = () => {

    return (
        <main className="relative mt-[30px] my-auto mx-auto xl:w-[1400px] px-[20px] py-[50px]">
            <Audio/>
        </main>
    )
}


export default Audio_Generation;