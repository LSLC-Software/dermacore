import { Header } from "@/components/header";
import SideBar from "@/components/sideBar";
import { SidebarProvider } from "@/components/ui/sidebar-context";
import { ProtectedPage } from "@/components/auth/ProtectedPage";
import CaliMark from "@/components/firmas/CaliMark";
export default function PacientesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProtectedPage>
      <SidebarProvider>
        <CaliMark />
        <Header />
        <SideBar>
          {children}
        </SideBar>
      </SidebarProvider>
    </ProtectedPage>
  );
}
