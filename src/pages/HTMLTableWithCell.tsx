import data from '../data.json'

function Cell(props: any) {
  return (
    <td>{props.value}</td>
  )
}

function App() {
  return (
    <div style={{height: 300, overflowY: 'auto'}}>
      <table >
        {data.map((row: any) => (
          <tr>
            <Cell value={row.a} />
            <Cell value={row.b} />
            <Cell value={row.c} />
            <Cell value={row.d} />
            <Cell value={row.e} />
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;