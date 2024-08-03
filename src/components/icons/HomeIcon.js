import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
export const HomeIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G fill="#7296A4" clipPath="url(#a)">
      <Path d="M7 8.745a1.75 1.75 0 0 0-1.75 1.75v3.5h3.5v-3.5A1.75 1.75 0 0 0 7 8.745Z" />
      <Path d="M9.917 10.495v3.5h2.333a1.75 1.75 0 0 0 1.75-1.75v-5.32c0-.303-.118-.594-.328-.812L8.714.753a2.333 2.333 0 0 0-3.427 0L.34 6.112A1.167 1.167 0 0 0 0 6.934v5.311c0 .967.784 1.75 1.75 1.75h2.333v-3.5c.011-1.59 1.295-2.89 2.846-2.927 1.603-.038 2.975 1.283 2.988 2.928Z" />
      <Path d="M7 8.745a1.75 1.75 0 0 0-1.75 1.75v3.5h3.5v-3.5A1.75 1.75 0 0 0 7 8.745Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h14v14H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
