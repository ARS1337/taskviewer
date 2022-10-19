import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import { FaFlag } from 'react-icons/fa';
import { tableColumns } from '../data/tableColumns';
import { AiFillDelete } from "react-icons/ai";
import { useSnackbar } from 'notistack';

const customStyles = {
    cells: {
        style: {
            width: "10rem", // override the row width
            height: "5rem"
        },
    },
};


function TaskList(props) {
    const [isFetching, setIsFetching] = useState(true);
    const [tableData, setTableData] = useState([])
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const getData = async () => {
        setIsFetching(true)
        let res = await axios("http://localhost:3000/tasks")
        setTableData(res.data)
        setIsFetching(false)
    }

    useEffect(() => {
        getData()
    }, [])

    const handleDelete = async (Task) => {

    }

    let bannerList = useMemo(() => tableData.map((rowdata) => {
        if(rowdata.importantFlag){
            enqueueSnackbar(rowdata.Task)
        }
        console.log("rowdata", rowdata)
        let row = { ...rowdata }
        row.Task = (
            <div className='font-medium text-base'>{rowdata.Task}</div>
        )
        row.Expiry_date = (
            <div className='font-medium text-base'>{rowdata.Expiry_date}</div>
        )
        row.User = (
            <div className='bg-red-300'>
                <select className='border-2 border-gray-600 p-2 w-full px-4 font-medium text-base' name="selectedUser">
                    {
                        rowdata.User.map((option, key) => {
                            return <option value={option} className='font-medium text-base'>{option}</option>
                        })
                    }
                </select>
            </div>

        )
        row.Important = (
            <FaFlag color={rowdata.importantFlag ? "red" : "grey"} size={24} key={rowdata.importantFlag} className="mb-4" />
        )
        row.action = (
            <AiFillDelete color={"red"} size={24} key={rowdata.importantFlag} className="mb-4" onClick={() => { handleDelete(row.Task) }} />
        )
        return row;
    }), [tableData])

    return (
        <div className='border-2 mx-4 border-gray-800'>
            <DataTable
                data={bannerList}
                columns={tableColumns}
                striped={true}
                center={true}
                progressPending={isFetching}
                // pagination
                // paginationServer
                progressComponent={'loading...'}
                selectableRowsRadio
                customStyles={customStyles}
            />
        </div>
    );
}

export default TaskList;