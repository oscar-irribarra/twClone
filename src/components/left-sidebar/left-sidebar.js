import { SidebarIcon } from "./sidebarIcon"
import {  HomeIcon, HashtagIcon, PencilIcon, MailIcon, DotsCircleHorizontalIcon, BookmarkIcon, UserIcon, MenuAlt2Icon, BellIcon } from '@heroicons/react/solid'

export const LeftSidebar = () => {
    return (
    
        <div className="flex flex-col">

            <SidebarIcon Icon={HomeIcon} Text={'Inicio'} /> 
            <SidebarIcon Icon={HashtagIcon} Text={'explorar'} /> 
            <SidebarIcon Icon={BellIcon} Text={'Notificaciones'} /> 
            <SidebarIcon Icon={MailIcon} Text={'Mensajes'}/> 
            <SidebarIcon Icon={BookmarkIcon} Text={'Guardados'}/> 
            <SidebarIcon Icon={MenuAlt2Icon} Text={'Listas'}/> 
            <SidebarIcon Icon={UserIcon} Text={'Perfil'}/> 
            <SidebarIcon Icon={DotsCircleHorizontalIcon} Text={'Mas Opciones'}/> 

            <div>
                <button className="text-white font-bold w-full p-2 rounded-full bg-blue-400 hidden md:block" >Twittear</button>
                <PencilIcon className="block md:hidden bg-blue-400 h-9 rounded-full p-1" />
            </div>
        </div>
        
        
        
        )
}