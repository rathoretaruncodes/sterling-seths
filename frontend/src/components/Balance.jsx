// eslint-disable-next-line react/prop-types
export const Balance= ({ value }) => {
    return <div className='flex justify-end'>
        <div className='font-semibold text-lg'>
            Current Balance :
        </div>
        <div className='font-semibold ml-4 text-lg'>
            ₹{value}
        </div>
    </div>
}

