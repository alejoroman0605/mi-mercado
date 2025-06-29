export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex flex-col min-h-screen">
        <main>{children}</main>
      </div>
    );
}