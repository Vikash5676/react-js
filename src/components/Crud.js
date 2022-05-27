import React,{useState,useEffect} from 'react'
import axios from 'axios'


export default function Crud() {

    const [title,setTitle]=useState('')

    const [apiData,setApiData]=useState([])

    const getData=()=>{
        axios.get('https://6268e99daa65b5d23e7c662f.mockapi.io/crud').then(resolve=>{
            
            setApiData(resolve.data)
        }).catch(err=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getData();
    })

    const changeHandel=(e)=>{
        setTitle(e.target.value)
    }

    const clickHandel=()=>{
            axios.post('https://6268e99daa65b5d23e7c662f.mockapi.io/crud',{title}).then(resolve=>{
                getData();
            }).catch(err=>{
                console.log(err)
            })
            setTitle('')
    }
    

  return (
    <div>
      <h1>Digikull Students</h1>
      <h3>Hello User</h3>
      <input type='text' 
      value={title} 
      onChange={changeHandel}></input>
      <button 
      onClick={clickHandel}>Add</button>
      {
          apiData.map((ele)=>{
              return(
                <div key={ele.id}>{ele.title}</div>
          )})
      }
    </div>
  )
}
