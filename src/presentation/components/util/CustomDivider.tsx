import { Box, Divider } from "@mui/material"

interface Props {
    orientation?: string,
    width?: string,
    mbottom?: number
}

export const CustomDivider = ({orientation = '', width = '50%', mbottom = 3}:Props) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: `${orientation}`, marginBottom: mbottom }}>
            <Divider orientation="horizontal" style={{ display: 'flex', backgroundColor: '#6d6464', width: width }} />
        </Box>
    )
}
