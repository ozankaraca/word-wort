import React from "react";
import { makeStyles } from "@material-ui/styles";
import Splash from "../quiz/splash";
import ManageDialog from "./dialog";

const Index = () => {
  return (
    <>
      <ManageDialog />
      <Splash />
    </>
  );
};

export default Index;
