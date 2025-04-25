import React from "react";
import Header from "../MainDashboardComponent/Header";
import ActiveProjectsWidget from "../MainDashboardComponent/ActiveProjectsWidget";
import EarningsCard from "../MainDashboardComponent/EarningsCard";
import HoursTrackedCard from "../MainDashboardComponent/HoursTrackedCard";
import TodaysTasks from "../MainDashboardComponent/TodaysTasks";
import QuickActions from "../MainDashboardComponent/QuickActions";
import QuickActions2 from "../MainDashboardComponent/QuickActions2";
import SmartAssistant from "../MainDashboardComponent/SmartAssistant";
import TimeTracker from "../MainDashboardComponent/TimeTracker";
import UpcomingDeadlines from "../MainDashboardComponent/UpcomingDeadlines";
import PriorityTimeline from "../MainDashboardComponent/PriorityTimeline";
import UserAvatars from "../MainDashboardComponent/UserAvatars";
const MainDashboard = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100 mt-14 min-h-[calc(100vh-3.5rem)] p-8">
        <div className="grid  grid-cols-1 md:grid-cols-[220px_1fr_300px] gap-4 mb-4">
          <div className="flex flex-col gap-4">
            <ActiveProjectsWidget />
            <TodaysTasks />
            <TimeTracker />
            <UserAvatars />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 w-full">
              <div className="flex-1">
                <EarningsCard />
              </div>
              <div className="flex-1">
                <HoursTrackedCard />
              </div>
            </div>
            <QuickActions />
            <QuickActions2 />
          </div>
          <div className="flex flex-col gap-4">
            <SmartAssistant />
            <UpcomingDeadlines />
            <PriorityTimeline />
          </div>
        </div>
      </div>
    </>
  );
};
export default MainDashboard;
