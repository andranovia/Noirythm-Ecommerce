import { cn } from "@/utils/cn";

export default function ButtonPrimary({ children, onClick, type, clasName }: any) {
    return (
      <button
        className={cn(`${clasName} bg-gray-900  text-white px-9 py-2 rounded-md hover:bg-gray-800 `)}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    );
  }