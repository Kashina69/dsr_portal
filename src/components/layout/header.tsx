import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Header() {
    return (
        <header className="px-6 py-4 flex flex-col items-end gap-3 z-10 relative">
            <div className="flex items-center gap-3 text-white">
                <span className="text-sm font-medium">Date : 12-08-2026</span>
                <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8 border border-white/20 bg-gradient-to-tr from-[#00c8ff] to-[#0f2142]">
                        <AvatarFallback className="bg-transparent text-white text-xs">
                            PR
                        </AvatarFallback>
                        {/* Assuming no actual image provided, fallback will show */}
                    </Avatar>
                    <span className="text-sm font-semibold">Prince Rawat</span>
                </div>
            </div>

            <Card className="bg-white rounded-lg p-3 w-[180px] shadow-sm flex flex-col items-center gap-2 border-0">
                <div className="text-center w-full">
                    <h3 className="font-bold text-[#0f2142] text-sm">Time in at 9:32 am</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Timing: 04:07:06</p>
                </div>
                <Button className="w-full bg-[#00c8ff] hover:bg-[#00b0e6] text-white text-xs h-7 rounded-md font-medium">
                    Time Out
                </Button>
            </Card>
        </header>
    );
}
