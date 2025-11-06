"use client"

import Link from "next/link"
import { Plus, ShoppingCart, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navItems = [
  {
    label: "Create Order",
    href: "/dashboard/create-order",
    icon: Plus,
  },
  {
    label: "Orders",
    href: "/dashboard/orders",
    icon: ShoppingCart,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border min-h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-sidebar-foreground">Dashboard</h1>
      </div>

      <nav className="space-y-2 px-3">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link key={item.href} href={item.href}>
              <div
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent",
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </div>
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto p-4 border-t border-sidebar-border">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm font-semibold text-sidebar-foreground">John Doe</p>
            <p className="text-xs text-sidebar-foreground opacity-70">john@example.com</p>
          </div>
          <button
            className="p-2 rounded-lg transition-colors text-sidebar-foreground hover:bg-sidebar-accent"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </aside>
  )
}
