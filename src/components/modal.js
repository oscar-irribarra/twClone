import {useDarkMode} from "../hooks/useDarkMode"

export const Modal = ({ showModal, setShowModal }) => {

    const [theme, setTheme] = useDarkMode();

    return (
        <>
            { showModal ? 
            (<div className="fixed z-40 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white dark:bg-gray-900 dark:text-gray-50 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="flex items-start flex-col text-gray-900">
                                <div className="mt-3 text-center mt-0">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-50" id="modal-title">
                                        Personaliza tu visualización
                                    </h3>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                        Administra el fondo, color y tamaño de la fuente. Esta configuración afecta a todas las cuentas de Twitter en este navegador.                                        
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-2 flex flex-col">
                                    <p className="text-xs text-gray-500">
                                    Imagen de fondo
                                    </p>
                                    <div>
                                        <label className="inline-flex items-center ml-6">
                                        <input type="radio" 
                                                    className="form-radio" 
                                                    name="accountType" 
                                                    value="light"
                                                    checked={ theme === 'light' } 
                                                    onChange={ () => {setTheme('light')}}/>
                                            <span className="ml-2 dark:text-gray-50">Predeterminado</span>
                                        </label>
                                        <label className="inline-flex items-center ml-6">
                                            <input type="radio" 
                                                    className="form-radio" 
                                                    name="accountType" 
                                                    value="dark"
                                                    checked={ theme === 'dark' } 
                                                    onChange={() => setTheme('dark')}/>
                                            <span className="ml-2 dark:text-gray-50">Noche Clara</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dark:bg-gray-900 dark:text-gray-50 px-4 py-3 sm:px-6 ">
                            <div className="flex justify-center">
                                    <button onClick={ () => setShowModal(false) } 
                                            className="text-xs text-white font-bold w-auto py-2 px-3.5 rounded-full bg-blue-400 hidden md:block hover:bg-opacity-90" >Listo</button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>) : null}
        </>
    )

}