import { Box, Grid } from "@mui/material"
import { Header } from "../header/Header"
import { PropsWithChildren } from "react"

interface Props extends PropsWithChildren {}

export const Layout = ({ children }: Props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'colum',
                minHeight: '100vh'
            }}
        >
            <Grid container columns={2} style={{ flex: 1, flexDirection: 'column' }}>
                <Grid item style={{ background: '#242526', width: '100%' }}>
                    <Header />
                </Grid>
                <Grid container item style={{ background: '#18191a', flex: 9 }}>
                    {children}
                </Grid>
            </Grid>
        </Box>
    )
}
