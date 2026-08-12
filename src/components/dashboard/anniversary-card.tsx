import { Card } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const anniversaries = [
    { sr: 1, name: "Jagseer Singh", designation: "Senior DevOps Engineer L1", date: "01 August" },
    { sr: 2, name: "Atul Mishra", designation: "Senior Software Engineer L1", date: "01 August" },
    { sr: 3, name: "Avani Mahajan", designation: "Software Engineer L2", date: "10 August" },
    { sr: 4, name: "Himani Chawla", designation: "Senior Software Engineer L1", date: "31 August" },
];

export function AnniversaryCard() {
    return (
        <Card className="bg-card rounded-lg shadow-sm border mt-4 overflow-hidden">
            <div className="p-5 pb-4">
                <h3 className="font-bold text-foreground text-sm mb-3">
                    Current Month Work Anniversary
                </h3>

                <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                    QUOTE ON ANNIVERSARY
                </h4>
                <p className="text-foreground italic font-serif text-sm">
                    &quot;An year of dedication, growth, and success! Happy work anniversary! Your
                    commitment and hard work continue to inspire us all. Here&apos;s to many more
                    years of achieving great milestones together.&quot;
                </p>
            </div>

            <div className="w-full overflow-x-auto">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow className="border-b hover:bg-transparent">
                            <TableHead className="text-[10px] font-bold text-muted-foreground uppercase h-8 py-1">
                                SR NO
                            </TableHead>
                            <TableHead className="text-[10px] font-bold text-muted-foreground uppercase h-8 py-1">
                                EMP NAME
                            </TableHead>
                            <TableHead className="text-[10px] font-bold text-muted-foreground uppercase h-8 py-1 w-1/2">
                                DESIGNATION
                            </TableHead>
                            <TableHead className="text-[10px] font-bold text-muted-foreground uppercase h-8 py-1">
                                DATE
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {anniversaries.map((anniversary) => (
                            <TableRow key={anniversary.sr} className="border-b hover:bg-muted/50">
                                <TableCell className="text-xs text-muted-foreground py-2">
                                    {anniversary.sr}
                                </TableCell>
                                <TableCell className="text-xs text-muted-foreground py-2 whitespace-nowrap">
                                    {anniversary.name}
                                </TableCell>
                                <TableCell className="text-xs text-muted-foreground py-2">
                                    {anniversary.designation}
                                </TableCell>
                                <TableCell className="text-xs text-muted-foreground py-2 whitespace-nowrap">
                                    {anniversary.date}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Card>
    );
}
