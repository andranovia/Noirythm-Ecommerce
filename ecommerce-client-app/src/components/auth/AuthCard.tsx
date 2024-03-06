

const AuthCard = ({ logo, children }: any) => (
    <div className="min-h-screen flex flex-col sm:justify-center items-center pt-20 sm:pt-0 bg-gray-100">
        <div>{logo}</div>

        <div className="w-fit rounded-lg sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            {children}
        </div>
    </div>
)

export default AuthCard