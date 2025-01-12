"use client"
import { HiMenu } from "react-icons/hi";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid-cols-2 gap-2 block sm:hidden">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="ghost">
              <HiMenu />
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>
              <h1 className="text-xl sm:text-2xl font-black text-gray-800">
                        <Link href="/">SHOP.CO</Link>
                    </h1>
              </SheetTitle>

            </SheetHeader>

            <ul className="flex flex-col justify-center items-center space-y-8 mt-10 ">
              <li className="hover:text-gray-800">
                <Link href="/on-sale">Shop</Link>
              </li>
              <li className="hover:text-gray-800">
                <Link href="/on-sale">On Sale</Link>
              </li>
              <li className="hover:text-gray-800">
                <Link href="/new-arrivals">New Arrivals</Link>
              </li>
              <li className="hover:text-gray-800">
                <Link href="/brands">Brands</Link>
              </li>
            </ul>

          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
