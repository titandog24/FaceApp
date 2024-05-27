import { Grid} from "@mui/material"
import { ButtonNavigation } from "./ButtonNavigation"
import { SearchApp } from "./SearchApp"
import { ButtonsActionsHeader } from "./ButtonsActionsHeader"

export const Header = () => {
    return (
        <Grid container rowGap={3} style={{ marginTop: 10, marginBottom: 5 }}>
            <Grid item xs={4}>
                <SearchApp />
            </Grid>
            <Grid item xs={4} textAlign={'center'}>
                <ButtonNavigation />
            </Grid>
            <Grid item xs={4}>
                <ButtonsActionsHeader />
            </Grid>
        </Grid>
    )
}
