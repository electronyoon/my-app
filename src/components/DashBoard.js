import React, { Component } from 'react';
import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/bootstrap-react'
import { LightbulbFill, LightbulbOffFill, BsCheck } from 'react-bootstrap-icons';
import StepProgressBar from './DashBoard/StepProgressBar';
import dbFe from 'db_fe';
import FetchSemisteps from './DashBoard/FetchSemisteps';



export default function DashBoard() {

  let data = <FetchSemisteps url="/dashboard" />;
  console.log(data);
  data = [];
  
  (function setDataCellIfJsonExists() {
    const aunfList = Object.keys(dbFe.aunfList);
    aunfList.map((a, i) => {
      data.push({
        "AUNF_CD": dbFe.aunfList[a].AUNF_CD,
        "AUNF_NM": dbFe.aunfList[a].AUNF_NM
      });
    });
  })();

  return (
    <>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">AUNF_CD</CTableHeaderCell>
            <CTableHeaderCell scope="col">AUNF_NM</CTableHeaderCell>
            <CTableHeaderCell scope="col">진행상황</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data.map((a, i) => {
            return (<CTableRow>
                <CTableHeaderCell scope="row">{i+1}</CTableHeaderCell>
                <CTableDataCell>{a.AUNF_CD}</CTableDataCell>
                <CTableDataCell>{a.AUNF_NM}</CTableDataCell>
                {/* <CTableDataCell><LightbulbFill color="gold" />미정</CTableDataCell>
                <CTableDataCell><LightbulbOffFill color="gray" />미정</CTableDataCell> */}
                <CTableDataCell><StepProgressBar cd={i+1} /></CTableDataCell>
              </CTableRow>);
          })}
        </CTableBody>
      </CTable>
    </>
  );
};
