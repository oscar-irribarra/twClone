import { DotsHorizontalIcon } from "@heroicons/react/outline"
import { Photo } from "../../photo"
import { TweetActions } from "../../tweet-actions/tweet-actions"

export const Tweet = () => {
    return (
        <div className="flex flex-row p-3 border-l border-r border-b">

        <div className="pr-2">
            <Photo />
        </div>

        <div className="flex flex-col">
            
            {/* <span className="text-xs font-bold" >NASA lo retwitteó</span> */}

            <div className="flex flex-row text-sm">
                <div className="flex flex-1">
                    <span className="font-bold">@NASAInterns</span>
                    <span className="my-auto px-1 font-thin">@NASAInterns</span>
                    <span className="my-auto px-1 font-thin">· 4h </span>
                </div>
                <DotsHorizontalIcon className="h-4 w-4 text-blue-400 my-auto" />
            </div>
            
            <p className="text-sm leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt posuere est eu posuere. 
            </p>

            <TweetActions />

        </div>



    </div>
    )
}