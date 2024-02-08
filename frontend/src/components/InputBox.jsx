// eslint-disable-next-line react/prop-types
export function InputBox({label, onChange}) {
    return <div>
        <div className='text-sm font-medium text-left py-2'>
            {label}
        </div>
        <input onChange={onChange}  className='w-full px-2 bg-gray-50 py-1 shadow-inner rounded '>
        </input>
    </div>
}