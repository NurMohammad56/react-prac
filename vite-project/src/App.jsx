
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Service from './pages/service';
import Project from './pages/project';
import Product from './pages/Product';
import Profile from './pages/Profile';
const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Blog' element={<Blog/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Service' element={<Service/>}/>
            <Route path='/Project' element={<Project/>}/>
            <Route path='/Product/:id/:name' element={<Product/>}/>
            <Route path='/Profile/:facebookId/:youtubeId' element={<Profile/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;





































// const App = () => {
  // const [data, setData]= useState();

  // useEffect(()=>{
  //    fetch('https://dummyjson.com/products/1')
  //    .then(res=>res.json())
  //    .then(json=>setData(json));
  //   ====
  //   (async()=>{
  //     let response = await fetch('https://dummyjson.com/products/1');
  //     let json = await response.json();
  //     setData(json);
  //   })()

  // },[]);

  // let [formObj, setFormObj]=useState({fName:"", lName:"", city:"", gender:""});

  // const inputOnChange=(prop, value)=>{
  //   setFormObj(prevObj=>({
  //     ...prevObj,
  //     [prop]:value
  //   }))
  // }

  // const formSubmit=(e)=>{
  //   e.preventDefault();
  //   console.log(formObj);
  // }

  // const [list, setList]= useState([]);
  // const [item, setItem]= useState("");

// const addItem=()=>{
//     list.push(item);
//     setList([...list])
// }

// const removeItem=(index)=>{
  // list.splice(index, 1);
  // setList([...list])
// }


  // return (
  //   <div>
   
      {/* {JSON.stringify(data)} */}
      {/* 1Input on change */}
      {/* <div className="container">
      <form onSubmit={formSubmit}>
        <input onChange={(e)=>{inputOnChange("fName", e.target.value)}} value={formObj.fName} type="text" placeholder="First Name"/><br />
        <input onChange={(e)=>{inputOnChange("lName", e.target.value)}} value={formObj.lName} type="text" placeholder="Last Name"/><br />
        <select onChange={(e)=>{inputOnChange("city", e.target.value)}} value={formObj.city}>
          <option value="">Choose City</option>
          <option value="Rangpur">Rangpur</option>
          <option value="Dhaka">Dhaka</option>
        </select><br />
        <input onChange={()=>{inputOnChange("gender", "Male")}} checked={formObj.gender==="Male"} type="radio" name="gander" />Male
        <input onChange={()=>{inputOnChange("gender", "Female")}} checked={formObj.gender==="Female"} type="radio" name="gander" />Female
        <br />
        <button type="submit">Submit</button>
      </form>
      </div> */}
      {/*2 List item */}
      {/* <table>
        <tbody>
          {
            list.length!==0?(
              list.map((element, index)=>{
                return (
                  <tr>
                    <td>{element}</td>
                    <td><button onClick={()=>{removeItem(index)}}>Remove</button></td>
                  </tr>
                )
              })
            ):(<tr></tr>)
          }
        </tbody>
      </table>
      <input onChange={(e)=>setItem(e.target.value)} placeholder="Item" />
      <button onClick={addItem}>Add</button> */}
//     </div>
//   );
// };

// export default App;




