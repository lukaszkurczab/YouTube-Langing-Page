import React, {useContext} from 'react'
import AsideBig from './AsideBig'
import AsideSmall from './AsideSmall'
import { SizeContext } from '../../context'

const Aside = () => {
  const { defaultSize }= useContext(SizeContext)

  return (
    <>
      {
        defaultSize ? 
        <AsideSmall/> : 
        <AsideBig/>
      }
    </>
  )
}

export default Aside