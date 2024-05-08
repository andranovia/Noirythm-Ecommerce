const AuthInputError = ({ messages, className }: any) => (
    <>
      {messages.length > 0 && (
        <>
          {messages.map((message: string, index: number) => (
            <p className={`${className} text-xs text-red-600`} key={index}>
              {message}
            </p>
          ))}
        </>
      )}
    </>
  );
  
  export default AuthInputError;
  