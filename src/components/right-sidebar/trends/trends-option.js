import { DotsHorizontalIcon } from '@heroicons/react/solid';


export const TrendOption = () => {
    return (
        <div className="flex flex-col pl-2">
            <div className="flex flex-row text-xss font-thin" >
                <span className="flex-1 text-start">1 &middot; Global &middot; Tendencia</span>
                <DotsHorizontalIcon className="h-3 w-3 text-blue-400" />
            </div>
            <div className="flex">
                <span className="text-xs" >Happy</span>
            </div>
            <div className="flex">
                <span className="text-xss font-thin">333 mil Tweets</span>
            </div>
        </div>
    )
}