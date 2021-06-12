
export const SidebarIcon = ({Icon, Text}) => {

    return (
        
        <div className="flex flex-row p-1 mb-3">
            <Icon className="h-7 w-7 text-blue-400 my-auto mx-auto md:mx-0" />
            <span className="hidden md:block text-lg font-bold mx-3 align-baseline capitalize">{Text}</span>
        </div>

    );

}