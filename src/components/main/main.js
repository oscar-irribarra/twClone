import { Photo } from "../photo"
import { TweetForm } from "./tweet-form/tweet-form"
import { TweetGrid } from "./tweet-grid/tweet-grid"

export const Main = () => {
    return (
    
        <div className="flex flex-col">
            <div className="flex flex-row px-2 py-4 md:p-2 border-r border-b border-l sticky top-0 md:relative z-40 dark:bg-gray-900">
                <div className="flex md:hidden justify-start">
                    <Photo />
                </div>
                <h2 className="flex-1 my-auto px-3 font-bold divide-y divide-gray-50 divide-opacity-20 mr-3 text-base">Inicio</h2>
            </div>
            <div className="py-2 border-r border-l"></div>
            <div className="border">
                <TweetForm />                
            </div>

            <TweetGrid />

        </div>
    
    )
}