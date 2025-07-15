"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useCreateBorrowMutation } from "@/redux/api/baseApi";
import { useNavigate } from "react-router";

interface BorrowModalProps {
    bookId: string;
    disable: boolean
}

export function BorrowModal({ bookId, disable }: BorrowModalProps) {
    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState<number>(1);
    const [dueDate, setDueDate] = useState<Date | undefined>(undefined);
    const [error, setError] = useState<string>("");
    const [createBorrow] = useCreateBorrowMutation();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (!dueDate) {
            setError("Due date is required.");
            return;
        }
        const borrowData = {
            book: bookId,
            quantity,
            dueDate: dueDate.toISOString()
        }
        setError("");
        const res = await createBorrow(borrowData).unwrap();
        if (res.success) {
            setOpen(false);
            navigate('/borrow-summary')
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button disabled={disable} variant="outline">Borrow</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Borrow Book</DialogTitle>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="quantity" className="text-right">
                            Quantity
                        </Label>
                        <Input
                            id="quantity"
                            type="number"
                            min={1}
                            value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}
                            className="col-span-3"
                        />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">Due Date</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-full justify-start text-left font-normal col-span-3",
                                        !dueDate && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {dueDate ? format(dueDate, "PPP") : "Pick a date"}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    mode="single"
                                    selected={dueDate}
                                    onSelect={setDueDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>


                </div>
                <div>
                    {error && (
                        <p className="text-sm text-red-500 col-span-4 text-center -mt-2">
                            {error}
                        </p>
                    )}
                </div>

                <DialogFooter>
                    <Button onClick={handleSubmit}>Confirm Borrow</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
