import { Card, CardHeader, Avatar, Box, CardContent } from "@mui/material"

export const StatePost = () => {
    return (
        <Card>
            <CardHeader>
                <Avatar
                    alt="Remy Sharp"
                    src="https://mui.com/static/images/avatar/1.jpg"
                    style={{ marginLeft: 10, marginRight: 5, cursor: 'pointer' }}
                    sx={{ '&:hover': { backgroundColor: '#a2a8af' } }} />
                <Box>
                    <p>{`¿Qué estas pensando $ ?`}</p>
                </Box>
            </CardHeader>
            <CardContent>

            </CardContent>
        </Card>
    )
}
