import gsap from 'gsap';import {ScrollTrigger} from 'gsap/ScrollTrigger';
import music from './assets/music.mp3';
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ignoreMobileResize:true});
gsap.ticker.lagSmoothing(500,33);
export {gsap,ScrollTrigger};

// ---- music engine: halka volume + dheere fade ----
const a=new Audio(music);a.loop=true;a.preload='auto';
let vol=.3,on=false;const lv=()=>vol*.7,subs=new Set(),emit=()=>subs.forEach(f=>f(on));
export const sound={
 sub(f){subs.add(f);return()=>subs.delete(f)},
 play(){if(on)return;a.volume=0;return a.play().then(()=>{on=true;emit();gsap.killTweensOf(a);gsap.to(a,{volume:lv(),duration:4,ease:'sine.inOut'})}).catch(()=>{})},
 stop(){if(!on)return;on=false;emit();gsap.killTweensOf(a);gsap.to(a,{volume:0,duration:1.2,onComplete:()=>a.pause()})},
 toggle(){on?this.stop():this.play()},
 vol(v){vol=v/100;if(on){gsap.killTweensOf(a);a.volume=lv()}}};
document.addEventListener('visibilitychange',()=>{if(document.hidden)a.pause();else if(on)a.play().catch(()=>{})});
