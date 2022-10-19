export const tableColumns = [
    {
        name: "Task",
        selector: (row) => row.Task,
        sortable: true,
        center: true,
        width:"20%",
        style:{
            // backgroundColor:"green"
        }
    },
    {
        name: "Expiry Date",
        selector: (row) => row.Expiry_date,
        sortable: true,
        center: true,
        width:"20%",
    },
    {
        name: "Users",
        selector: (row) => row.User,
        sortable: true,
        center: true,
        width:"30%",
        style:{
            width:"100%"
        }
    },
    {
        name: "Important",
        selector: (row) => row.Important,
        sortable: true,
        center: true,
        width:"15%"
    },
    {
        name: "Action",
        selector: (row) => row.action,
        sortable: true,
        center: true,
        width:"15%"
    },
];