import React from 'react';
import { Download, Monitor } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface DownloadButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  showDetails?: boolean;
}

export const DownloadButton: React.FC<DownloadButtonProps> = ({
  children = 'Windows için İndir',
  variant = 'primary',
  size = 'md',
  showDetails = false,
  className,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all active:scale-95 group";
  
  const variants = {
    primary: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/25 border border-indigo-500/50 hover:border-indigo-400 glow-border",
    secondary: "bg-slate-800 hover:bg-slate-700 text-slate-100 border border-white/10",
    outline: "bg-transparent hover:bg-white/5 text-slate-300 border border-slate-700 hover:border-slate-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs rounded-xl gap-1.5",
    md: "px-6 py-3 text-sm rounded-2xl gap-2",
    lg: "px-8 py-4 text-base rounded-2xl gap-2.5",
  };

  return (
    <div className="inline-flex flex-col items-center">
      <a
        href="/downloads/ZEKA-Setup.exe"
        download="ZEKA-Setup.exe"
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        <Download className={cn("transition-transform group-hover:-translate-y-0.5", size === 'sm' ? "w-3.5 h-3.5" : size === 'lg' ? "w-5 h-5" : "w-4 h-4")} />
        <span>{children}</span>
      </a>
      
      {showDetails && (
        <div className="flex items-center gap-3 mt-3 text-[11px] font-medium text-slate-400">
          <span className="flex items-center gap-1"><Monitor className="w-3 h-3" /> Windows 10 / 11</span>
          <span className="w-1 h-1 rounded-full bg-slate-700" />
          <span>Ücretsiz</span>
          <span className="w-1 h-1 rounded-full bg-slate-700" />
          <span className="text-emerald-400">Local-first</span>
        </div>
      )}
    </div>
  );
};
