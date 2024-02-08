import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"

export const Signin = () => {
    return <div className="h-max flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white shadow-2xl w-96 text-center p-2 h-max px-4">
        <Heading label={"Welcome Back, distinguished member!"} />
        <SubHeading label={"Please enter your credentials to access your account"} />
        <InputBox label={"Email"} />
        <InputBox label={"Password"} />
        <div className="pt-4">
          <Button label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}