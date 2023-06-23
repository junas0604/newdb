import React from "react";

function HomePage() {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate().toString().padStart(2, '0');

  // Get the next day's date
  const nextDate = new Date(currentDate);
  nextDate.setDate(currentDate.getDate() + 1);
  const nextDay = nextDate.getDate().toString().padStart(2, '0');


  const tnextDate = new Date(nextDate);
  tnextDate.setDate(nextDate.getDate() + 1);
  const tnextDay = tnextDate.getDate().toString().padStart(2, '0');


  const rows = [
    {
      name: "a",
      field2: "a",
      field3: "a",
      field4: "a",
    },
    // Add more rows here
  ];

  const tableRows = rows.map((row, index) => (
    <tr key={index}>
      <td style={{ border: "1px solid black", padding: "8px" }}>{row.name}</td>
      <td style={{ border: "1px solid black", padding: "8px" }}>{row.field2}</td>
      <td style={{ border: "1px solid black", padding: "8px" }}>{row.field3}</td>
      <td style={{ border: "1px solid black", padding: "8px" }}>{row.field4}</td>
    </tr>
  ));

  return (
    <form>
      <table
        style={{
          margin: "0 auto",
          borderCollapse: "collapse",
          border: "1px solid black",
        }}
      >
        <thead>
          <tr>
            <th colSpan="4">
              {currentMonth} {currentDay}, {currentYear}
            </th>
          </tr>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Names</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              {currentDay} {currentMonth} {currentYear}
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              {nextDay} {currentMonth} {currentYear}
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              {tnextDay} {currentMonth} {currentYear}
            </th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </form>
  );
}

export default HomePage;
