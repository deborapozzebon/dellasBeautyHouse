import React, { useState } from 'react'
import About from './about'
import Services from './services'
import Team from './team'

enum Content {
    about = 0,
    team = 1,
    services = 2,
    contact = 3
}

export default function MainContent(){
    const [currentContent, setCurrentContent] = useState(Content.about)

    return (
        <>
            <div className='manuContent'>
                <button className='menuButton' onClick={() => setCurrentContent(Content.about)}>
                    SOBRE
                </button>
                <button className='menuButton' onClick={() => setCurrentContent(Content.team)}>
                    EQUIPE
                </button>
                <button className='menuButton' onClick={() => setCurrentContent(Content.services)}>
                    SERVIÇOS
                </button>
                <button className='menuButton' onClick={() => setCurrentContent(Content.contact)}>
                    CONTATO
                </button>
            </div>
            <div className='centered'>
                {renderContent(currentContent)}
            </div>
        </>
    )
}

function renderContent(content: Content) {
    switch(content){
        case Content.about:
            return <About />
        break
        case Content.team:
            return <Team />
        break
        case Content.services:
            return <Services />
        break
        case Content.contact:
            return <h1>Contato</h1>
        break
    }
}