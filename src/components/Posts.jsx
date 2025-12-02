import React from "react";
import "../styles/posts.css";

export default function Posts({ posts }) {
  const list = posts ?? [
    { id:1, title:"My first internship!", text:"Really excited to start at TechBridge next week.", avatar:"/assets/avatar.png", name:"You", time:"2h" },
    { id:2, title:"Project Release", text:"Launched a to-do app built with React and Firebase.", avatar:"/assets/avatar.png", name:"You", time:"1d" }
  ];

  return (
    <section className="card posts-section">
      <h3>Recent Posts</h3>
      {list.map(p => (
        <article className="post-card" key={p.id}>
          <div className="post-meta">
            <div className="post-avatar"><img src={p.avatar} alt={p.name} style={{width:"100%",height:"100%",objectFit:"cover"}}/></div>
            <div>
              <strong>{p.name}</strong>
              <div style={{fontSize:12,color:"#94a3b8"}}>{p.time} • {p.title}</div>
            </div>
          </div>
          <p style={{marginTop:8,color:"#0f172a"}}>{p.text}</p>
        </article>
      ))}
    </section>
  );
}
