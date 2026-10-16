import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#FBF7EE" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 72px",
            width: "64%",
          }}
        >
          <div style={{ fontSize: 22, color: "#6B665C", marginBottom: 28 }}>
            {`${profile.role}, ${profile.location}`}
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 132, fontWeight: 800, lineHeight: 0.92, letterSpacing: -5, color: "#E8390E" }}>
            <span>{profile.heroLines[0]}</span>
            <span>{profile.heroLines[1]}</span>
          </div>
          <div style={{ fontSize: 24, color: "#0B0B0B", marginTop: 36 }}>Full-stack, mobile and agentic AI</div>
        </div>
        <div style={{ display: "flex", width: "36%", height: "100%", background: "#E8390E" }} />
      </div>
    ),
    size,
  );
}
