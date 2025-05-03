


type Props = {
  content1: string;
  content2: string;
  styles:string;
};

const IntroButtons = ({content1,content2,styles}:Props) => {
  return (
    <div className={`${styles} `} id='Intro'>
      <button className='flex items-center justify-center text-gray-100 h-[4rem] w-[15rem] rounded-md bg-gradient-to-r from-purple-600  via-purple-700  to-pink-400 p-5'>
        {content1} 
      </button>
      <button className='flex items-center justify-center relative text-gray-300 h-[4rem] w-[12rem] border-2 border-gray-400 rounded-md p-5'>
        {content2} 
      </button>
    </div>
  );
}

export default IntroButtons;
