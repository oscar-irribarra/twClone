import { SidebarIcon } from "./sidebarIcon"
import {  HomeIcon, HashtagIcon, PencilIcon, MailIcon, DotsCircleHorizontalIcon, BookmarkIcon, UserIcon, MenuAlt2Icon, BellIcon, GlobeIcon } from '@heroicons/react/outline'
import { useState } from "react";
import { Modal } from "../modal";

export const LeftSidebar = () => {

    const [showModal, setShowModal] = useState(true);

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
            <div onClick={() => setShowModal(true)}>
                <SidebarIcon Icon={DotsCircleHorizontalIcon} Text={'Mas Opciones'}  /> 
            </div>

            <Modal showModal={showModal} setShowModal={setShowModal}  />

            <div>
                <button className="text-white font-bold w-full p-2 rounded-full bg-blue-400 hidden lg:block hover:bg-opacity-90" >Twittear</button>
                <PencilIcon className="block lg:hidden bg-blue-400 h-8 rounded-full p-1" />
            </div>
        </div>
        
        
        
        )
}