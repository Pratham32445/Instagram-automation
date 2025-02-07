import Friends from "@/app/dashboard/friends/page";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { House, StickyNote } from "lucide-react";
import Link from "next/link";
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
    title: "Friends",
    url: "/dashboard/friends",
    icon: Friends,
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
    </Sidebar>
  );
}
