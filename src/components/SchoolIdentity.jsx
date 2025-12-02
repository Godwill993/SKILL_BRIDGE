import React from "react";
import "../styles/side-widgets.css";

export default function SchoolIdentity({ school }) {
  const s = school ?? { name:"University of Buea", img:"/assets/school.jpg", program:"Computer Science" };
  return (
    <aside className="widget">
      <h4>School</h4>
      <div className="school-badge">
        <img src={s.img} alt={s.name} />
        <div>
          <strong>{s.name}</strong>
          <div style={{fontSize:13,color:"#64748b"}}>{s.program}</div>
        </div>
      </div>
    </aside>
  );
}
