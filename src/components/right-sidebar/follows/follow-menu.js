import { FollowOption } from "./follow-option"

export const FollowMenu = () => {
    return (
        <div className="flex flex-col rounded-lg dark:bg-gray-800 dark:bg-opacity-60">
            <div className="font-bold divide-y divide-gray-50 divide-opacity-20" >
                <div className="flex flex-row px-3 py-2">
                    <h2 className="flex-1 mr-3 text-base">A quién seguir</h2>
                </div>
                <FollowOption />
                <FollowOption />
                <FollowOption />
                <FollowOption />
                <FollowOption />
                <FollowOption />
                <div className="px-3 py-2">
                    <span className="text-xs font-normal">Mostrar Mas</span>
                </div>
            </div>
        </div>
    )
}