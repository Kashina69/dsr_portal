export interface NavItem {
    label: string;
    href: string;
}

export interface NavGroup {
    label: string;
    items: NavItem[];
}
