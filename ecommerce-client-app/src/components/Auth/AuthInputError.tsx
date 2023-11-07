const AuthInputError = ({ messages, className}:any) => (
    <>
        {messages.length > 0 && (
            <>
                {messages.map(({message, index}:any) => (
                    <p
                        className={`${className} text-sm text-red-600`}
                        key={index}>
                        {message}
                    </p>
                ))}
            </>
        )}
    </>
)

export default AuthInputError