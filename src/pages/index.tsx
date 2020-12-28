import React from 'react'
import Image from 'next/image'
import MainContent from '../../components/mainContent'

export default function Home(): JSX.Element {
    return (
        <>
            <div className='split left'>
                <div className='centered'>
                    <Image src='/logo.jpeg' alt='logo' width={600} height={500}/>
                </div>
            </div>
            <div className='split right'>
                <MainContent />
            </div>
        </>
    )
}
