import { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Users, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import '../styles/authority-dashboard.css';

export default function AuthorityDashboard() {
  const [dashboardStats, setDashboardStats] = useState({
    totalEvents: 24,
    activeEvents: 3,
    completedEvents: 18,
    pendingApprovals: 3,
  });

  // Mock data for charts
  const monthlyEventsData = [
    { month: 'Jan', events: 12 },
    { month: 'Feb', events: 15 },
    { month: 'Mar', events: 8 },
    { month: 'Apr', events: 18 },
    { month: 'May', events: 22 },
    { month: 'Jun', events: 20 },
  ];

  const eventTypeData = [
    { type: 'Marathon', count: 8 },
    { type: 'Conference', count: 6 },
    { type: 'Festival', count: 5 },
    { type: 'Parade', count: 3 },
    { type: 'Sports', count: 2 },
  ];

  const recentActivities = [
    { id: 1, action: 'Event Approved', event: 'City Marathon 2026', time: '2 hours ago' },
    { id: 2, action: 'Route Updated', event: 'Tech Conference', time: '5 hours ago' },
    { id: 3, action: 'Event Created', event: 'Music Festival', time: '1 day ago' },
    { id: 4, action: 'Incident Reported', event: 'Downtown Parade', time: '2 days ago' },
  ];

  return (
    <div className="authority-dashboard-page">
      <Navbar />

      <main className="authority-main">
        <div className="page-header">
          <h1 className="page-title">Authority Dashboard</h1>
          <p className="page-subtitle">Overview of all events and activities</p>
        </div>

        {/* Stats Overview */}
        <div className="stats-overview">
          <div className="stat-card-large">
            <div className="stat-icon-large blue">
              <Users size={32} />
            </div>
            <div className="stat-info">
              <h3 className="stat-number">{dashboardStats.totalEvents}</h3>
              <p className="stat-label">Total Events</p>
            </div>
          </div>

          <div className="stat-card-large">
            <div className="stat-icon-large green">
              <CheckCircle size={32} />
            </div>
            <div className="stat-info">
              <h3 className="stat-number">{dashboardStats.activeEvents}</h3>
              <p className="stat-label">Active Events</p>
            </div>
          </div>

          <div className="stat-card-large">
            <div className="stat-icon-large purple">
              <Clock size={32} />
            </div>
            <div className="stat-info">
              <h3 className="stat-number">{dashboardStats.completedEvents}</h3>
              <p className="stat-label">Completed</p>
            </div>
          </div>

          <div className="stat-card-large">
            <div className="stat-icon-large orange">
              <AlertTriangle size={32} />
            </div>
            <div className="stat-info">
              <h3 className="stat-number">{dashboardStats.pendingApprovals}</h3>
              <p className="stat-label">Pending Approval</p>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="charts-grid">
          {/* Monthly Events Chart */}
          <div className="chart-container">
            <h3 className="chart-title">Monthly Events Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyEventsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="events" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Event Types Chart */}
          <div className="chart-container">
            <h3 className="chart-title">Events by Type</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={eventTypeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="activities-section">
          <h2 className="section-title">Recent Activities</h2>
          <div className="activities-list">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className="activity-dot"></div>
                <div className="activity-content">
                  <p className="activity-action">{activity.action}</p>
                  <p className="activity-event">{activity.event}</p>
                </div>
                <span className="activity-time">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
