const ShimmerComponent =()=>{
  return(


    <div className="restaurant-list">
    {Array(10)
      .fill("")
      .map((e,index) => (
        <div className='Card'>
        <div className='CardImg skeleton'>
            
        </div>
        <div className='CardTitle'>
            <div className='skeleton skeleton-text'></div>
            <br />
            <div className='skeleton skeleton-text'></div>
        </div>
        <div className='CardDetails'>
            <div className='skeleton skeleton-text-sub'></div>
            <br />
            <div className='skeleton skeleton-text-sub'></div>
        </div>
        <div></div>

        <span className='ribbon skeleton'>
            {'--'} 
        </span>
    </div>
      ))}
  </div>
);
    };
export default ShimmerComponent;