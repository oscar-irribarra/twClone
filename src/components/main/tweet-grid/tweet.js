import { Photo } from "../../photo"
import { TweetActions } from "../../tweet-actions/tweet-actions"

export const Tweet = () => {
    return (
        <div className="flex flex-row py-2 border-l border-r border-b">

        <div className="p-2">
            <Photo />
        </div>

        <div className="flex flex-col">
            
            <span className="text-xss font-bold" >NASA lo retwitteó</span>

            <div className="flex flex-row">
                <span className="text-sm font-bold">@NASAInterns</span>
                <span className="text-xs my-auto px-1">@NASAInterns</span>
                <span className="text-xs my-auto px-1">· 4h </span>
            </div>
            
            <p className="text-sm leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt posuere est eu posuere. 
            </p>

            <TweetActions />

        </div>



    </div>
    )
}