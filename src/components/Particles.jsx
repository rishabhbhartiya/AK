import {useEffect,useRef} from 'react';import * as THREE from 'three';
// ek hi canvas, ~100 sone-ke kan. Low-end phone pe 50 kan, 30fps, pixelRatio 1.
export default function Particles(){
 const ref=useRef();
 useEffect(()=>{
  const cv=ref.current;let r;try{r=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:false,powerPreference:'low-power'})}catch{return}
  const low=(navigator.hardwareConcurrency||4)<=4,N=low?50:100;
  r.setPixelRatio(Math.min(devicePixelRatio,low?1:1.5));
  const sc=new THREE.Scene(),cam=new THREE.OrthographicCamera(0,1,1,0,-1,1);let W=1,H=1;
  const size=()=>{W=cv.clientWidth;H=cv.clientHeight;r.setSize(W,H,false);cam.right=W;cam.top=H;cam.updateProjectionMatrix()};size();
  const pos=new Float32Array(N*3),v=new Float32Array(N),ph=new Float32Array(N);
  for(let i=0;i<N;i++){pos[i*3]=Math.random()*W;pos[i*3+1]=Math.random()*H;v[i]=8+Math.random()*22;ph[i]=Math.random()*6.28}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(pos,3));
  const c=document.createElement('canvas');c.width=c.height=32;const x=c.getContext('2d'),gr=x.createRadialGradient(16,16,0,16,16,16);
  gr.addColorStop(0,'#fff');gr.addColorStop(.4,'rgba(255,255,255,.5)');gr.addColorStop(1,'rgba(255,255,255,0)');x.fillStyle=gr;x.fillRect(0,0,32,32);
  const tex=new THREE.CanvasTexture(c),m=new THREE.PointsMaterial({size:6,sizeAttenuation:false,map:tex,color:0xf1cf6a,transparent:true,opacity:.75,blending:THREE.AdditiveBlending,depthWrite:false});
  sc.add(new THREE.Points(g,m));
  let last=performance.now(),sy=scrollY,vel=0,raf;
  const loop=now=>{raf=requestAnimationFrame(loop);const dt=(now-last)/1000;if(dt<(low?.03:.014))return;last=now;
   const d=scrollY-sy;sy=scrollY;vel+=(d/dt-vel)*.1;const k=Math.max(-300,Math.min(300,vel))*.5; // scroll ke saath kan tez udte hain
   for(let i=0;i<N;i++){let y=pos[i*3+1]+(v[i]+k)*dt;if(y>H+10)y-=H+20;else if(y<-10)y+=H+20;pos[i*3+1]=y;pos[i*3]+=Math.sin(now/1500+ph[i])*6*dt}
   g.attributes.position.needsUpdate=true;r.render(sc,cam)};
  raf=requestAnimationFrame(loop);addEventListener('resize',size);
  return()=>{cancelAnimationFrame(raf);removeEventListener('resize',size);g.dispose();m.dispose();tex.dispose();r.dispose()}
 },[]);
 return <canvas ref={ref} className="pc" aria-hidden="true"/>
}
