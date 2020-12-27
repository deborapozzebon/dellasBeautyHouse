import React from 'react'

export default function Home(): JSX.Element {
    return (
        <>
            <div className='split left'>
                <div className='centered'>
                    <h1>
                        LOGO
                    </h1>
                </div>
            </div>
            <div className='split right'>
                <div className='centered'>
                    <h1>
                        CONTENT
                    </h1>
                </div>
            </div>
        </>
    )
}
