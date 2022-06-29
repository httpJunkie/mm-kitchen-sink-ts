// import metaMask from '../../../assets/metamask.svg'
import MetaMaskOnboarding from '@metamask/onboarding'
// import detectEthereumProvider from '@metamask/detect-provider';

// // This resolves to the value of window.ethereum or null
// const provider = await detectEthereumProvider();

// // web3_clientVersion returns the installed MetaMask version as a string
// const isFlask = (
//   await provider?.request({ method: 'web3_clientVersion' })
// )?.includes('flask');

// if (provider && isFlask) {
//   console.log('MetaMask Flask successfully detected!');

//   // Now you can use Snaps!
// } else {
//   console.error('Please install MetaMask Flask!', error);
// }

import { useEffect, useState, useRef } from 'react'

const InstallMetaMask = () => {
  const [buttonText, setButtonText] = useState('Install MetaMask')
  const [isDisabled, setDisabled] = useState(false)
  const [accounts, setAccounts] = useState([])
  const onboarding = useRef()

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding()
    }
  }, [])

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        setButtonText('Connected')
        setDisabled(true)
        onboarding.current.stopOnboarding()
      } else {
        setButtonText('Connect')
        setDisabled(false)
      }
    }
  }, [accounts])

  const onClick = () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      window.ethereum
        .request({ method: 'eth_requestAccounts' })
        .then((newAccounts) => setAccounts(newAccounts));
    } else {
      onboarding.current.startOnboarding();
    }
  }

  return (
    <button disabled={isDisabled} onClick={onClick}>
      {/* <img src={metaMask} alt="MetaMask Logo" /> */}
      {buttonText}
    </button>
  )
}

export default InstallMetaMask
