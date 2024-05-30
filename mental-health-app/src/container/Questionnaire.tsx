import { useNavigate } from "react-router-dom";
import Question from "../components/Question";

const Questionnaire = (): JSX.Element => {
  const history = useNavigate();

  const navigateToDashboard = () => {
    history("/dashboard");
  };

  return (
    <div className="grid md:grid-cols-4 bg-gradient-to-t from-bbPink to-bbSky h-screen">
      {/* empty space 1*/}
      <div className="col-span-1"></div>

      {/* questionnaire box */}
      <div className="flex flex-col bg-gray-300 h-screen col-span-2 gap-4 items-center">
        {/* title */}
        <div className="m-5">
          <h3 className="font-bold text-lg mt-10">
            Please answer these questions (for us to understand you better)
          </h3>
        </div>

        {/* questions */}
        <div className="flex flex-col gap-8">
          <Question
            question="What types of content are you interested in?"
            option1="Articles"
            option2="Videos"
            option3="Guided Exercises"
          ></Question>

          <Question
            question="Do you have any sleep issues?"
            option1="Insomnia"
            option2="Rest less sleep"
            option3="No issues, haha"
          ></Question>

          <Question
            question="What are your main goals for using this app?"
            option1="Mood Tracking"
            option2="Reduce Stress"
            option3="Manage Anxiety"
          ></Question>

          <Question
            question="Would you like to receive daily reminders for exercises or journaling?"
            option1="Daily"
            option2="Weekly"
            option3="Monthly"
          ></Question>
        </div>

        {/* sign up */}
        <div className="mb-6 w-2/3">
          <button
            className="btn bg-sky-300 text-white hover:shadow-inner shadow-lg w-full"
            onClick={navigateToDashboard}
          >
            Sign up
          </button>
        </div>
      </div>

      {/* empty space 2*/}
      <div className="col-span-1"></div>
    </div>
  );
};

export default Questionnaire;
