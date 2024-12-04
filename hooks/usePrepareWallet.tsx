import { usePrivy } from "@privy-io/react-auth"
import useConnectedWallet from "./useConnectedWallet"
import { useUserProvider } from "@/providers/UserProvider"

const usePreparePrivyWallet = () => {
  const { externalWallet } = useConnectedWallet() as any
  const { login } = usePrivy()
  const { isLoggedByEmail } = useUserProvider()

  const prepare = async () => {
    if (!isLoggedByEmail && !externalWallet?.address) {
      await login()
      return false
    }

    return true
  }

  return {
    prepare,
  }
}

export default usePreparePrivyWallet
