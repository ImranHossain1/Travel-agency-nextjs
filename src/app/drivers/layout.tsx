import DoctorHeader from "@/components/view/Header/DriverHeader/DriverHeader";
import DoctorSidebar from "@/components/view/Sidebar/DriverSidebar/DriverSidebar";

export default function DoctorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <DoctorHeader />
      <div className="min-h-[calc(100vh-64px)]">
        <div>
          <DoctorSidebar>{children}</DoctorSidebar>
        </div>
      </div>
    </div>
  );
}
