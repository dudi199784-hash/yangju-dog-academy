/** 배너 이미지 위 텍스트 가독성용 — 이미지(z-0)보다 위에 렌더링 */
export function BannerOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10" aria-hidden>
      <div className="absolute inset-0 bg-black/28" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/32 to-black/12" />
    </div>
  );
}
