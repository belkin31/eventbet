import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
export const ChatIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#7296A4"
        d="M5.075 10.5H1.75C.88 10.5 0 9.838 0 8.361v-2.94A5.494 5.494 0 0 1 4.87.013a5.25 5.25 0 0 1 5.617 5.617 5.494 5.494 0 0 1-5.412 4.87Zm6.592-5.203h-.007c0 .138 0 .276-.007.415-.226 3.155-3.109 5.825-6.354 5.944v.008A4.667 4.667 0 0 0 9.333 14h2.917A1.75 1.75 0 0 0 14 12.25V9.333a4.667 4.667 0 0 0-2.333-4.036Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h14v14H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
