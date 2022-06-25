import data from '../data.json'

function App() {
  return (
    <table>
      {data.map((row: any) => (
        <tr>
          <td>{row.a}</td>
          <td>{row.b}</td>
          <td>{row.c}</td>
          <td>{row.d}</td>
          <td>{row.e}</td>
        </tr>
      ))}
    </table>
  );
}

export default App;
