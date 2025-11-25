import { Box } from "@mui/material";
import { useState } from "react";
import type { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
  onSearch: (query: string) => void;
}

export default function Layout({ children, onSearch }: LayoutProps) {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  const handleExpandSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        bgcolor: "background.default",
           pl: 1, // ✅ overall padding (instead of individual margins)
        boxSizing: "border-box",
      }}
    >
      <Sidebar expanded={sidebarExpanded} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          transition: "margin-left 0.3s ease",ml:0
        }}
      >
        <Header
          onSearch={onSearch}
          onExpandSidebar={handleExpandSidebar}
          sidebarExpanded={sidebarExpanded}
        />
        <Box sx={{ flexGrow: 1, p: 3,bgcolor:"background.paper" ,borderRadius:"20px",m:1,mt:0}}>{children}</Box>
      </Box>
    </Box>
  );
}
