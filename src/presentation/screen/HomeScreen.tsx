import { Grid } from "@mui/material"
import { Layout } from "../components/layout/Layout"
import { Shortcuts } from "../components/shortcut/Shortcuts"
import { Sliders } from "../components/util/Sliders"
import { HomeInfo } from "../components/util/HomeInfo"

export const HomeScreen = () => {
    return (
        <Layout>
            <Grid item md={4} xs={12} style={{textAlign: 'right', paddingRight: 40, paddingTop: 20}}>
                <Shortcuts />
            </Grid>
            <Grid item md={4} xs={12} style={{paddingTop: 20}}>
                <Sliders /> 
            </Grid>
            <Grid item md={4} xs={12} style={{paddingLeft: 40, paddingTop: 20}}>
                <HomeInfo />
            </Grid>
        </Layout>
    )
}