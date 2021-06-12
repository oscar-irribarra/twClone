import { SearchIcon } from '@heroicons/react/solid';

export const Search = () => {
    return (
        
        <div className="relative">
            <span className="absolute inset-y-0 left-0 flex pl-2">
                <SearchIcon className="text-blue-600 h-6 w-6 my-auto mx-auto" />
            </span>
            <input className="rounded-full bg-gray-700 p-2 pl-10 text-sm" placeholder="Buscar en Twitter" />
        </div>
        
    )
}