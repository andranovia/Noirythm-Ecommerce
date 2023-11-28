const AuthInputError = ({ messages, className }: any) => (
    <>
      {messages.length > 0 && (
        <>
          {messages.map((message: string, index: number) => (
            <p className={`${className} text-sm text-red-600`} key={index}>
              {message}
            </p>
          ))}
        </>
      )}
    </>
  );
  
  export default AuthInputError;
  