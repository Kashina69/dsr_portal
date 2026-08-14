import { Card } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const birthdays = [
    { sr: 1, name: "Aditya Sharma", date: "12 August" },
    { sr: 2, name: "Amaltas Singh", date: "13 August" },
    { sr: 3, name: "Sidhant Uppal", date: "15 August" },
    { sr: 4, name: "Subham Bhal", date: "19 August" },
    { sr: 5, name: "Abhishek Jain", date: "01 September" },
];

export function BirthdayCard() {
    return (
        <Card className="bg-card rounded-lg shadow-sm border mt-4 overflow-hidden mb-8">
            <div className="p-5 pb-4">
                <h3 className="font-bold text-foreground text-sm">Upcoming Birthdays</h3>
            </div>

            <div className="w-full overflow-x-auto">
                <Table>
                    <TableHeader className="bg-muted/50">
                        <TableRow className="border-b hover:bg-transparent">
                            <TableHead className="text-[10px] font-bold text-muted-foreground uppercase h-8 py-1">
                                SR NO
                            </TableHead>
                            <TableHead className="text-[10px] font-bold text-muted-foreground uppercase h-8 py-1 w-2/3">
                                EMPLOYEE NAME
                            </TableHead>
                            <TableHead className="text-[10px] font-bold text-muted-foreground uppercase h-8 py-1">
                                DATE
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {birthdays.map((birthday) => (
                            <TableRow key={birthday.sr} className="border-b hover:bg-muted/50">
                                <TableCell className="text-xs text-muted-foreground py-2">
                                    {birthday.sr}
                                </TableCell>
                                <TableCell className="text-xs text-muted-foreground py-2 whitespace-nowrap">
                                    {birthday.name}
                                </TableCell>
                                <TableCell className="text-xs text-muted-foreground py-2 whitespace-nowrap">
                                    {birthday.date}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Card>
    );
}
