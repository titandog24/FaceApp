import { SearchOutlined } from '@mui/icons-material'
import { Avatar, Input, InputAdornment } from '@mui/material'

export const SearchApp = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" style={{ marginLeft: 10, marginRight: 5 }} />
            <Input
                type="text"
                placeholder="Buscar en FaceApp"
                style={{
                    borderRadius: 20,
                    backgroundColor: '#3a3b3c',
                    borderColor: '#3a3b3c',
                    padding: 5,
                    color: 'white'
                }}
                startAdornment={
                    <InputAdornment position="start">
                        <SearchOutlined style={{ color: 'white' }} />
                    </InputAdornment>
                }
            />
        </div>
    )
}
