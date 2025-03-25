import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Hero Section */}
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-bold tracking-tight text-primary">
            Welcome to Next.js
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A modern starter kit with Next.js, Tailwind CSS, and shadcn/ui components.
            Built with a beautiful teal theme.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">Learn More</Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <Card>
          <CardHeader>
            <CardTitle>Modern Design</CardTitle>
            <CardDescription>Beautiful UI components with shadcn/ui</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Built with modern design principles and a custom teal theme.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Type Safe</CardTitle>
            <CardDescription>Full TypeScript support</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Type-safe development with TypeScript and Next.js.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tailwind CSS</CardTitle>
            <CardDescription>Utility-first CSS framework</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Rapidly build custom designs with Tailwind CSS.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-border py-8 mt-16">
        <div className="max-w-5xl mx-auto text-center text-muted-foreground">
          <p>Built with Next.js and shadcn/ui</p>
        </div>
      </footer>
    </main>
  )
}
