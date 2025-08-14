import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "Sergio.dev";
  const subtitle = searchParams.get("subtitle") ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background:
            "linear-gradient(135deg, #0b0f14 0%, #121826 50%, #1f2a44 100%)",
          color: "white",
          fontSize: 56,
          fontWeight: 700,
        }}
      >
        <div style={{ fontSize: 54, lineHeight: 1.1 }}>{title}</div>
        {subtitle && (
          <div style={{ marginTop: 18, fontSize: 28, opacity: 0.8 }}>
            {subtitle}
          </div>
        )}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 48,
            fontSize: 24,
            opacity: 0.75,
          }}
        >
          sergio.dev
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
