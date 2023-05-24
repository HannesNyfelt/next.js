import emojis from '../emojis/emojis.json'
import React, { useState } from "react";



export default function Home() {

  const [searchTerm, setSearchTerm] = useState("")

  const filteredEmojis = emojis.filter((emoji) => {
    return emoji.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emoji.keywords.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emoji.symbol.toLowerCase().includes(searchTerm.toLowerCase());
  })

  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className='body flex items-center justify-center flex-col'>
      <input
        className="rounded w-96 p-0.5 m-20 text-black border-2"
        type="text"
        placeholder='Search'
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="flex items-center justify-center">
        <table>
          <tbody>
            {filteredEmojis.slice(0, 20).map((emoji) => (
              <tr key={emoji.title} className='border-2 rounded-lg flex flex items-center justify-center flex-col m-5'>
                <td>{emoji.title}</td>
                <td>{emoji.symbol}</td>
                <td>{emoji.keywords}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}