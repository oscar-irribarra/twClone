import { FollowOption } from "./follow-option"

export const FollowMenu = () => {
    return (
        <div className="flex flex-col rounded-lg dark:bg-gray-800 dark:bg-opacity-60">
            <div className="font-bold divide-y divide-gray-50 divide-opacity-20" >
                <div className="pl-2 flex flex-row">
                    <h2 className="flex-1 mr-3 text-base">A quién seguir</h2>
                </div>
                <FollowOption />
                <FollowOption />
                <FollowOption />
                <FollowOption />
                <FollowOption />
                <FollowOption />
                <div>
                    <span className="text-xs font-normal pl-2">Mostrar Mas</span>
                </div>
            </div>
        </div>
    )
}