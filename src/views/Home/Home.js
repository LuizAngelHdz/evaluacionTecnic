import React from "react";
import { Table } from "../../components/Table/Table";
import { DetailState } from "../../components/DetailState/DetailState";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {updateId} from '../../features/sates/sates'

export const Home = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.state);

  return (
    <Container style={{ marginTop: "10vh", marginBottom: "5vh" }}>
      {selector.idState !== "" ? (
        <DetailState />
      ) : (
        <Table setstateId={(value) =>  dispatch(updateId(value))} />
      )}
    </Container>
  );
};
