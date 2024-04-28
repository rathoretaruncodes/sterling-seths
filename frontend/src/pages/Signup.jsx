import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom"

export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return <div className="h-max flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white shadow-2xl w-96 text-center p-2 h-max px-4">
        <Heading label={"Join the privileged few, create your account!"} />
        <SubHeading label={"Please enter your credentials"} />
        <InputBox onChange={(e) => {
          setFirstName(e.target.value);
        }} label={"First Name"} />
        <InputBox onChange={(e) => {
          setLastName(e.target.value);
        }} label={"Last Name"} />
        <InputBox onChange={(e) => {
          setUsername(e.target.value);
        }} label={"Email"} />
        <InputBox onChange={(e) => {
          setPassword(e.target.value)
        }} label={"Password"} />
        <div className="pt-4">
          <Button onClick={async () => {
            const response = await axios.post("https://sterling-seths.onrender.com/api/v1/user/signup", {
              username,
              firstName,
              lastName,
              password
            });
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }} label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}