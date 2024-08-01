import { ActiveLink } from "@/routes/activeLink";
import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/components/typography/typography";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

interface PropsAccordon {
    titre: string;
    items: { content: string, route: string }[];
    className?: string;
}

export default function AccordonNavigation({ titre, items, className }: PropsAccordon) {
    return (
        <Container>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1" className={`${className}`}>
                    <AccordionTrigger className="flex flex-row justify-between items-center gap-6">
                        <Typography>{titre}</Typography>
                        <ChevronDown />
                    </AccordionTrigger>
                    {items.map((item, index) => (
                        <AccordionContent key={index} className="accordion-down border-b-2">
                            <ActiveLink href={item.route}>{item.content}</ActiveLink>
                        </AccordionContent>
                    ))}
                </AccordionItem>
            </Accordion>
        </Container>
    );
}
