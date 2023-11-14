function Menu(){

    // const Menuitems =['home','service','contact','about'];
  
    //add a new menu item Menuitems.push('gallery');
    //remove a menu item menuitems.splice(2,1),
    //update a menu item menuitems[1]
    return(
  
    <div>
       <h1> Order menu</h1> 
    <img src='./src/Capture.png' alt='' width={424} height={421}/>
    
    <ul> 
      <li> home</li>
      <li> contact</li>
      <li> services</li>
      <li> about</li>
  
  </ul>
  
      </div>
    );
  }
  export default Menu;