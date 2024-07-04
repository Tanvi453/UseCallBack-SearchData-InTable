import { useState, useCallback } from 'react';
import './App.css';

function App() {

  const [people, setPeople] = useState({ fname: '', dob: '', age: '', Password: '' });

  const [searched, setSearched] = useState("");

  const [data, setData] = useState(JSON.parse(localStorage.getItem('infotech')) || []);

  const handleChange = (e) => {
    console.log(e.target.name)
    setPeople({ ...people, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    setData([...data, people])
    localStorage.setItem("infotech", JSON.stringify([...data, people]));
  }
  console.log(data);
  console.log(people);

  const handlesearch = useCallback((idx) => {
    if (idx) {
      return (data.filter((item) =>item?.fname?.toLocaleLowerCase().includes(idx?.toLocaleLowerCase())));
    }
    return data

  }, [data])

  return (
    <>
      <div style={{ backgroundImage: "url(https://i.etsystatic.com/44846285/r/il/3e5448/5056357948/il_fullxfull.5056357948_iqvh.jpg)", backgroundSize: "cover", height: "953px", width: "100%" }}>

        <div className='flex flex-col items-center gap-[60px] pt-[7%]'>

          <div className='flex flex-col gap-3'>
            <label htmlFor="fname" className='font-bold text-xl text-[#72542e]'>Full Name:</label>
            <input type="text" id="fname" name="fname" value={people.fname} onChange={(e) => { handleChange(e) }} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#444810]' />
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor="dob" className='font-bold text-xl text-[#72542e]'>Date Of Birth:</label>
            <input type="date" id='dob' name="dob" value={people.dob} onChange={(e) => { handleChange(e) }} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#444810]' />
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor="age" className='font-bold text-xl text-[#72542e]'>Age:</label>
            <input type="number" id='age' name="age" value={people.age} onChange={(e) => { handleChange(e) }} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#444810]' />
          </div>

          <div className='flex flex-col gap-3'>
            <label htmlFor="Password" className='font-bold text-xl text-[#72542e]'>Password:</label>
            <input type="password" id="Password" name="Password" value={people.Password} onChange={(e) => { handleChange(e) }} className='h-[25px] w-[400px] rounded-[5px] bg-transparent border-[#444810]' />
          </div>

          <button type='submit' onClick={handleSubmit} className='font-bold text-xl h-[50px] w-[150px] mt-[30px] rounded-[10px] bg-transparent border-[#444810] text-[#72542e]' >Submit</button>

        </div>

      </div>

      <div className='flex gap-[20px] justify-center mt-[30px]' >

        <input type="search" id="search" name="search" value={searched} onChange={(e) => setSearched(e.target.value)} className='border-[#444810] rounded-[5px] h-[30px] w-[300px]' />

      </div >

      <div className='flex gap-[20px] justify-center mt-[30px]'>

        <table>

          <thead>
            <th>Full Name:</th>
            <th>Date Of Birth:</th>
            <th>Age:</th>
            <th>Password:</th>
          </thead>

          <tbody>

            {handlesearch(searched)?.map((item, index) => {
              return (
                <tr>
                  <td>{item.fname}</td>
                  <td>{item.dob}</td>
                  <td>{item.age}</td>
                  <td>{item.Password}</td>
                </tr>
              )
            })}

          </tbody>

        </table>
      </div>

    </>
  );
}

export default App;
