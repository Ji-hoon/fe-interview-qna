export default function Header({ children }: { children: React.ReactNode }) {
  return <header className="px-10 py-8 border-b h-[80px] flex items-center">{children}</header>;
}
