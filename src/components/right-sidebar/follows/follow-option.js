export const FollowOption = () => {
    return (
        <div className="flex flex-col pl-1">
            <div className="flex flex-row text-xss p-1" >
                <div className="h-9 w-9 rounded-full bg-gray-900 dark:bg-gray-100 mt-0.5 mr-1"></div>

                <div className="flex flex-col flex-1 my-auto" >
                    <span className="text-xs">Happy</span>
                    <span className="text-xss font-thin">@No_happy </span>
                </div>
                <div className="my-auto">
                    <button className="text-blue-400 font-bold rounded-full h-6 py-1 px-3 border border-blue-400 " >Seguir</button>
                </div>
            </div>
        </div>
    )
}