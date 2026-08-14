import { Card } from "@/components/ui/card";

export function QuoteCard() {
    return (
        <Card className="bg-card rounded-lg p-5 shadow-sm border mt-4">
            <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">
                QUOTE OF THE DAY
            </h4>
            <p className="text-foreground italic font-serif text-lg">
                &quot;This one step, choosing a goal and sticking to it, changes everything.&quot;
            </p>
        </Card>
    );
}
