import logo from './logo.svg';
import './App.css';
//import Fetchapi from './Fetchapi';
import Table from './Table';
import SingleView from './SingleView';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AppMain from './AppMain';
//import Table2 from './Table2';
//import Listing from './Listing';
import Deleteapi from './Deleteapi';

function App() {
  return (
    <>
 
    {/* <Table2/>
    <Listing/> */}
  
<BrowserRouter>
<Deleteapi/>

<AppMain/>
          		<Routes>
            		<Route path="/singleView/:id" element={<SingleView />} />
                <Route path="/deleteapi/:id" element={<Deleteapi />} />
                
                
                



          		</Routes>
              
        	</BrowserRouter> 
          
    </>
  );
}

export default App;
