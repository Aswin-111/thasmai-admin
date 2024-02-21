"use client"
import { useEffect } from 'react'
import {useStore} from '../state/navbar-state'
import data from "./data.json"
import DataTable from '../components/datatable/datatable'
// import SortableTable from '../users/meditatorlist/table/page'


export default function Analytics(){
  console.log(data)
        const setNavbarText  = useStore(state => state.setNavbarText)
        setNavbarText("Analytics")
  
     return (



    <div className='flex h-screen justify-center items-center'>
      
      <div className='w-full h-[50%] flex  justify-center items-center'>Website under development</div>
      
      </div>
    )
}