import { FollowMenu } from "./follows/follow-menu"
import { Search } from "./search"
import { TrendsMenu } from "./trends/trends-menu"

export const RightSidebar = () => {
    return (
        <div className="flex flex-col mb-10" >
            <div className="mb-4">
                <Search />
            </div>
            <div className="mb-4">
                <TrendsMenu />
            </div>
            <div className="mb-4">
                <FollowMenu />
            </div>
        </div>
    )  
}