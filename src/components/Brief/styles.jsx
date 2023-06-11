import styled from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid #ccc;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
`;

export const TableFooterRow = styled.tr`
  background-color: #f9f9f9;
  font-weight: bold;
`;