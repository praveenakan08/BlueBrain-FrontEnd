import { useState } from "react";
import EmotionButton from "../components/EmotionButton";
import TodayMoodTrackerModal from "../components/TodayMoodTrackerModal";

const MyMoodTracker = (): JSX.Element => {
    const [emotion, setEmotion] = useState('');
    const [open, setOpen] = useState(false);

    const handleEmotion = (inputEmotion: string) => {
        setEmotion(inputEmotion);
    }

    const saveEmotionWithTime = () => {
        const timeInput = document.getElementById('timeInput') as HTMLInputElement;
        const selectedTime = timeInput.value;

        // TODO - add API call to save the selected data into db
        console.log("saved emotion to db " + emotion + " " + selectedTime);

        alert("Today's mood successfully saved!");
        setOpen(true);
    }

    return (
      <div className="grid md:grid-cols-4 h-full">
        <div className="col-span-1"></div>

        <div className="flex justify-center items-center flex-col bg-gray-300 h-screen col-span-2">
            {/* input mood question */}
            <div className="m-10 flex items-center justify-center">
                <p className="font-bold"> How are you feeling today? </p>
            </div>

            {/* emojis */}
            <div className="mb-10">
                <ul className="flex md:flex-row flex-wrap items-center justify-center">
                <li className={`${emotion === "happy" ? 'selected' : ''}`}>
                    <EmotionButton emotion={"happy"} handleEmotion={handleEmotion} emojiUrl={'/images/happy.png'}/>
                </li>
                <li className={`${emotion === "sad" ? 'selected' : ''}`}>
                    <EmotionButton emotion={"sad"} handleEmotion={handleEmotion} emojiUrl={'/images/sad.png'}/>
                </li>
                <li className={`${emotion === "excited" ? 'selected' : ''}`}>
                    <EmotionButton emotion={"excited"} handleEmotion={handleEmotion} emojiUrl={'/images/excited.png'}/>
                </li>
                <li className={`${emotion === "lonely" ? 'selected' : ''}`}>
                    <EmotionButton emotion={"lonely"} handleEmotion={handleEmotion} emojiUrl={'/images/lonely.png'}/>
                </li>
                <li className={`${emotion === "stressed" ? 'selected' : ''}`}>
                    <EmotionButton emotion={"stressed"} handleEmotion={handleEmotion} emojiUrl={'/images/stressed.png'}/>
                </li>
                <li className={`${emotion === "content" ? 'selected' : ''}`}>
                    <EmotionButton emotion={"content"} handleEmotion={handleEmotion} emojiUrl={'/images/content.png'}/>
                </li>
                </ul>
            </div>

            {/* time picker */}
            <div className="mb-10">
                <input type="time" id="timeInput" className="font-bold block bg-gray-300 w-full p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"/>
            </div>

            {/* save button */}
            <div className="mb-6 w-2/3">
                <button
                    className="btn bg-sky-300 text-white hover:shadow-inner shadow-lg w-full"
                    onClick={saveEmotionWithTime}> 
                    
                    SAVE
                </button>

                <TodayMoodTrackerModal open={open} onClose={() => setOpen(false)}>
                    <div className="text-center w-56">
                        Hello
                    </div>
                    <div className="mx-auto my-4 w-48">
                        <h3 className="text-lg font-black text-gray-800">
                            Content~
                        </h3>
                    </div>

                </TodayMoodTrackerModal>
            </div>
        </div>

        <div className="col-span-1"></div>
      </div>
    );
}

export default MyMoodTracker;
