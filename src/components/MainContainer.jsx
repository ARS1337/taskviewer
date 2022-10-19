import React from 'react';
import TaskCreationForm from './TaskCreationForm';
import TaskList from './TaskList';

function MainContainer(props) {
    return (
        <div className='border-2 border-gray-600 p-2 w-full mx-12 flex flex-col relative'>
            <div className='font-bold text-xl absolute -top-4 bg-white px-1 text-gray-700'>User Tasks</div>
            <div className='pt-10 '><TaskCreationForm /></div>
            <div className='flex items-center justify-center'>
                <div className='text-gray-600  w-[97%] border-gray-400 border  bg-gray-400 my-4 mb-8 '></div>
            </div>
           <div className='pb-12'>
           <TaskList />
           </div>
        </div>
    );
}

export default MainContainer;