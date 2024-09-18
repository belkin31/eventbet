import * as React from "react"
import Svg, { Path } from "react-native-svg"
export const VerificationIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#fff"
      fillOpacity={0.51}
      d="M3.5 2.082v-.833C3.5.416 3.935 0 4.81 0h4.374c.874 0 1.31.416 1.31 1.249v.833c0 .832-.436 1.249-1.31 1.249H4.81c-.874 0-1.31-.417-1.31-1.25Zm10.497 2.084V12.5c0 1.665-.874 2.501-2.625 2.501H2.625C.877 15 0 14.167 0 12.499V4.163c0-1.45.659-2.269 1.982-2.45.105-.015.206.067.206.17v.199c0 1.516 1.031 2.5 2.625 2.5h4.374c1.59 0 2.625-.982 2.625-2.5v-.2c0-.102.101-.184.206-.17 1.323.182 1.982 1 1.982 2.451l-.003.003ZM9.65 6.78a.679.679 0 0 0-.926 0L6.272 9.116l-.994-.948a.679.679 0 0 0-.926 0 .604.604 0 0 0 0 .883l1.459 1.39c.129.123.295.182.464.182a.68.68 0 0 0 .465-.182l2.914-2.777a.604.604 0 0 0 0-.882l-.003-.003Z"
    />
  </Svg>
)