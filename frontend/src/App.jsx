import { useState, useEffect } from 'react'

function App() {
    const [message, setMessage] = useState('')

    useEffect(() => {
        fetch('/api/')
            .then((res) => res.json())
            .then((data) => setMessage(data.message))
            .catch((err) => console.error(err))
    }, [])

    return (
        <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '2rem' }}>
            <h1>TaskMaster</h1>
            <p>Welcome to your project!</p>
            <p>Backend Status: {message || 'Loading...'}</p>
        </div>
    )
}

export default App
