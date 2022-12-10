//libs
import React from "react";
import { Header, Footer } from "src/components";

//styles
import S from "./HeaderFooterHoc.module.scss";

const HeaderFooterHoc = ({ children, showHeader = true, showFooter = false, isLight }) => {
  return (
    <>
      {!!showHeader && <Header isLight={isLight} />}
      {children}
      {!!showFooter && <Footer />}

    </>
  );
};

export default HeaderFooterHoc;
