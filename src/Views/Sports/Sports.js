import Navbar from './../../Components/Navbar/Navbar'
import Footer from './../../Components/Footer/Footer'
import { useState } from 'react'
import './../Sports/Sports.css'



function Hockey(){
    const [count, setcount] = useState(1);
    function inc(){
        if(count<10)
        setcount(count+1)
    }
    function dec(){
        if(count>1)
        setcount(count-1)
    }
    return(
      <>
      <Navbar/>
      <div className='rbt'>
            
                      
            <h1 className='tt1'>Sports Equipment</h1>
            <hr className='hre'/>
        <div className='container1'>
     
        <div className='c1'>
              <img className='tri'src={"https://m.media-amazon.com/images/I/51bb9dwdgAL._SX522_.jpg"}/>
             <h1 className='spga'>Hockey Stick</h1>
             <span className='que'>Prize : ₹348 <del className='del'>  M.R.P. : ₹749</del> </span> <p className='sav'>Save upto 54%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
             <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div>
             <p><button className='tata'>Buy now</button></p>
           </div>
     
           <div className='c1'>
              <img className='tri'src={"https://m.media-amazon.com/images/I/71ecKYXYZNS._AC_UL480_FMwebp_QL65_.jpg"}/>
              <h1 className='spga'>Carrom Board</h1>
              <span className='que'>Prize : ₹1,072 <del className='del'> M.R.P. : ₹1,299</del> </span> <p  className='sav'>Save upto 17%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
              <div className='star'>
             <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
             </div> <p><button  className='tata'>Buy now</button></p>  </div> 
             
     
                  <div className='c1'>
       <img className='tri'src={"https://m.media-amazon.com/images/I/61PevyevsJL._AC_UL480_FMwebp_QL65_.jpg"}/>
       <h1 className='spga'>Cricket helmet</h1>
       <span className='que'>Prize : ₹1,322 <del className='del'> M.R.P. : ₹1,499</del> </span> <p  className='sav'>Save upto 9%<button className='incre'onClick={inc}>+</button>{count}<button className='decre'onClick={dec}>-</button></p>
       <div className='star'>
                  <i class="fa-solid fa-star checked"></i>
                       <i class="fa-solid fa-star checked"></i>
                       <i class="fa-solid fa-star checked"></i>
                       <i class="fa-solid fa-star checked"></i>
                       <i class="fa-solid fa-star checked"></i>
                  </div> <p><button  className='tata'>Buy now</button></p></div>
     
     
     </div>
     </div>
     
        <Footer/>
        </>
    )
}
export default Hockey