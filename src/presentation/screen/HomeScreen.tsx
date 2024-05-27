import { Grid } from "@mui/material"
import { Layout } from "../components/layout/Layout"
import { Shortcuts } from "../components/shortcut/Shortcuts"
import { Contact } from "../components/contacts/Contact"

export const HomeScreen = () => {
    return (
        <Layout>
            <Grid item md={4} xs={12} style={{textAlign: 'right', paddingRight: 40, paddingTop: 20}}>
                <Shortcuts />
            </Grid>
            <Grid item md={4} xs={12}>
                2
            </Grid>
            <Grid item md={4} xs={12} style={{paddingLeft: 40, paddingTop: 20}}>
                <Contact />
            </Grid>
        </Layout>
    )
}