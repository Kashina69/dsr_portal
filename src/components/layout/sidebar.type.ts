type SubItem = { name: string; href: string; icon?: React.ElementType };
export type NavItem = {
    name: string;
    href: string;
    icon: React.ElementType;
    expandable?: boolean;
    subItems?: SubItem[];
};
