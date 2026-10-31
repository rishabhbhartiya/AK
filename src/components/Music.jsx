import {useEffect,useState} from 'react';import {sound} from '../lib';
// Sirf ek chhota music on/off button (upar kone me). Pehle tap pe music apne aap shuru.
export default function Music(){
 const [on,setOn]=useState(false);
 useEffect(()=>sound.sub(setOn),[]);
 useEffect(()=>{const f=e=>{if(!e.target.closest('.mus'))sound.play();removeEventListener('pointerup',f)};addEventListener('pointerup',f);return()=>removeEventListener('pointerup',f)},[]);
 return <button className="mus" onClick={()=>sound.toggle()} aria-label="संगीत चालू या बंद करें"><span className={'eq'+(on?' on':'')}><i/><i/><i/></span></button>
}
