import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { House, StickyNote, Cable } from "lucide-react";
import Link from "next/link";
import Logout from "./Logout";
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: House,
  },
  {
    title: "Posts",
    url: "/dashboard/posts",
    icon: StickyNote,
  },
  {
    title: "DM Automation",
    url: "/dashboard/dm-automation",
    icon: Cable,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="mt-4">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem className="my-2" key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Logout/>
      </SidebarFooter>
    </Sidebar>
  );
}
