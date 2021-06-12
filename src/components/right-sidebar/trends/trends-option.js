import { DotsHorizontalIcon } from '@heroicons/react/solid';


export const TrendOption = () => {
    return (
        <div className="flex flex-col p-3">
            <div className="flex flex-row text-xs font-thin pb-0.5" >
                <span className="flex-1 text-start">1 &middot; Global &middot; Tendencia</span>
                <DotsHorizontalIcon className="h-3 w-3 text-blue-400" />
            </div>
            <div className="flex pb-0.5">
                <span className="text-sm" >Happy</span>
            </div>
            <div className="flex">
                <span className="text-xs font-thin">333 mil Tweets</span>
            </div>
        </div>
    )
}