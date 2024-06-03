import "./SaDashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import Nav from "../Nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faHandshakeAlt,
    faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import {
    Tooltip,
    BarChart,
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Bar,
} from "recharts";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function SaDashboard() {
    const data = [
        { month: "", percentage: 0 },
        { month: "BS/OWNER", percentage: 10 },
        { month: "CLUBS", percentage: 70 },
        { month: "POST", percentage: 25 },
        { month: "STUDENTS", percentage: 44 },

    ];
    const [allStudents, setAllStudents] = useState(0);
    const [allAdverts, setAllAdverts] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalPosts, setTotalPosts] = useState(0);

    useEffect(() => {
        getCounts();
    }, []);

    const getCounts = async () => {
        const response = await axios.get('/api/records/count');
        if (response.status == 200) {
            setAllStudents(response.data.students);
            setAllAdverts(response.data.adverts);
            setTotalProducts(response.data.products);
            setTotalPosts(0);
        } else {
            // console.log(response);
        }
    }
    return (
        <div className="student-profile">
            <Sidebar />
            <div className="student-profile-contents">
                <Nav />
                <div>
                    <div className="student-profile-dashboard">
                        <main>
                            <div className="main-cards">
                                <div className="card">
                                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                    <div className="card-inner">
                                        <p className="text-primary-p">Student</p>
                                        <span className="text-tile">{allStudents}</span>
                                    </div>
                                </div>
                                <div className="card">
                                    <FontAwesomeIcon icon={faHandshakeAlt}></FontAwesomeIcon>
                                    <div className="card-inner">
                                        <p className="text-primary-p">Total Product</p>
                                        <span className="text-tile">{totalProducts}</span>
                                    </div>
                                </div>
                                <div className="card">
                                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                                    <div className="card-inner">
                                        <p className="text-primary-p">Total Advertisement</p>
                                        <span className="text-tile">{allAdverts}</span>
                                    </div>
                                </div>
                                <div className="card">
                                    <FontAwesomeIcon icon={faHandshakeAlt}></FontAwesomeIcon>
                                    <div className="card-inner">
                                        <p className="text-primary-p">Total Post</p>
                                        <span className="text-tile">{totalPosts}</span>
                                    </div>
                                </div>

                                <div className="bs-chartcontainer vertical flat">
                                    <h2>Reports</h2>
                                    <div style={{ textAlign: "center" }}>
                                        <BarChart
                                            width={500}
                                            height={300}
                                            data={data}
                                            margin={{
                                                top: 5,
                                                right: 30,
                                                left: 80,
                                                bottom: 5,
                                            }}
                                            barSize={20}
                                        >
                                            <XAxis
                                                dataKey="month"
                                                scale="point"
                                                padding={{ left: 10, right: 10 }}
                                            />
                                            <YAxis />
                                            <Tooltip />
                                            <Legend />
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <Bar
                                                dataKey="percentage"
                                                fill="#8884d8"
                                                background={{ fill: "#eee" }}
                                            />
                                        </BarChart>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SaDashboard;
