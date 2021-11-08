import React from "react";
import {
  MobileContainer,
  MobileFlex,
  MobileMenu,
  MobileMenuElement,
} from "../HeaderElements";
import CloseIcon from "@mui/icons-material/Close";

const Mobile = ({ active, setActive }) => {
  return (
    <MobileContainer>
      <MobileFlex>
        <CloseIcon
          style={{ color: "#444", cursor: "pointer" }}
          onClick={() => setActive(!active)}
        />
        <MobileMenu>
          <MobileMenuElement>Collections</MobileMenuElement>
          <MobileMenuElement>Men</MobileMenuElement>
          <MobileMenuElement>Women</MobileMenuElement>
          <MobileMenuElement>About</MobileMenuElement>
          <MobileMenuElement>Contact</MobileMenuElement>
        </MobileMenu>
      </MobileFlex>
    </MobileContainer>
  );
};

export default Mobile;
