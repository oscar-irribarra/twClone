import { ChatAltIcon, ExternalLinkIcon, HeartIcon, UploadIcon } from '@heroicons/react/outline';

import { TweetOption } from "./tweet-option.js"



export const TweetActions = () => {
    return (
    
        <div className="flex flex-row space-x-24">
            <TweetOption Icon={ ChatAltIcon } />
            <TweetOption Icon={ ExternalLinkIcon } />
            <TweetOption Icon={ HeartIcon } />
            <TweetOption Icon={ UploadIcon } />
        </div>
    )


    // chat-alt  - external-link - heart   - upload
}