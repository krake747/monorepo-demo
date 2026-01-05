import * as React from "react";

export function Button({ children, onClick }: React.ComponentProps<"button">) {
    return <button onClick={onClick}>{children}</button>;
}
