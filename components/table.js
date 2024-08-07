"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    matchweek: "1 ",
    desiredamount: "Tsh. 2,000,000",
    reachedamount: "Tsh. 2,000,000",
    matchweekgoal: "Charity",
    status: "Done",
  },
  {
    key: "2",
    matchweek: "2",
    desiredamount: "Tsh. 5,000,000",
    reachedamount: "Tsh. 2,000,000",
    matchweekgoal: "Providing medicine to hospitals",
    status: "Active",
  },
  {
    key: "3",
    matchweek: "3",
    desiredamount: "Tsh. 3,000,000",
    reachedamount: "Tsh. 1,000,000",
    matchweekgoal: "Donations",
    status: "Active",
  },
  {
    key: "4",
    matchweek: "4",
    desiredamount: "Tsh. 6,000,000",
    reachedamount: "Tsh. 2,000,000",
    matchweekgoal: "Visiting orphanage centers",
    status: "Paused",
  },
];

const columns = [
  {
    key: "matchweek",
    label: "MATCH WEEK",
  },
  {
    key: "desiredamount",
    label: "DESIRED AMOUNT",
  },
  {
    key: "reachedamount",
    label: "REACHED AMOUNT",
  },
  {
    key: "matchweekgoal",
    label: "MATCH WEEK GOAL",
  },
  {
    key: "status",
    label: "STATUS",
  },
];

export default function App() {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));

  return (
    <Table
      aria-label="Controlled table example with dynamic content"
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
    >
      <TableHeader
        columns={columns}
        className="bg-slate-600"
        style={{ backgroundColor: "gray" }}
      >
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
