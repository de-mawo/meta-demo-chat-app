import { getProviders } from "next-auth/react"
import Image from "next/image";
import SignInComponent from "./SignInComponent";

async function SignInPage() {
    const providers = await getProviders();



  return (
    <div className="grid justify-center">
        <Image 
        className="rounded-full mx-2 object-cover"
        width={240}
        height={240}
        src='/img/messenger.png'
        alt="Profile Pic"
        />

        <SignInComponent providers={providers} />
    </div>
  )
}

export default SignInPage