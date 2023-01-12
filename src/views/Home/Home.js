import React, { useState } from "react";
import { Table } from "../../components/Table/Table";
import { DetailState } from "../../components/DetailState/DetailState";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  const [stateId, setstateId] = useState("");
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.state);

  console.log("---selector", selector, "dispatch", dispatch);

  return (
    <Container style={{ marginTop: "10vh", marginBottom: "5vh" }}>
      {console.log("stateid", stateId)}
      {stateId !== "" ? (
        <DetailState stateId={stateId} restartDetail={() => setstateId("")} />
      ) : (
        <Table setstateId={(value) => setstateId(value)} />
      )}
    </Container>
  );
};
