import { useState } from "react";
import "./Table.scss";
import Textbox from "../Textbox/Textbox";

export default () => {
  const [temp, setTemp] = useState(0);
  return (
    <table
      className='table'
      aria-label='Этапы приготовления'
    >
      <thead>
        <tr>
          <th>#</th>
          <th>Темп.</th>
          <th>Время</th>
          <th>Конв.</th>
          <th>СВЧ</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <Textbox
              defaultValue='0'
              max='300'
              name='temp'
              after='°C'
            />
            {/* <input
              type='text'
              placeholder='C'
              name='t1'
              value={temp}
              onChange={(e) => {
                const raw = e.target.value;
                if (raw === "") return; // keep current; or setBoth(0) if preferred
                setTemp(Number(raw));
              }}
            /> */}
          </td>
          <td>
            <input
              type='time'
              name='t1'
            />
          </td>
          <td>
            {" "}
            <Textbox
              defaultValue='0'
              max='300'
              name='c1'
              after='%'
            />
          </td>
          <td>
            {" "}
            <Textbox
              defaultValue='0'
              max='300'
              name='v1'
              after='%'
            />
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td className='disabled'>{temp}</td>
          <td>00:15</td>
          <td>70%</td>
          <td>90%</td>
        </tr>
        <tr>
          <td>3</td>
          <td className='disabled'>{temp}</td>
          <td>00:15</td>
          <td>70%</td>
          <td>90%</td>
        </tr>
        <tr>
          <td>4</td>
          <td className='disabled'>{temp}</td>
          <td>00:15</td>
          <td>70%</td>
          <td>90%</td>
        </tr>
      </tbody>
    </table>
  );
};
