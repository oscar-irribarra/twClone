
import { PhotographIcon, ChartBarIcon, EmojiHappyIcon, CalendarIcon, FilmIcon } from '@heroicons/react/outline';
import { Photo } from '../../photo';
import { TweetFormOption } from './tweet-form-option';

export const TweetForm = () => {
    return (
        
        <div className="flex flex-row p-3" >

            <div className="pr-2">
                <Photo />
            </div>

            <div className="flex-1 flex-col" >
                <div className="divide-y divide-gray-50 divide-opacity-20">

                    <div className="min-w-max">
                        <input className="dark:bg-gray-900 px-1 py-1 my-2 w-full" placeholder="¿Qué está pasando?" />
                    </div>

                    <div>
                        <div className="flex flex-row mt-2">

                            <div className="flex flex-1 my-auto">
                                <TweetFormOption Icon={ PhotographIcon } />
                                <TweetFormOption Icon={ FilmIcon } />
                                <TweetFormOption Icon={ ChartBarIcon } />
                                <TweetFormOption Icon={ EmojiHappyIcon } />
                                <TweetFormOption Icon={ CalendarIcon } />
                            </div>

                            <div className="flex justify-end">
                                <button className="text-xs text-white font-bold w-full py-2 px-3.5 rounded-full bg-blue-400 hidden md:block" >Twittear</button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    
    
    )
}