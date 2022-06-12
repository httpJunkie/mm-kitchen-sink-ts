// import metaMask from '../../assets/metamask.svg'
import MyButton from '../atoms/MyButton'

const ConnectMetaMask = ({ connect }) => {
  return (
    <MyButton handleClick={connect}>
      {/* <img src={metaMask} alt="MetaMask Logo" /> */}
      <p>Connect Wallet</p>
    </MyButton>
  )
}

export default ConnectMetaMask
