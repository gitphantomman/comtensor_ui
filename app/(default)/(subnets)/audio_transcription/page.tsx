import Transcription from "@/components/subnets/audio_transcription";

export const metadata = {
    title: 'Subnet Transcription',
    description: 'The Transcription subnet within the Bittensor ecosystem is a decentralized AI network focused on audio-to-text technology. The network aims to democratize access to advanced AI that transcribes spoken language, and includes miners who transcribe using models like Wave2Vec 2.0 and validators who ensure transcription quality. The network emphasizes the use of rich audio datasets for training and plans to include more models and datasets to improve language understanding. It also emphasizes the importance of computing resources for effective transcription and rewards. This initiative is an important step toward increasing the accessibility and value of audio content in a variety of fields.',
}

const Audio_Transcription = () => {

    return (
        <main className="relative mt-[30px] my-auto mx-auto xl:w-[1400px] px-[20px] py-[50px]">
            <Transcription/>
        </main>
    )
}


export default Audio_Transcription;