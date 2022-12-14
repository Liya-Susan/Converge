import React from "react";
import items from "./content";
import Item from "./item";
export default function index() {
  return (
    <>
     <h1 style={{marginLeft:'45%',marginTop:'10%',color:'#000033'}}>TIMELINE</h1>
      <div className="container-timeline " style={{marginLeft:'32%'}}>
        {items.map((item, index) => (
          <Item data={item} key={item.title} index={index}/>
        ))}
      </div>
      <style jsx>{`
        .container-timeline {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          counter-reset: contador;
          margin: 3rem auto;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          margin-bottom: 8rem;
        }
      `}</style>
    </>
  );
}