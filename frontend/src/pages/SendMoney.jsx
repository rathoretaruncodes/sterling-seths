import { useSearchParams } from 'react-router-dom';
import axios from "axios";
import { useState } from 'react';
import { Heading } from "../components/Heading"

export const SendMoney = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const [amount, setAmount] = useState(0);

    return <div className="flex justify-center h-screen">
        <div className="h-full flex flex-col">
            <div
                className=" max-h-96 text-card-foreground max-w-96 p-4 space-y-8 w-96 bg-white shadow-2xl rounded-lg">
                <div className="flex flex-col space-y-1.5 p-6">
                <Heading label={"Money Transfer"}></Heading>
                </div>
                <div className="p-6">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-fuchsia-300 flex items-center justify-center">
                    <span className="text-2xl text-white">{name[0].toUpperCase()}</span>
                    </div>
                    <h3 className="text-2xl font-semibold">{name.toUpperCase()}</h3>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                    <input
                        onChange={(e) => {
                            setAmount(e.target.value);
                        }}
                        type="number"
                        className="flex h-10 w-full rounded-md shadow-inner bg-gray-50 px-3 py-2 mt-5 text-sm"
                        id="amount"
                        placeholder="Enter amount(in ₹)"
                    />
                    </div>
                    <button onClick={() => {
                        axios.post("http://localhost:3000/api/v1/account/transfer", {
                            to: id,
                            amount
                        }, {
                            headers: {
                                Authorization: "Bearer " + localStorage.getItem("token")
                            }
                        })
                    }} className="justify-center rounded-md text-sm font-medium h-10 px-4 py-2 w-full bg-fuchsia-800 focus:bg-fuchsia-900 hover:bg-fuchsia-900 text-white">
                        Initiate Transfer
                    </button>
                </div>
                </div>
        </div>
      </div>
    </div>
}