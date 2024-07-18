import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const buttonsVariants = tv({
    base: 'px-5 justify-center rounded-lg font-medium flex items-center gap-2',

    variants: {
        variant: {
            primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
            secondary: 'bg-zinc-800 text-zinc-200  hover:bg-zinc-600'
        },
        size: {
            default: 'py-2',
            full: 'w-full h-11'
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'default'
    }
})
interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonsVariants>{
    children: ReactNode
}
export function Button({children,variant,size, ...props}:ButtonProps) {
    
    return (
        <button {...props} className={buttonsVariants({variant, size})}>
            {children}
        </button> 
    )
}