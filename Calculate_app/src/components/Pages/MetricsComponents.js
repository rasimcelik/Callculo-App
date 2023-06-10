import { styled } from "@stitches/react";
import "../Fonts/Fonts.css";

export const Wrapper = styled("ul", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px 0px 0px 0px",
  background: "rgba(237, 242, 247, 0.836)",
  borderRadius: "20px",
  width: "auto",
  margin: "2rem 2rem 0 2rem",
});

export const Tab = styled("li", {
  display: "flex",
  justifyContent: "center",
  textAlign: "center",
  position: "relative",
  listStyle: "none",
  cursor: "pointer",
  width: "120px",
  height: "30px",
  outline: "none",

  span: {
    textAlign: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: "6px",
    bottom: 0,
    zIndex: 1,
    userSelect: "none",
    fontSize: "1rem",
    color: "#020b95",
    fontFamily: "Poppins",
    fontWeight: "500",
  },
});
