import { Photo } from "../../photo"

export const FollowOption = () => {
    return (
        <div className="flex flex-col p-3">
            <div className="flex flex-row" >
                <div className="pr-2">
                    <Photo />
                </div>

                <div className="flex flex-col flex-1 my-auto" >
                    <span className="text-sm">Happy</span>
                    <span className="text-xs font-thin">@No_happy </span>
                </div>
                <div className="my-auto text-sm">
                    <button className="text-blue-400 font-bold rounded-full py-1 px-4 border border-blue-400 " >Seguir</button>
                </div>
            </div>
        </div>
    )
}