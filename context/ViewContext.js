import { createContext, useEffect, useCallback } from 'react'
import { initialState } from './initialState'
import { reducer } from './reducers/index'

import { useImmerReducer } from 'use-immer'
import { ethers } from 'ethers'

import NFTicketsAbi from '../build/contracts/NFTickets.json'

export const ViewContext = createContext(initialState)

// Get ETH as small number ("0.01" => "10000000000000000")
export const bigNumberify = (amt) => ethers.utils.parseEther(amt)

// Get ETH as small number ("10000000000000000" => "0.01")
export const smolNumberify = (amt, decimals = 18) => 
  parseFloat(ethers.utils.formatUnits(amt, decimals))

export const ViewProvider = ({ children }) => {
  const [state, dispatch] = useImmerReducer(reducer, initialState)
  const NFTicketsAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS

  const setAccount = useCallback(async (accounts) => {
    if (accounts.length > 0) {
      try {
        const connectedAccount = {
          address: accounts[0],
        }
        dispatch({ type: 'SET_ACCOUNT', payload: connectedAccount })
      } catch (e) {
        console.error(e)
      }
    } else {
      dispatch({ type: 'SET_ACCOUNT', payload: initialState.user })
    }
  }, [dispatch])

  const connectUser = useCallback(async () => {
    if (typeof window.ethereum !== undefined) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        if (provider) {
          const signer = await provider.getSigner()
          const { name, chainId } = await provider.getNetwork()
          const NFTickets = new ethers.Contract(NFTicketsAddress, NFTicketsAbi.abi, signer)
          const accounts = await window.ethereum.request({ method: 'eth_accounts' })
          setAccount(accounts)
          dispatch({
            type: 'CONNECTED_PROVIDER',
            payload: {
              provider,
              signer,
              chainId,
              name,
              NFTickets
            }
          })
        }
      } catch (e) {
        console.error(e)
      }
    }
  }, [setAccount, dispatch])

  useEffect(() => {
    if (typeof window.ethereum !== undefined) {
      connectUser()
      window.ethereum.on('accountsChanged', () => {
        connectUser()
      })
      window.ethereum.on('chainChanged', () => {
        connectUser()
      })
      window.ethereum.on('disconnect', () => {
        dispatch({ type: 'SET_ACCOUNT', payload: initialState.user })
      })
    }
  }, [connectUser, dispatch])

  const { 
    NFTickets, isConnected, provider, signer, user, name, chainId 
  } = state

  const connect = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
      setAccount(accounts)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <ViewContext.Provider 
      value={{
        state,
        dispatch,
        NFTickets,
        isConnected,
        provider,
        signer,
        user,
        name,
        chainId,
        actions: { connect },
        bigNumberify,
        smolNumberify
      }}
    >
      {children}
    </ViewContext.Provider>
  )
}
