import {useLayoutEffect,useRef} from 'react';import {gsap} from '../lib';import {EVENT,CAL} from '../data';import Mandala from './Mandala';
const R=46,CI=2*Math.PI*R,U=[['d','दिन',365],['h','घंटे',24],['n','मिनट',60],['s','सेकंड',60]];
// 4 ring-clock: har ring apne unit ka progress dikhati hai, dot ring ke sire pe ghoomta hai
export default function Countdown(){
 const r=useRef();
 useLayoutEffect(()=>{const ctx=gsap.context(()=>{
  let iv;const T=new Date(EVENT.start).getTime(),P={d:0,h:0,n:0,s:0},st={},q=s=>r.current.querySelector(s);
  const draw=k=>{q('.pr-'+k).style.strokeDashoffset=CI*(1-P[k]);q('.dt-'+k).style.transform=`rotate(${P[k]*360}deg)`};
  const tick=first=>{const d=Math.max(0,T-Date.now()),v={d:Math.floor(d/864e5),h:Math.floor(d%864e5/36e5),n:Math.floor(d%36e5/6e4),s:Math.floor(d%6e4/1e3)};
   for(const k of 'dhns'){const[,, mx]=U.find(u=>u[0]===k),p=Math.min(1,v[k]/mx);
    if(st[k]!==v[k]){const el=q('.t-'+k);el.textContent=String(v[k]).padStart(2,'0');if(!first)gsap.fromTo(el,{y:-8,opacity:0},{y:0,opacity:1,duration:.35});
     if(!first&&p>P[k]+.01){P[k]=p;draw(k)}else gsap.to(P,{[k]:p,duration:first?1.8:.95,ease:first?'power3.out':'none',overwrite:'auto',onUpdate:()=>draw(k)});st[k]=v[k]}}
   if(!d)q('.ct').textContent='✨ पावन मांगलिक उत्सव प्रारंभ! ✨'};
  gsap.from('.rg',{scale:.8,autoAlpha:0,stagger:.12,duration:.9,ease:'back.out(1.6)',scrollTrigger:{trigger:r.current,start:'top 65%',once:true},onStart:()=>{tick(true);iv=setInterval(()=>tick(false),1000)}});
  U.forEach(([k])=>draw(k));
  return()=>clearInterval(iv);
 },r);return()=>ctx.revert()},[]);
 return <section ref={r} className="cdw">
  <Mandala className="bgm"/>
  <p className="ct">⏳ पावन विवाह उत्सव प्रारंभ होने में शेष ⏳</p>
  <div className="rings">{U.map(([k,l])=><div className="rg" key={k}>
   <svg viewBox="0 0 100 100"><circle cx="50" cy="50" r={R} fill="none" stroke="rgba(212,175,55,.2)" strokeWidth="3"/>
    <circle className={'pr-'+k} cx="50" cy="50" r={R} fill="none" stroke="#d4af37" strokeWidth="3" strokeLinecap="round" strokeDasharray={CI} transform="rotate(-90 50 50)"/>
    <g className={'dt-'+k} style={{transformOrigin:'50px 50px'}}><circle cx="50" cy="4" r="3" fill="#fff3d6"/></g></svg>
   <div className="rc"><b className={'t-'+k}>00</b><span>{l}</span></div></div>)}</div>
  <a className="btn" href={CAL} target="_blank" rel="noreferrer">कैलेंडर में जोड़ें</a>
 </section>
}
