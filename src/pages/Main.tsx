import { Link } from 'react-router-dom';

function App() {
  return (
    <ul>
      <li><Link to="/html-table">html-table</Link></li>
      <li><Link to="/html-table-with-cell">html-table-with-cell</Link></li>
      <li><Link to="/html-nested-table">html-nested-table</Link></li>
      <li><Link to="/mui-nested-table">mui-nested-table</Link></li>
      <li><Link to="/mui-virtual-nested-table">mui-virtual-nested-table</Link></li>
      
    </ul>
  );
}

export default App;
