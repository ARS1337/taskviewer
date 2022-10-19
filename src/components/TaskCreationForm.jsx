import React, { useState } from 'react';
import InputComponent from './InputComponent';
import { FaFlag } from "react-icons/fa";
import { useSnackbar } from 'notistack';

function TaskCreationForm(props) {
    const [data, setData] = useState({
        taskDesc: "",
        expiryDate: "",
        Users: ["User-1", "User-2", "User-3"],
        importantFlag: true,
        selectedUser: ""
    })
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleChange = (e) => {
        console.log(e)
        const { name, value } = e.target
        setData(prev => {
            let newData = { ...prev, [name]: value }
            return newData
        })
    }

    console.log("newData ", data)

    const handleFlag = () => {
        setData(prev => {
            let newData = { ...prev, importantFlag: !prev.importantFlag }
            return newData
        })
    }

    const handleSubmit =()=>{
        enqueueSnackbar("rowdata.Task")
    }

    return (
        <div className='flex justify-between items-baseline  font-medium'>
            <InputComponent label="Task" counter={`${data.taskDesc.length}/200`} fullWidth>
                <input name="taskDesc" maxlength={200} value={data.taskDesc} onChange={handleChange} className="border-2 border-gray-600 p-2 w-full " placeholder='Task Description' />
            </InputComponent>
            <InputComponent label="Expiry Date" fullWidth>
                <input name="expiryDate" value={data.expiryDate} onChange={handleChange} type="Date" className="border-2 border-gray-600 p-2 w-full px-4" />
            </InputComponent>
            <InputComponent label="Users" fullWidth>
                <select className='border-2 border-gray-600 p-2 w-full px-4' onChange={handleChange} name="selectedUser">
                    {
                        data.Users.length ? (data.Users.map((option, key) => {
                            return <option value={option}>{option}</option>
                        })) : "loading..."
                    }
                </select>
            </InputComponent>
            <InputComponent label="Important">
                <FaFlag color={data.importantFlag ? "red" : "grey"} size={24} onClick={handleFlag} key={data.importantFlag} className="mb-4" />
            </InputComponent>
            <button className="border-2 border-gray-600 p-2 px-6 hover:bg-gray-200 m-2 mx-4" onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default TaskCreationForm;