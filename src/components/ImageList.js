import React from 'react'
import imagelist from './Imagelist.css'

export default function ImageList(props) {
const images= props.images.map(({description,id,urls})=> {
    return <img key={id} src={urls.small} alt={description} style={{borderRadius:10}}  />
})
  return <div className="image-list">{images}</div>;
}
