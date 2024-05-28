import { RequestEvent } from "../requestAndEvents/RequestEvent"
import { Contact } from "../contacts/Contact"
import { CustomDivider } from "./CustomDivider"

export const HomeInfo = () => {
    return (
        <div>
            <RequestEvent />
            <CustomDivider orientation="flex-start" />
            <RequestEvent />
            <CustomDivider orientation="flex-start" />
            <Contact />
        </div>
    )
}
