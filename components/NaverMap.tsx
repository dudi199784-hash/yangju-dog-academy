"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

const CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;
const ADDRESS_QUERY = site.address.road;

/** 네이버 지도 공식 임베드 — 등록 주소로 검색 */
function NaverMapEmbed({ className }: { className?: string }) {
  const src = `https://map.naver.com/v5/embed/search/${encodeURIComponent(ADDRESS_QUERY)}`;

  return (
    <iframe
      title="양주독아카데미 위치 — 네이버 지도"
      src={src}
      className={className ?? "h-full w-full border-0"}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

function NaverMapApi({ className }: { className?: string }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<naver.maps.Map | null>(null);
  const markerRef = useRef<naver.maps.Marker | null>(null);
  const [scriptReady, setScriptReady] = useState(false);
  const [mapReady, setMapReady] = useState(false);

  const createMap = useCallback((center: naver.maps.LatLng) => {
    if (!mapRef.current || mapInstance.current) return;

    const map = new naver.maps.Map(mapRef.current, {
      center,
      zoom: 16,
      zoomControl: true,
      zoomControlOptions: { position: naver.maps.Position.TOP_RIGHT },
    });

    markerRef.current = new naver.maps.Marker({
      position: center,
      map,
      title: site.name,
    });

    mapInstance.current = map;
    setMapReady(true);
  }, []);

  const initMap = useCallback(() => {
    if (!mapRef.current || !window.naver?.maps || mapInstance.current) return;

    naver.maps.Service.geocode(
      { query: ADDRESS_QUERY },
      (status, response) => {
        if (status === naver.maps.Service.Status.OK && response.v2.addresses[0]) {
          const addr = response.v2.addresses[0];
          const point = new naver.maps.LatLng(
            parseFloat(addr.y),
            parseFloat(addr.x),
          );
          createMap(point);
          return;
        }

        const { lat, lng } = site.address.coordinates;
        createMap(new naver.maps.LatLng(lat, lng));
      },
    );
  }, [createMap]);

  useEffect(() => {
    if (scriptReady) initMap();
  }, [scriptReady, initMap]);

  useEffect(() => {
    return () => {
      mapInstance.current = null;
      markerRef.current = null;
    };
  }, []);

  return (
    <>
      <Script
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${CLIENT_ID}&submodules=geocoder`}
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
      />
      <div className={`relative ${className}`}>
        <div ref={mapRef} className="h-full w-full" />
        {!mapReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-stone-100 text-sm text-stone-500">
            지도 불러오는 중…
          </div>
        )}
      </div>
    </>
  );
}

export function NaverMap({ className = "h-full w-full" }: { className?: string }) {
  if (CLIENT_ID) {
    return <NaverMapApi className={className} />;
  }
  return <NaverMapEmbed className={className} />;
}
