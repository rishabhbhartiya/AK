const P=[...Array(24)].map((_,i)=><path key={i} transform={`rotate(${i*15})`} d="M0-96C10-82 10-72 0-62C-10-72-10-82 0-96M0-62C8-50 8-44 0-36C-8-44-8-50 0-62"/>);
export default function Mandala({className=''}){return <svg className={className} viewBox="-100 -100 200 200" fill="none" stroke="#d4af37" strokeWidth=".5" aria-hidden="true"><circle r="96"/><circle r="70"/><circle r="40"/>{P}</svg>}
