// components/ui/Container.tsx
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const sizeMap = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
} as const;

type ContainerProps = {
    children: ReactNode;
    className?: string;
    size?: keyof typeof sizeMap;
    as?: "div" | "section" | "article";
};

export default function Container({
    children,
    className,
    size = "xl",
    as: Tag = "div",
}: ContainerProps) {
    return (
        <Tag
            className={cn(
                "mx-auto w-full px-6 md:px-16 lg:px-24 xl:px-32",
                sizeMap[size],
                className
            )}
        >
            {children}
        </Tag>
    );
}