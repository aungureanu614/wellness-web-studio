import Image from 'next/image';

type LogoImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export const LogoImage = ({
  src,
  alt,
  width,
  height,
  className,
}: LogoImageProps) => {
  return (
    <a href="#" className="flex items-center gap-3">
      <div className="rounded-full bg-[var(--eucalyptus)] p-1 shadow-sm ring-1 ring-border/60 h-12 w-12">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`h-10 w-10 rounded-full object-cover ${className}`}
        />
      </div>
      <div className="inline text-sm font-semibold tracking-tight sm:text-base">
        Wellness Web Studio
        <span className="block text-xs text-foreground/60">
          Modern websites for wellness professionals
        </span>
      </div>
    </a>
  );
};
