import { RequestEvent } from "../requestAndEvents/RequestEvent"
import { Contact } from "../contacts/Contact"
import { Events } from "../requestAndEvents/Events"
import { CustomDivider } from "../util/CustomDivider"

export const HomeInfo = () => {
    return (
        <div>
            <RequestEvent />
            <CustomDivider orientation="flex-start" />
            <Events />
            <CustomDivider orientation="flex-start" />
            <Contact />
        </div>
    )
}
