"use client";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import React, { useRef, useState, useEffect, ReactNode } from "react";

interface NavbarProps {
  children: ReactNode;
  className?: string;
}

export const Navbar = ({
  children,
  className
}: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-40 px-3 container mx-auto w-full", className)}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { visible } as any)
          : child)}
    </div>
  );
};

interface NavBodyProps {
  children: ReactNode;
  className?: string;
  visible?: boolean;
}

export const NavBody = ({
  children,
  className,
  visible
}: NavBodyProps) => {
  return (
    <div
      style={{
        minWidth: "1000px",
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "40%" : "100%",
        transform: visible ? "translateY(20px)" : "translateY(0)",
        transition: "all 0.3s ease",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl  flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex ",
        visible && "bg-secondary ",
        className
      )}>
      {children}
    </div>
  );
};

interface NavItem {
  name: string;
  link: string;
}

interface NavItemsProps {
  items: NavItem[];
  className?: string;
  onItemClick?: () => void;
}

export const NavItems = ({
  items,
  className,
  onItemClick
}: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
        className
      )}>
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-white/80 "
          key={`link-${idx}`}
          href={item.link}>
          {hovered === idx && (
            <div
              className="absolute inset-0 h-full w-full rounded-full bg-secondary " />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </div>
  );
};

interface MobileNavProps {
  children: ReactNode;
  className?: string;
  visible?: boolean;
}

export const MobileNav = ({
  children,
  className,
  visible
}: MobileNavProps) => {
  return (
    <div
      style={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        transform: visible ? "translateY(20px)" : "translateY(0)",
        transition: "all 0.3s ease",
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-secondary ",
        className
      )}>
      {children}
    </div>
  );
};

interface MobileNavHeaderProps {
  children: ReactNode;
  className?: string;
}

export const MobileNavHeader = ({
  children,
  className
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn("flex w-full flex-row items-center justify-between", className)}>
      {children}
    </div>
  );
};

interface MobileNavMenuProps {
  children: ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose
}: MobileNavMenuProps) => {
  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-secondary px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] ",
        className
      )}>
      {children}
    </div>
  );
};

interface MobileNavToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MobileNavToggle = ({
  isOpen,
  onClick
}: MobileNavToggleProps) => {
  return isOpen ? (
    <X className="text-white" onClick={onClick} size={24} />
  ) : (
    <Menu className="text-white" onClick={onClick} size={24} />
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-md font-normal ">
      {/* <img
        src="https://assets.aceternity.com/logo-dark.png"
        alt="logo"
        width={30}
        height={30} /> */}
      <span className="font-medium  text-primary-light ">Winder&Stilhaus</span>
    </a>
  );
};

interface NavbarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  as?: keyof React.JSX.IntrinsicElements;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "gradient";
}

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: NavbarButtonProps) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-primary-light border border-primary-light text-white text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles: Record<string, string> = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none ",
    
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...(props as any)}>
      {children}
    </Tag>
  );
};

