import React from 'react';
import Sidebar from '../components/Sidebar';
import PowerBIEmbedComponent from '../components/PowerBIEmbed';
import TotalEarnings from '../components/TotalEarnings';
import AdminAnalytics from './AdminAnalytics';
import SpecialOffers from '../components/SpecialOffers';

const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sidebar role="admin" />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
       <TotalEarnings />
        <AdminAnalytics />
        <SpecialOffers />
      </div>
    </div>
  );
};

export default AdminDashboard;
