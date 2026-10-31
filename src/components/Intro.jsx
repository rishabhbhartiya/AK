import {useLayoutEffect,useRef} from 'react';import {gsap} from '../lib';
import Ganesh from './Ganesh';
// AK ko canvas pe wahi font/size me draw karke K ke stem ka exact center + chaudai nikalta hai
function stem(){
 const W=400,H=800,c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d');
 x.font="200px 'Rozha One'";x.textAlign='center';x.fillText('AK',200,470);
 const a=x.getImageData(0,0,W,H).data,D=new Float32Array(W*H);
 for(let i=0;i<W*H;i++)D[i]=a[i*4+3]>127?9999:0;
 for(let y=1;y<H;y++)for(let X=1;X<W-1;X++){const i=y*W+X;D[i]=Math.min(D[i],D[i-1]+1,D[i-W]+1,D[i-W-1]+1.41,D[i-W+1]+1.41)}
 for(let y=H-2;y>=0;y--)for(let X=W-2;X>=1;X--){const i=y*W+X;D[i]=Math.min(D[i],D[i+1]+1,D[i+W]+1,D[i+W+1]+1.41,D[i+W-1]+1.41)}
 let m=0;for(let y=250;y<520;y++)for(let X=200;X<236;X++)m=Math.max(m,D[y*W+X]);
 let sx=0,sy=0,n=0;for(let y=250;y<520;y++)for(let X=200;X<236;X++)if(D[y*W+X]>=m-.6){sx+=X;sy+=y;n++}
 return n?{x:sx/n,y:sy/n,hw:m}:{x:215,y:400,hw:10}}
import Mandala from './Mandala';import photo from '../assets/photo.jpg';
// Screen pe AK -> scroll pe AK zoom hoke poori screen cover -> peeche se homepage
export default function Intro(){
 const r=useRef();
 useLayoutEffect(()=>{const ctx=gsap.context(()=>{
  const st=stem(),o=`${st.x} ${st.y}`,S=Math.max(34,Math.min(90,Math.ceil(270/st.hw))); // K ke stem ke bilkul beech me zoom
  gsap.set('.aks',{svgOrigin:o});
  gsap.timeline({scrollTrigger:{trigger:r.current,start:'top top',end:'+=260%',pin:true,scrub:.6,anticipatePin:1}})
   .to('.akhint',{autoAlpha:0,y:-20,duration:.1},0)
   .to('.aks',{scale:S,ease:'power3.in',duration:.8},0)
   .to('.akline',{autoAlpha:0,duration:.3},0)
   .to('.akov',{autoAlpha:0,duration:.15},.8)
   .fromTo('.home',{scale:1.2,opacity:.15},{scale:1,opacity:1,duration:1,ease:'power2.out'},.1)
   .to({},{duration:.35});
 },r);return()=>ctx.revert()},[]);
 const T=p=><text className={p} x="200" y="470" textAnchor="middle" fontSize="200" fontFamily="'Rozha One',serif" {...(p==='aks akline'?{fill:'none',stroke:'#d4af37',strokeWidth:1.4}:{fill:'#000'})}>AK</text>;
 return <section ref={r} className="intro">
  <div className="home">
   <Mandala className="mn spin"/>
   <div className="gn"><Ganesh/></div>
   <h2 className="gh">॥ श्री गणेशाय नमः ॥</h2>
   <div className="pill">॥ शुभ परिणय ॥</div>
   <div className="arch"><div><img src={photo} alt="अपूर्वा संग कुणाल" decoding="async"/></div></div>
   <p className="cp">॥ वैवाहिक मंगल परिणय ॥</p>
   <div className="nm sh">सौ. कां. अपूर्वा</div><div className="and">एवं</div><div className="nm sh">चि. कुणाल</div>
   <div className="meta"><span>1 व 2 दिसंबर 2026</span><span>❦</span><span>हरदा (म.प्र.)</span></div>
  </div>
  <div className="akwrap">
   <svg className="akov" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice">
    <defs><radialGradient id="ab" cx=".5" cy=".45" r=".75"><stop offset="0" stopColor="#6b0f27"/><stop offset="1" stopColor="#1a0207"/></radialGradient>
     <mask id="akm" maskUnits="userSpaceOnUse" x="-3000" y="-3000" width="6400" height="6800"><rect x="-3000" y="-3000" width="6400" height="6800" fill="#fff"/>{T('aks')}</mask></defs>
    <rect x="-3000" y="-3000" width="6400" height="6800" fill="url(#ab)" mask="url(#akm)"/>
    {T('aks akline')}
   </svg>
   <p className="akhint"><span>सौ. कां. अपूर्वा ❖ चि. कुणाल</span><span className="dn">↓</span></p>
  </div>
 </section>
}
