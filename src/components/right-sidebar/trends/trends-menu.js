
import { CogIcon } from '@heroicons/react/solid';
import { TrendOption } from './trends-option';

export const TrendsMenu = () => {
    return (
        <div className="flex flex-col rounded-lg dark:bg-gray-800 dark:bg-opacity-60">
            <div className="font-bold divide-y divide-gray-50 divide-opacity-20" >
                <div className="pl-2 flex flex-row">
                    <h2 className="flex-1 mr-3 text-base">Tendencias de Global</h2>
                    <CogIcon className="h-5 w-5 text-blue-400 mt-1" />
                </div>
                <TrendOption />
                <TrendOption />
                <TrendOption />
                <TrendOption />
                <div className="p-1">
                    <span className="text-xs font-normal pl-2">Mostrar Mas</span>
                </div>
            </div>
        </div>
    )
}