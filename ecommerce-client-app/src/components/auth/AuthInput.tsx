const AuthInput = ({ disabled = false, className, ...props }: any) => (
    <input
        disabled={disabled}
        className={`${className} p-1 m-2 rounded-md shadow-sm focus:outline-none border-gray-800 focus:border-gray-700 focus:ring focus:ring-gray-900 focus:ring-opacity-80`}
        {...props}
    />
)

export default AuthInput