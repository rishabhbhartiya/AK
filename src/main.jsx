import {createRoot} from 'react-dom/client';
import '@fontsource/rozha-one/latin-400.css';
import '@fontsource/rozha-one/devanagari-400.css';
import '@fontsource/tiro-devanagari-hindi/devanagari-400.css';
import '@fontsource/tiro-devanagari-hindi/latin-400.css';
import './styles.css';
import App from './App';
const go=()=>createRoot(document.getElementById('root')).render(<App/>);
// fonts ready pehle, taaki AK mask ka size sahi nape
Promise.race([Promise.all([document.fonts.load("200px 'Rozha One'"),document.fonts.load("16px 'Tiro Devanagari Hindi'",'अ')]),new Promise(r=>setTimeout(r,2500))]).then(go,go);
