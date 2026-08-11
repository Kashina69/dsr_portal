import { StatusBar, type StatusStats } from "@/components/ui/StatusBar";

interface ReceivedDsrStatusBarProps {
    stats: StatusStats;
}

export { type StatusStats };

export function ReceivedDsrStatusBar({ stats }: ReceivedDsrStatusBarProps) {
    return <StatusBar stats={stats} />;
}
