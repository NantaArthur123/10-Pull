export default interface sidebaritems{
    search?: boolean | null;
    group?: SidebarGroup[];
}

export interface SidebarGroup{
    group_name?: string;
    items?: SidebarGroupItems[];
}

export interface SidebarGroupItems{
    name?: string;
    href?: string;
    icon?: string;
}