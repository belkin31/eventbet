import * as React from "react"
import Svg, { Path } from "react-native-svg"
export const CrossCheckboxIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#25E39A"
      fillRule="evenodd"
      d="M14.5 0h-6C5.7 0 4.3 0 3.23.545A5 5 0 0 0 1.045 2.73C.5 3.8.5 5.2.5 8v6c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C4.3 22 5.7 22 8.5 22h6c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185c.545-1.07.545-2.47.545-5.27V8c0-2.8 0-4.2-.545-5.27A5 5 0 0 0 19.77.545C18.7 0 17.3 0 14.5 0ZM8.354 14.425l3.182-3.182 3.181 3.182.708-.708-3.182-3.181 3.182-3.182-.708-.708-3.181 3.182-3.182-3.182-.708.708 3.182 3.182-3.182 3.181.708.708Z"
      clipRule="evenodd"
    />
  </Svg>
)
