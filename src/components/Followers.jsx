import React from "react";
import "../styles/side-widgets.css";

export default function Followers({ data }) {
  const list = data ?? [
    {id:1, name:"John Doe", avatar:"/assets/avatar.png", role:"Student"},
    {id:2, name:"Anna Lee", avatar:"/assets/avatar.png", role:"Student"}
  ];

  return (
    <aside className="widget">
      <h4>Your Followers</h4>
      {list.map(f => (
        <div className="follower-item" key={f.id}>
          <img src={f.avatar} alt={f.name} style={{width:44,height:44,borderRadius:8,objectFit:"cover"}}/>
          <div>
            <div style={{fontWeight:700}}>{f.name}</div>
            <div style={{fontSize:12,color:"#94a3b8"}}>{f.role}</div>
          </div>
        </div>
      ))}
    </aside>
  );
}
