import React from "react";
import "../styles/side-widgets.css";

export default function CompaniesFollowed({ data }) {
  const list = data ?? [
    {id:1,name:"TechBridge", logo:"/assets/intern-1.jpg"},
    {id:2,name:"InnovateX", logo:"/assets/intern-2.jpg"}
  ];
  return (
    <aside className="widget">
      <h4>Companies You Follow</h4>
      {list.map(c => (
        <div className="company-item" key={c.id}>
          <img src={c.logo} alt={c.name} style={{width:44,height:44,borderRadius:8,objectFit:"cover"}}/>
          <div>
            <strong>{c.name}</strong>
            <div style={{fontSize:12,color:"#94a3b8"}}>Followed • 2w</div>
          </div>
        </div>
      ))}
    </aside>
  );
}
