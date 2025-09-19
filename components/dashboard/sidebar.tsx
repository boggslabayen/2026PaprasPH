"use client";

import { signOut } from "next-auth/react";
import { auth } from "@/server/auth";

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  NewspaperIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/solid";

import SideTab from "./sidebar-tabs";
import { UserButton } from "./user-button";

export function Sidebar() {
  return (
    <Card
      className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5"
      placeholder={undefined}
      onResize={undefined}
      onResizeCapture={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <div className="mb-2 p-4">
        <Typography
          variant="h5"
          color="blue-gray"
          placeholder={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Papras Dashboard
        </Typography>
      </div>
      <List
        placeholder={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {/* Dashboard */}
        <SideTab
          path="/dashboard"
          name="Dashboard"
          prefix={
            <ListItemPrefix
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
          }
        />

        {/* Articles */}
        <SideTab
          path="/dashboard/articles"
          name="Articles"
          prefix={
            <ListItemPrefix
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <NewspaperIcon className="h-5 w-5" />
            </ListItemPrefix>
          }
        />

        {/* Events */}
        <SideTab
          path="/dashboard/events"
          name="Events"
          prefix={
            <ListItemPrefix
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <CalendarDaysIcon className="h-5 w-5" />
            </ListItemPrefix>
          }
        />

        {/* Settings */}
        <SideTab
          path="/dashboard/settings"
          name="Settings"
          prefix={
            <ListItemPrefix
              placeholder={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
          }
        />

        {/* Sign out */}
        <ListItem
          placeholder={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          onClick={() => signOut()}
        >
          <ListItemPrefix
            placeholder={undefined}
            onResize={undefined}
            onResizeCapture={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
