
import { CogIcon } from '@heroicons/react/solid';
import { TrendOption } from './trends-option';

export const TrendsMenu = () => {
    return (
        <div className="flex flex-col rounded-lg bg-gray-100 dark:bg-gray-800 dark:bg-opacity-60">
            <div className="font-bold divide-y" >
                <div className="flex flex-row px-3 py-2">
                    <h2 className="flex-1 mr-3 text-base">Tendencias de Global</h2>
                    <CogIcon className="h-5 w-5 text-blue-400 my-auto" />
                </div>
                <TrendOption />
                <TrendOption />
                <TrendOption />
                <TrendOption />
                <div className="px-3 py-2">
                    <span className="text-xs font-normal my-auto">Mostrar Mas</span>
                </div>
            </div>
        </div>
    )
}