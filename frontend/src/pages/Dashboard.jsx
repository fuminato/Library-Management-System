import React from "react";
import "../components/signin.css";
import "../components/dashboard.css";

import "./BorrowedBooks.jsx"
import "./ReturnedBooks.jsx"
import logo from "../assets/react.svg";



export default function Dashboard() {
    return (
        <div className="dashboard-container" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <div className="dashboard-wrapper" style={{ display: "flex", flex: 1 }}>
                {/* Sidebar */}
                <aside className="sidebar">
                    <div className="sidebar-logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <nav className="sidebar-nav">
                        <button className="nav-button active">📚</button>
                        <button className="nav-button">✏️</button>
                        <button className="nav-button">📖</button>

                    </nav>
                    <div className="sidebar-footer">
                        <button className="nav-button">🔓</button>
                    </div>
                </aside>

                {/* Main content */}
                <main className="dashboard-main" style={{ flexGrow: 1, padding: "20px" }}>
                    <header className="topbar" style={{ backgroundColor: "white", padding: "10px 20px", borderRadius: "8px", marginBottom: "20px" }}>
                        <div style={{ color: "black" }}>
                            <strong>Nisal Gunasekara</strong>
                            <span className="role">User</span>
                        </div>
                        <div className="topbar-right" style={{ color: "black" }}>
                            <div className="time">12:29 PM</div>
                            <div className="date">Sep 02, 2023</div>
                            <button className="gear">⚙️</button>
                        </div>
                    </header>

                    <section className="widgets">
                        <button className="widget" onClick={() => window.location.href = "/borrowed"}>📖 BorrowedBooks</button>
                        <button className="widget" onClick={() => window.location.href = "/ReturnedBook"}>📤 ReturnBooks</button>
                        <div className="widget">👆 Let's browse available book inventory</div>
                    </section>

                    <section className="chart-quote">
                        <div className="chart-section">
                            <div className="chart-logo" style={{ color: "black" }}>
                                <img src={logo} alt="BookWorm Logo" />
                                <h2>BookWorm</h2>
                                <p>LIBRARY</p>
                            </div>
                            <div className="quote-box" style={{ color: "black" }}>
                                <blockquote>
                                    "Embarking on the journey of reading fosters personal growth, nurturing a path towards excellence and the refinement of character."
                                </blockquote>
                                <footer>~ BookWorm Team</footer>
                            </div>
                        </div>
                        <div className="pie-chart">
                            <svg viewBox="0 0 32 32" className="pie">
                                <circle r="16" cx="16" cy="16" className="pie-bg" />
                                <circle
                                    r="16"
                                    cx="16"
                                    cy="16"
                                    className="pie-fill"
                                    strokeDasharray="35 65"
                                />
                            </svg>
                            <div className="legend" style={{ color: "black" }}>
                                <div>
                                    <span className="dot black"></span> Total Borrowed Books
                                </div>
                                <div>
                                    <span className="dot blue"></span> Total Returned Books
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
