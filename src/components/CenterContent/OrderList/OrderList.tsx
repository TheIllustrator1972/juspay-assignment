import { useState } from "react";
import {
  PlusIcon,
  FunnelIcon,
  ArrowsDownUpIcon,
  MagnifyingGlassIcon,
  CalendarIcon,
  DotsThreeIcon,
  CaretLeftIcon,
  CaretRightIcon,
  FileTextIcon,
} from "@phosphor-icons/react";
import { orderListStyles } from "./styles";

interface Order {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  project: string;
  address: string;
  date: string;
  status: "In Progress" | "Complete" | "Pending" | "Approved" | "Rejected";
}

const orders: Order[] = [
  {
    id: "#CM9801",
    userId: "user1",
    userName: "Natali Craig",
    userAvatar: "/Female05.png",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    userId: "user2",
    userName: "Kate Morrison",
    userAvatar: "/Female08.png",
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    userId: "user3",
    userName: "Drew Cano",
    userAvatar: "/Male06.png",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    userId: "user4",
    userName: "Orlando Diggs",
    userAvatar: "/Male07.png",
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    userId: "user5",
    userName: "Andi Lane",
    userAvatar: "/Female09.png",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
];

const OrderList = () => {
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredRow, setHoveredRow] = useState<string | null>(null);
  const totalPages = 5;

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(new Set(orders.map((order) => order.id)));
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleSelectRow = (orderId: string) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(orderId)) {
      newSelected.delete(orderId);
    } else {
      newSelected.add(orderId);
    }
    setSelectedRows(newSelected);
  };

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "In Progress":
        return "var(--order-status-in-progress)";
      case "Complete":
        return "var(--order-status-complete)";
      case "Pending":
        return "var(--order-status-pending)";
      case "Approved":
        return "var(--order-status-approved)";
      case "Rejected":
        return "var(--order-status-rejected)";
      default:
        return "var(--order-status-pending)";
    }
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const allSelected = selectedRows.size === orders.length && orders.length > 0;
  const someSelected =
    selectedRows.size > 0 && selectedRows.size < orders.length;

  return (
    <div style={orderListStyles.container}>
      <h1 style={orderListStyles.title}>Order List</h1>
      <div style={orderListStyles.header}>
        <div style={orderListStyles.headerLeft}>
          <div style={orderListStyles.actionButtons}>
            <button style={orderListStyles.iconButton} aria-label="Add order">
              <PlusIcon size={20} weight="bold" />
            </button>
            <button style={orderListStyles.iconButton} aria-label="Filter">
              <FunnelIcon size={20} weight="bold" />
            </button>
            <button style={orderListStyles.iconButton} aria-label="Sort">
              <ArrowsDownUpIcon size={20} weight="bold" />
            </button>
          </div>
        </div>
        <div style={orderListStyles.searchContainer}>
          <MagnifyingGlassIcon
            size={20}
            weight="bold"
            style={orderListStyles.searchIcon}
          />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={orderListStyles.searchInput}
          />
        </div>
      </div>

      <div style={orderListStyles.tableWrapper}>
        <table style={orderListStyles.table}>
          <thead style={orderListStyles.tableHeader}>
            <tr>
              <th style={orderListStyles.headerCell}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <input
                    type="checkbox"
                    checked={allSelected}
                    ref={(input) => {
                      if (input) input.indeterminate = someSelected;
                    }}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    style={orderListStyles.checkbox}
                  />
                  <span style={orderListStyles.headerText}>Order ID</span>
                </div>
              </th>
              <th style={orderListStyles.headerCell}>
                <span style={orderListStyles.headerText}>User</span>
              </th>
              <th style={orderListStyles.headerCell}>
                <span style={orderListStyles.headerText}>Project</span>
              </th>
              <th style={orderListStyles.headerCell}>
                <span style={orderListStyles.headerText}>Address</span>
              </th>
              <th style={orderListStyles.headerCell}>
                <span style={orderListStyles.headerText}>Date</span>
              </th>
              <th style={orderListStyles.headerCell}>
                <span style={orderListStyles.headerText}>Status</span>
              </th>
            </tr>
          </thead>
          <tbody style={orderListStyles.tableBody}>
            {filteredOrders.map((order) => (
              <tr
                key={order.id}
                style={{
                  ...orderListStyles.tableRow,
                  ...(hoveredRow === order.id
                    ? orderListStyles.tableRowHover
                    : {}),
                }}
                onMouseEnter={() => setHoveredRow(order.id)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td style={orderListStyles.tableCell}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={selectedRows.has(order.id)}
                      onChange={() => handleSelectRow(order.id)}
                      style={orderListStyles.checkbox}
                    />
                    <span style={orderListStyles.orderId}>{order.id}</span>
                  </div>
                </td>
                <td style={orderListStyles.tableCell}>
                  <div style={orderListStyles.userCell}>
                    <img
                      src={order.userAvatar}
                      alt={order.userName}
                      style={orderListStyles.avatar}
                    />
                    <span style={orderListStyles.userName}>
                      {order.userName}
                    </span>
                  </div>
                </td>
                <td style={orderListStyles.tableCell}>
                  <span style={orderListStyles.projectText}>
                    {order.project}
                  </span>
                </td>
                <td style={orderListStyles.tableCell}>
                  <div style={orderListStyles.addressCell}>
                    <span style={orderListStyles.addressText}>
                      {order.address}
                    </span>
                    {order.id === "#CM9805" && (
                      <FileTextIcon
                        size={16}
                        weight="regular"
                        style={orderListStyles.documentIcon}
                      />
                    )}
                  </div>
                </td>
                <td style={orderListStyles.tableCell}>
                  <div style={orderListStyles.dateCell}>
                    <CalendarIcon
                      size={16}
                      weight="regular"
                      style={orderListStyles.dateIcon}
                    />
                    <span style={orderListStyles.dateText}>{order.date}</span>
                  </div>
                </td>
                <td style={orderListStyles.tableCell}>
                  <div style={orderListStyles.statusCell}>
                    <div
                      style={{
                        ...orderListStyles.statusDot,
                        backgroundColor: getStatusColor(order.status),
                      }}
                    />
                    <span style={orderListStyles.statusText}>
                      {order.status}
                    </span>
                    {order.status === "Rejected" && (
                      <button
                        style={orderListStyles.moreButton}
                        aria-label="More options"
                      >
                        <DotsThreeIcon size={20} weight="bold" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={orderListStyles.pagination}>
        <button
          style={{
            ...orderListStyles.paginationButton,
            ...(currentPage === 1
              ? orderListStyles.paginationButtonDisabled
              : {}),
          }}
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <CaretLeftIcon size={16} weight="bold" />
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            style={{
              ...orderListStyles.paginationNumber,
              ...(currentPage === page
                ? orderListStyles.paginationNumberActive
                : {}),
            }}
            onClick={() => setCurrentPage(page)}
            aria-label={`Page ${page}`}
          >
            {page}
          </button>
        ))}
        <button
          style={{
            ...orderListStyles.paginationButton,
            ...(currentPage === totalPages
              ? orderListStyles.paginationButtonDisabled
              : {}),
          }}
          onClick={() =>
            setCurrentPage((prev) => Math.min(totalPages, prev + 1))
          }
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          <CaretRightIcon size={16} weight="bold" />
        </button>
      </div>
    </div>
  );
};

export default OrderList;
