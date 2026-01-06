import * as React from "react";

export function Button({ children, onClick, ...props }: React.ComponentProps<"button">) {
    return (
        <button
            onClick={onClick}
            className="ui:flex ui:items-center ui:justify-center ui:px-4 ui:py-2 ui:bg-blue-500 ui:text-white ui:rounded-md ui:hover:bg-blue-600 ui:transition-colors"
            {...props}
        >
            {children}
        </button>
    );
}
