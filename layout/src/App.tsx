import React, { EventHandler, useState } from 'react';
import { Main } from './pages/Main'
import { Modal } from './components/Modal'

function App() {
    const [showModal, setShowModal] = useState(true)

    function closeModal(element: any) {
        let el = element as HTMLDivElement
        if (el.getAttribute('data-close-modal-handler')) setShowModal(false)
    }

    return (
        <>
            <Modal closeModal={closeModal} showModal={showModal}/>
            <Main/>
        </>
    );
}

export default App;
