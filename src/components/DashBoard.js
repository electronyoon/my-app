import React, { Component } from 'react';
import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/bootstrap-react'
import { LightbulbFill, LightbulbOffFill } from 'react-bootstrap-icons';
import StepProgressBar from './DashBoard/StepProgressBar';



class DashBoard extends Component {
  render() {
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
            <CTableRow>
              <CTableHeaderCell scope="row">1</CTableHeaderCell>
              <CTableDataCell>A035A</CTableDataCell>
              <CTableDataCell>상훈수여증명서</CTableDataCell>
              {/* <CTableDataCell><LightbulbFill color="gold" />미정</CTableDataCell>
              <CTableDataCell><LightbulbOffFill color="gray" />미정</CTableDataCell> */}
              <CTableDataCell><StepProgressBar statusCode={1} /></CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>


      </>
    );
  }
}

export default DashBoard;