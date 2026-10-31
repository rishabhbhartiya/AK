import {useLayoutEffect,useRef} from 'react';import {gsap} from '../lib';import Mandala from './Mandala';
// Generic pinned stage: ek screen = ek slide (center), scroll se ek-ek karke aati/jaati hain.
// Slide ke andar `.sx` class wale elements stagger me aate hain.
export default function Slides({items,per=90}){
 const r=useRef();
 useLayoutEffect(()=>{const ctx=gsap.context(()=>{
  const s=gsap.utils.toArray('.sl',r.current),n=s.length;
  const tl=gsap.timeline({defaults:{ease:'none'},scrollTrigger:{trigger:r.current,start:'top top',end:`+=${n*per}%`,pin:true,scrub:.5,anticipatePin:1}});
  s.forEach((el,i)=>{
   if(i){gsap.set(el,{autoAlpha:0});
    tl.fromTo(el,{autoAlpha:0,y:70,scale:.94},{autoAlpha:1,y:0,scale:1,duration:.35,ease:'power2.out'},i)
      .fromTo(el.querySelectorAll('.sx'),{autoAlpha:0,y:26},{autoAlpha:1,y:0,stagger:.03,duration:.25,ease:'power2.out'},i+.1)}
   if(i<n-1)tl.to(el,{autoAlpha:0,y:-70,scale:1.05,duration:.3,ease:'power2.in'},i+.7);
  });
  tl.to('.bgm',{rotation:120,duration:n},0);
 },r);return()=>ctx.revert()},[]);
 return <section ref={r} className="pn"><Mandala className="bgm"/>{items.map((c,i)=><div className="sl" key={i}>{c}</div>)}</section>
}
