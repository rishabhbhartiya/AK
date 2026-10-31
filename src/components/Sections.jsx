import Slides from './Slides';import {INVITE,PARICHAY,DAYS,MAP,FAMILY} from '../data';
const Orn=()=><div className="sx dv"><i/>❖<i/></div>;
export const Parichay=()=><Slides per={100} items={[
 <><small className="sx tg">॥ वर वधु परिचय ॥</small><Orn/><p className="sx hd">{INVITE[0]}</p><p className="sx big">{INVITE[1]}</p></>,
 ...PARICHAY.map(c=><><small className="sx tg">{c.tag}</small><h3 className="sx hd nm sh">{c.name}</h3><Orn/>
  {c.rows.map(([a,b])=><p className="sx" key={a}><em>{a}</em><br/>{b}</p>)}<p className="sx pl">📍 {c.place}</p></>)]}/>;
export const Events=()=><Slides per={85} items={DAYS.flatMap((d,di)=>[
 <><small className="sx tg">{d.label}</small><Orn/><h3 className="sx hd">{d.title}</h3></>,
 ...d.items.map(e=><div className={e.hl?'hl':''}><h3 className="sx hd">{e.t}</h3>{e.x&&<p className="sx tg">{e.x}</p>}<time className="sx">{e.time}</time>{e.v&&<p className="sx v">{e.v}</p>}<p className="sx pl">📍 {e.p}</p>
  {di===1&&e.hl&&<a className="sx btn" href={MAP} target="_blank" rel="noreferrer">विवाह स्थल का गूगल मैप्स दिशा-निर्देश</a>}</div>)])}/>;
export const Family=()=><Slides per={95} items={[
 <><Orn/><h3 className="hd">॥ स्वागतकर्ता एवं विनीत ॥</h3><Orn/></>,
 ...FAMILY.map(c=><><h3 className="sx hd">{c.t}</h3><Orn/>
  {c.l&&c.l.map(x=><p className="sx nmz" key={x}>{x}</p>)}
  {c.tel&&c.tel.map(([n,t])=><p className="sx nmz" key={t}>{n}: <a href={'tel:'+t}>{t}</a></p>)}</>)]}/>;
