import React, { useRef, useState } from "react";
import "../styles/internships.css";

/* Draggable & swipeable carousel -- works for mouse + touch */
export default function InternshipCarousel({ internships }) {
  const list = internships ?? [
    { id:1, title:"Frontend Dev Intern", company:"TechBridge", img:"/assets/intern-1.jpg", location:"Douala", deadline:"Dec 12, 2025" },
    { id:2, title:"Data Analyst Intern", company:"InnovateX", img:"/assets/intern-2.jpg", location:"Yaounde", deadline:"Jan 5, 2026" },
    { id:3, title:"UI/UX Intern", company:"DesignPro", img:"/assets/intern-3.jpg", location:"Remote", deadline:"Dec 31, 2025" },
    { id:4, title:"Mobile Dev Intern", company:"AppWorks", img:"/assets/intern-1.jpg", location:"Buea", deadline:"Dec 20, 2025" },
  ];

  const carouselRef = useRef(null);
  const [isDown,setIsDown] = useState(false);
  const [startX,setStartX] = useState(0);
  const [scrollLeft,setScrollLeft] = useState(0);

  const pointerStart = (e) => {
    setIsDown(true);
    const pageX = e.touches ? e.touches[0].pageX : e.pageX;
    setStartX(pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };
  const pointerMove = (e) => {
    if(!isDown) return;
    e.preventDefault();
    const pageX = e.touches ? e.touches[0].pageX : e.pageX;
    const x = pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.4;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };
  const pointerEnd = () => setIsDown(false);

  return (
    <section className="card internship-section">
      <h3>Internship Opportunities</h3>

      <div className="internship-carousel"
        ref={carouselRef}
        onMouseDown={pointerStart}
        onMouseMove={pointerMove}
        onMouseUp={pointerEnd}
        onMouseLeave={pointerEnd}
        onTouchStart={pointerStart}
        onTouchMove={pointerMove}
        onTouchEnd={pointerEnd}
      >
        {list.map(it => (
          <article className="internship-card" key={it.id} aria-roledescription="internship">
            <img src={it.img} alt={it.title} />
            <div style={{display:"flex",flexDirection:"column",gap:6}}>
              <strong>{it.title}</strong>
              <small style={{color:"#64748b"}}>{it.company} • {it.location}</small>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8}}>
                <span style={{fontSize:13,color:"#64748b"}}>Apply by: {it.deadline}</span>
                <button style={{background:"var(--blue)",border:0,color:"#fff",padding:"8px 12px",borderRadius:8,cursor:"pointer"}}>Apply</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
