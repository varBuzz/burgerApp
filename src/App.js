import React, {Component} from 'react';
import Layout from './components/layout/Layout'
import BurgerBulider from './containers/burgerBuilder/BurgerBuilder'

class App extends Component{
  render () {
     return (
       <div className="App">
         <Layout>
           <BurgerBulider />
         </Layout>
       </div>
     );

  }
 
}

export default App;
