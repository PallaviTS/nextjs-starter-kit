import { Metadata } from "next"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard page",
}

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <AppSidebar />
        <div className="flex flex-col">
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="flex flex-col gap-2">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Overview</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <h1 className="font-semibold text-lg md:text-2xl">Dashboard</h1>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="tracking-tight text-sm font-medium">Total Revenue</h3>
                </div>
                <div className="text-2xl font-bold">$15,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="tracking-tight text-sm font-medium">Subscriptions</h3>
                </div>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">+180.1% from last month</p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="tracking-tight text-sm font-medium">Sales</h3>
                </div>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">+19% from last month</p>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="tracking-tight text-sm font-medium">Active Users</h3>
                </div>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">+201 since last hour</p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm col-span-4 p-6">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="tracking-tight text-sm font-medium">Overview</h3>
                </div>
                <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                  Chart placeholder
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm col-span-3 p-6">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="tracking-tight text-sm font-medium">Recent Sales</h3>
                </div>
                <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                  Table placeholder
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}
