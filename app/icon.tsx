import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "14px",
          background: "#4fd6a1",
          color: "#062219",
          fontSize: 34,
          fontWeight: 800,
          fontFamily: "sans-serif",
          letterSpacing: "-3px",
        }}
      >
        NT
      </div>
    ),
    size,
  );
}
