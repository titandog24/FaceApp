import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { ThemeProvider, createTheme } from '@mui/material';
import { GamesOutlined, GroupOutlined, HomeOutlined, StoreOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
    components: {
        MuiBottomNavigationAction: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        color: '#0a66ff', // Color para el icono seleccionado
                        borderBottom: '2px solid #0a66ff',
                        '&:hover': {
                            backgroundColor: '#242526', // Fondo blanco al hacer hover
                        }
                    },
                    color: '#9c9fa3', // Color para los iconos no seleccionados
                    '&:hover': {
                        backgroundColor: '#3a3b3c', // Fondo blanco al hacer hover
                    }
                },
            },
        },
    },
});

export const ButtonNavigation = () => {
    const [value, _setValue] = useState(0)
    const navigate = useNavigate();

    return (
        <Box sx={{ width: 500, backgroundColor: '#242526' }}>
            <ThemeProvider theme={theme}>
                <BottomNavigation
                    style={{ backgroundColor: '#242526' }}
                    showLabels
                    value={value}
                    onChange={(_event, newValue) => {

                        switch (newValue) {
                            case 0:
                                return navigate('/')
                            case 1:
                                return navigate('/store')
                            case 2:
                                return navigate('/group')
                            case 3:
                                return navigate('/game')
                            default:
                                return navigate('/notfound')
                        }
                    }}
                >
                    <BottomNavigationAction icon={<HomeOutlined />} />
                    <BottomNavigationAction icon={<StoreOutlined />} />
                    <BottomNavigationAction icon={<GroupOutlined />} />
                    <BottomNavigationAction icon={<GamesOutlined />} />
                </BottomNavigation>
            </ThemeProvider>
        </Box>
    )
}
