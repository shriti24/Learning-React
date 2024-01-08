   /**
    * Nested element 
    * <div id='parent'>
    *   <div id='child'> 
    *       <h1></h1>
    *   </div>
    * </div> 
    * ReactElement(Object) = HTML(Browser undertsnds)
    */
   
   
   const heading1= React.createElement('h1',
        {id:"heading", color:'yellow'},  //this is to set the attributes.
        "hello world!");
        // createelement creates h1 as object in react.
    const heading2= React.createElement('h2',
        {id:"heading2"},  //this is to set the attributes.
        "hello world 2!");
    const div= React.createElement('div', {id:"parent", color:'yellow'},  
        React.createElement('div', {id:"child"}, 
        [heading1, heading2]));

    const root= ReactDOM.createRoot(document.getElementById("root"));
    root.render(div);
