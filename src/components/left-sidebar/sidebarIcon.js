
export const SidebarIcon = ({Icon, Text}) => {

    return (
        
        <div className="flex flex-row p-1 mb-2">
            <Icon className="h-5 w-5 text-blue-400 my-auto mx-auto md:mx-0" />
            <span className="hidden md:block font-bold mx-3 align-baseline capitalize">{Text}</span>
        </div>

    );

}