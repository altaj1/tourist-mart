import React from 'react';
import MenuItem from './MenuItem';
import { FaUserCog } from 'react-icons/fa';
import { BsFillMotherboardFill } from "react-icons/bs";

const AdminMenu = () => {
    return (
        <>
        this is admin menu
            <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
            <MenuItem icon={BsFillMotherboardFill} label='Manage Contests' address='ManageContest' />
        </>
    );
};

export default AdminMenu;