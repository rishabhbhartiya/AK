import {useEffect} from 'react';
import {ScrollTrigger} from './lib';
import Particles from './components/Particles';
import Intro from './components/Intro';
import Countdown from './components/Countdown';
import {Parichay,Events,Family} from './components/Sections';
import Footer from './components/Footer';
import Music from './components/Music';
export default function App(){
 useEffect(()=>{const f=()=>ScrollTrigger.refresh();addEventListener('load',f);setTimeout(f,600);return()=>removeEventListener('load',f)},[]);
 return <div className="shell"><Particles/><Intro/><Countdown/><Parichay/><Events/><Family/><Footer/><Music/></div>
}
