import { useState } from 'react';
import data2 from '../data2.json'

function Cell(props: any) {
  return (
    <td style={{ background: 'red', border: '1px solid black' }}>{props.value}</td>
  )
}

function Row(props: any) {
    const {row} = props;
    const [open, setOpen] = useState(false);

    return (
      <>
        <tr>
          <button onClick={() => setOpen(!open)}>{open ? (<svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 2.20481L1.36569 4.77168C1.05327 5.07611 0.546734 5.07611 0.234315 4.77168C-0.0781049 4.46726 -0.0781049 3.9737 0.234315 3.66928L4 -2.46955e-08L7.76569 3.66928C8.0781 3.9737 8.0781 4.46726 7.76569 4.77168C7.45327 5.07611 6.94673 5.07611 6.63431 4.77168L4 2.20481Z" fill="#28A3CC"/>
</svg>
) : (<svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.228316 1.36569C-0.0761053 1.05327 -0.0761053 0.546734 0.228316 0.234315C0.532737 -0.0781049 1.0263 -0.0781049 1.33072 0.234315L5 4L1.33072 7.76569C1.0263 8.0781 0.532737 8.0781 0.228316 7.76569C-0.0761053 7.45327 -0.0761053 6.94673 0.228316 6.63432L2.79519 4L0.228316 1.36569Z" fill="#B5BCD1"/>
</svg>
)}</button>
          <Cell value={row.a} />
          <Cell value={row.b} />
          <Cell value={row.c} />
          <Cell value={row.d} />
          <Cell value={row.e} />
        </tr>
        {open && row.children.map((child: any) => (
          <tr>
            ~~~~
            <Cell value={child.a} />
            <Cell value={child.b} />
            <Cell value={child.c} />
            <Cell value={child.d} />
            <Cell value={child.e} />
          </tr>
        ))}
      </>
    )
}

function App() {
  return (
    <div style={{height: 300, overflowY: 'auto'}}>
      <table >
        {data2.map((row: any) => <Row row={row} />)}
      </table>
    </div>
  );
}

export default App;