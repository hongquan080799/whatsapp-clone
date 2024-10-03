import './style.css'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import {IconButton, Input, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { SidebarChat } from '../SidebarChat';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='flex justify-between px-5 pt-1 items-center'>
                <p className='text-xl font-bold'>Chats</p>
                <div className='flex justify-around'>
                    <IconButton>
                        <CreateOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className='px-6'>
                <Input
                    fullWidth
                    endAdornment={
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    } />
            </div>
            {[1,2,3,4,5,6].map(x => <SidebarChat />)}
        </div>
    )
}