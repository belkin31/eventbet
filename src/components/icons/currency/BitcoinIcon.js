import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
export const BitcoinIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path fill="#F7931A" d="M3.563 7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
      <Path
        fill="#fff"
        d="M5.135 3.067c.069-.459-.28-.705-.758-.87l.155-.621-.378-.094-.15.605c-.1-.025-.202-.048-.304-.071l.152-.61-.378-.094-.155.621c-.082-.018-.163-.037-.241-.056v-.002l-.521-.13-.1.403s.28.065.274.069c.153.038.18.14.176.22l-.176.707.04.013-.04-.01-.248.991c-.019.047-.066.116-.174.09.004.005-.274-.069-.274-.069l-.188.433.492.123.27.07-.157.628.378.094.155-.621.301.078-.154.618.378.094.156-.627c.645.122 1.13.073 1.334-.51.164-.47-.008-.74-.348-.917.248-.057.434-.22.483-.555Zm-.864 1.211c-.116.47-.907.216-1.164.152l.208-.832c.257.064 1.078.19.956.68Zm.117-1.218c-.106.427-.764.21-.978.157l.189-.755c.213.053.9.152.79.598Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.063 0h7v7h-7z" />
      </ClipPath>
    </Defs>
  </Svg>
)
