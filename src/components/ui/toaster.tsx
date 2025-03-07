
import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { Terminal } from "lucide-react"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} className="border-rezon-cyan/40 bg-rezon-black text-white shadow-[0_0_15px_rgba(0,255,240,0.2)]">
            <div className="grid gap-1">
              {title && (
                <ToastTitle className="text-rezon-cyan font-mono flex items-center gap-2">
                  <Terminal className="h-4 w-4" />
                  {title}
                </ToastTitle>
              )}
              {description && (
                <ToastDescription className="text-white/80 font-mono text-sm pl-6">
                  {description}
                </ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className="text-white/60 hover:text-white" />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
