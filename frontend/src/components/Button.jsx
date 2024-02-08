// eslint-disable-next-line react/prop-types
export function Button({label, onClick}) {
    return <button onClick={onClick} type='button' className='w-full text-white bg-fuchsia-800 hover:bg-fuchsia-900 hover:shadow-inner font-medium rounded-lg text-sm px-5 py-2.5 me-2'>
        {label}
    </button>
}