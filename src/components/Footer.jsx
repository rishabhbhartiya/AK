import {useLayoutEffect,useRef} from 'react';import {gsap} from '../lib';import Mandala from './Mandala';
export default function Footer(){
 const r=useRef();
 useLayoutEffect(()=>{const ctx=gsap.context(()=>{const st={trigger:r.current,start:'top 65%',once:true};
  gsap.from('.fx',{y:40,autoAlpha:0,stagger:.15,duration:1,ease:'power3.out',scrollTrigger:st});
  gsap.from('.ak2',{scale:.6,autoAlpha:0,duration:1.4,ease:'power4.out',scrollTrigger:st});
  gsap.from('.fl',{scaleX:0,duration:1.4,ease:'power3.out',scrollTrigger:st})},r);return()=>ctx.revert()},[]);
 return <footer ref={r} className="ft"><Mandala className="bgm spin"/>
  <div className="ak2">AK</div><i className="fl"/>
  <p className="fx hd">॥ बाल मनुहार ॥</p>
  <p className="fx big">“हमारी बुआ / मौसी / दीदी की शादी में जरूर-जरूर आना...”</p>
  <p className="fx meta"><span>1 व 2 दिसंबर 2026</span><span>❦</span><span>हरदा (मध्य प्रदेश)</span></p>
  <button className="fx btn" onClick={()=>scrollTo({top:0,behavior:'smooth'})}>↑</button></footer>
}
