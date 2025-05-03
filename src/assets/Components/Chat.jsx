import React from 'react';
import ChatProp from './ChatProp';
import { TiMessages } from "react-icons/ti";
import { FaRobot } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { FaFlagCheckered } from "react-icons/fa";


const ai=<FaRobot className='h-4 w-7 text-pink-500'/>
const user=<FaUserAlt className='h-4 w-7 text-green-300'/>
const Chat = () => {
  return (
    <div className="flex flex-col gap-[1rem] rounded-3xl border border-purple-900 p-5 w-full">
     
      <div className="flex gap-[1rem] ">
        <div className="h-[2.5rem] w-[2.5rem] rounded-full p-3 text-white bg-pink-500">
          <TiMessages />
        </div>
        <div className="flex flex-col">
          <h5 className="text-white font-bold">Interview Assistant</h5>
          <p className="text-gray-400 text-sm -mt-4">
            Sarah Johnson <span className="text-4xl">.</span> Senior UX Designer
          </p>
        </div>
      </div>

      
      <div className="flex flex-col gap-[1rem]">
        <ChatProp
        key="msg-1"
          message="Based on Sarah's portfolio, consider asking about her design process for mobile-first applications."
          icon={ai}
          className="bg-slate-800 text-white w-full"
        />

        <div className="rounded-lg bg-purple-500 text-white p-3 self-end md:w-[20rem]">
          <p>Can you walk me through your design process for mobile apps?</p>
        </div>

        <ChatProp
        key="msg-2"
          message="I start with user research, create wireframes, prototype in Figma, and iterate based on usability testing..."
          icon={user}
          className="bg-slate-800 text-white w-full"
        />

        <ChatProp
        key="msg-3"
          message="Strong answer showing user-centered approach. Confidence score: 92%"
          icon={ai}
          className="bg-slate-800 text-white w-full"
        />
      </div>

     
      <div className="flex justify-between mt-4">
        <div className='h-[2.5rem] w-[2.5rem] rounded-lg bg-slate-500 text-2xl text-white p-2 cursor-pointer'>
<FaMicrophone/>
        </div>
        <button className="p-2 text-white bg-purple-500 rounded-lg flex items-center gap-2">
          End Interview <FaFlagCheckered/>
        </button>
      </div>
    </div>
  );
};

export default Chat;
