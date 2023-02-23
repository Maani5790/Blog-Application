import React from 'react'

const MenuCard = ({menuData}) => {
  return (
    <>
    <section className='main-card--cointainer'>
    {menuData.map((curElem)=>{

      const {id, name,image, description} = curElem;

        return (
            <>
            <div className='card-container'  key={id}>
         <div className='card'>
             <div className='card-body'>
                 <span className='card-number card-circle subtle' key={id}>1</span>
                 <span className='card-author subtle'>{name}</span>
                 <h2 className='card-title'>{name}</h2>
                 <span className='card-description subtle'>
                   
                     {description}
 
 
 
                 </span>
                 <div className='card-read'>Read</div>
             </div>
             <img src={image} alt='images'  className='card-media'  />
             <span className='card-tag  subtle'>Read More</span>
         </div>
      </div>
      </>

        );
         

    })}
    </section>
   
    
    </>
  )
}

export default MenuCard