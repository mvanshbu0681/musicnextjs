"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            active={active}
            setActive={setActive}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem active={active} setActive={setActive} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses" setActive={setActive}>
              All Courses
            </HoveredLink>
            <HoveredLink href="/courses" setActive={setActive}>
              Basic Music Theory
            </HoveredLink>
            <HoveredLink href="/courses" setActive={setActive}>
              Advanced Composition
            </HoveredLink>
            <HoveredLink href="/courses" setActive={setActive}>
              Songwritting
            </HoveredLink>
            <HoveredLink href="/courses" setActive={setActive}>
              Music Production
            </HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem
            active={active}
            setActive={setActive}
            item="Contact Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
