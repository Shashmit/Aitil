export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="h-full bg-[#111827] overflow-auto">
            <div className="mx-auto max-w-screen-xl h-full">
                {children}
            </div>
        </div>
    )
}