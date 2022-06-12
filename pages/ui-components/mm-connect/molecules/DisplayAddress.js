import { useContext } from 'react'

import { ViewContext } from '../../../context/ViewProvider'

// const Wrap = styled.div`
//   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
//   background-color: #161616;
//   padding: 0em 1.5em;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   width: fit-content;
//   border-radius: 50px;
//   border: 3px solid #e2761b;
//   p {
//     color: #FFF;
//   }
// `

const DisplayAddress = () => {
  const { user } = useContext(ViewContext)
  const { address } = user
  const formatAddress = (addr) => {
    return `${addr.substr(0, 6)}...${addr.substr(-4)}`
  }

  return (
    <div>
      <p>{formatAddress(address)}</p>
    </div>
  )
}

export default DisplayAddress
