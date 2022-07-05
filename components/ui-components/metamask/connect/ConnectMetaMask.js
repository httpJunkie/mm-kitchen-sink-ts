import Logo from '../../../../pages/assets/metamask.svg'
import Button from '../../Button'

const ConnectMetaMask = ({ connect }) => {
  return (
    <Button handleClick={connect}>
      <Logo height="18" width="18" />
      <div className="text">Connect</div>
    </Button>
  )
}

export default ConnectMetaMask
