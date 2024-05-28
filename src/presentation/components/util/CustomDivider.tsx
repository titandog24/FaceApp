import { Box, Divider } from "@mui/material"

interface Props {
    orientation?: string
}

export const CustomDivider = ({orientation = ''}:Props) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: `${orientation}`, marginBottom: 3 }}>
            <Divider orientation="horizontal" style={{ display: 'flex', backgroundColor: '#6d6464', width: '50%' }} />
        </Box>
    )
}
