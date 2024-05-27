import { MessageOutlined, NotificationsActiveOutlined, WidgetsOutlined } from "@mui/icons-material"
import { Avatar } from "@mui/material"

export const ButtonsActionsHeader = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10, marginRight: 10  }}>
        <Avatar 
            style={{ marginLeft: 10, marginRight: 5, cursor: 'pointer' }} 
            sx={{ bgcolor: '#3a3b3c', '&:hover': {backgroundColor: '#545658'} }}>
            <WidgetsOutlined />
        </Avatar>
        <Avatar 
            style={{ marginLeft: 10, marginRight: 5, cursor: 'pointer' }} 
            sx={{ bgcolor: '#3a3b3c', '&:hover': {backgroundColor: '#545658'}  }}>
            <MessageOutlined />
        </Avatar>
        <Avatar 
            style={{ marginLeft: 10, marginRight: 5, cursor: 'pointer' }} 
            sx={{ bgcolor: '#3a3b3c', '&:hover': {backgroundColor: '#545658'}  }}>
            <NotificationsActiveOutlined />
        </Avatar>
        <Avatar 
            alt="Remy Sharp" 
            src="https://mui.com/static/images/avatar/1.jpg" 
            style={{ marginLeft: 10, marginRight: 5, cursor: 'pointer' }} 
            sx={{'&:hover': {backgroundColor: '#a2a8af'}}}/>
    </div>
  )
}
