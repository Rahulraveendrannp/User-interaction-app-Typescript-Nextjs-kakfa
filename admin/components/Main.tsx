import Link from 'next/link'
import React from 'react'
import AppContext from '@/context/AppContext'
import {useContext} from 'react'

const Main = () => {

    const value=useContext(AppContext)

  return (
   
<div className="text-gray-900 p-8">
    <div className="p-4 flex">
        <h1 className="text-3xl">
            Users
        </h1>
    </div>
    <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
                <tr className="border-b">
                    <th className="text-left p-3 px-5">Name</th>
                    <th className="text-left p-3 px-5">Email</th>
                 
                    <th></th>
                </tr>
                <tr className="border-b hover:bg-slate-200" >
                    <td className="p-3 px-5"><input type="text" value={value?.user as string} className="bg-transparent" /></td>
                    <td className="p-3 px-5"><input type="text" value="amal9856@gmail.com" className="bg-transparent" /></td>
                    <td className="p-3 ">
                       <Link href={"/user/UserDetails"}><button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">View Logs
                       </button></Link> </td>
                        
                </tr>
            </tbody>
        </table>
    </div>
</div>
  )
}

export default Main