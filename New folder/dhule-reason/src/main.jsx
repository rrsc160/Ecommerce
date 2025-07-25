import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>,
)




// Add search functionality.
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

if (searchButton) {
    searchButton.addEventListener('click', () => {
        if (searchInput) {
            const searchTerm = searchInput.value;
            alert(`Searching for: ${searchTerm}`);
        }
    });
}

