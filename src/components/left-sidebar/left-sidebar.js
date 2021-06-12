import { SidebarIcon } from "./sidebarIcon"
import {  HomeIcon, HashtagIcon, PencilIcon, MailIcon, DotsCircleHorizontalIcon, BookmarkIcon, UserIcon, MenuAlt2Icon, BellIcon, GlobeIcon } from '@heroicons/react/outline'

export const LeftSidebar = () => {
    return (
    
        <div className="flex flex-col">
            <div className="p-1 mb-2" >
                <GlobeIcon className="h-8 w-8 text-blue-400 my-auto left-0 " />
            </div>

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
                <PencilIcon className="block md:hidden bg-blue-400 h-8 rounded-full p-1" />
            </div>
        </div>
        
        
        
        )
}