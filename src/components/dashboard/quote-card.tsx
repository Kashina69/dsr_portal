import { Card } from "@/components/ui/card";

export function QuoteCard() {
    return (
        <Card className="bg-white rounded-lg p-5 shadow-sm border-0 mt-4">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                QUOTE OF THE DAY
            </h4>
            <p className="text-[#0f2142] italic font-serif text-lg">
                &quot;This one step, choosing a goal and sticking to it, changes everything.&quot;
            </p>
        </Card>
    );
}
