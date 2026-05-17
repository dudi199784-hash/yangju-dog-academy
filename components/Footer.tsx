import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white py-10">
      <div className="mx-auto max-w-5xl px-5">
        <p className="text-lg font-bold text-[#1e3d2a]">{site.name}</p>
        <p className="mt-2 text-sm text-stone-500">{site.tagline}</p>
        <p className="mt-4 text-sm text-stone-500">{site.address.full}</p>
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          <a
            href={`tel:${site.phone.tel}`}
            className="font-medium text-[#1e3d2a] hover:underline"
          >
            {site.phone.display}
          </a>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#1e3d2a] hover:underline"
          >
            @{site.instagram.handle}
          </a>
          <a
            href={site.kakao.openChatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#1e3d2a] hover:underline"
          >
            {site.kakao.label}
          </a>
        </div>
        <p className="mt-8 text-xs text-stone-400">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
