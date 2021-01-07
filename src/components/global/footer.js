import React from 'react'

export default function Footer() {
    return (
        <footer id="footer">
            <a href="https://www.instagram.com/carolineboseley/">Instagram</a>
            <a href="mailto:caroline@carolineboseley.com">Email</a>
            <style jsx>{`
                footer {
                    width: 100vw;
                    display: flex;
                    justify-content: center;
                }
                footer a {
                    margin: 0 .5rem;
                }
            `}</style>
        </footer>
    )
}