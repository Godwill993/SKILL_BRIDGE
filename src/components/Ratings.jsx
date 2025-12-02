import React from "react";
import "../styles/ratings.css";

export default function Ratings({ data }){
  // sample data fallback
  const d = data ?? {
    academic: 92,
    professional: 85,
    softskills: 20
  };

  return (
    <section className="card ratings-wrapper" aria-label="Ratings">
      <h3 style={{marginBottom:8}}>Student Ratings</h3>

      <div style={{display:"flex",gap:12,flexWrap:"wrap"}}>
        <div className="rating-card">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div>
              <small style={{color:"#94a3b8"}}>Academic</small>
              <div className="rating-value">{d.academic}%</div>
            </div>
            <div style={{width:70}}>
              <div className="progress"><i style={{width:`${d.academic}%`}} /></div>
            </div>
          </div>
        </div>

        <div className="rating-card">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div>
              <small style={{color:"#94a3b8"}}>Professional</small>
              <div className="rating-value">{d.professional}%</div>
            </div>
            <div style={{width:70}}>
              <div className="progress"><i style={{width:`${d.professional}%`}} /></div>
            </div>
          </div>
        </div>

        <div className="rating-card">
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div>
              <small style={{color:"#94a3b8"}}>Soft Skills</small>
              <div className="rating-value">{d.softskills}%</div>
            </div>
            <div style={{width:70}}>
              <div className="progress"><i style={{width:`${d.softskills}%`}} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
