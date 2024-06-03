import "./BsDashboard.css";
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
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function BsDashboard() {
    const loggedUser = JSON.parse(localStorage.getItem('user'));
    // console.log(loggedUser);
    const data = [
        { month: "JAN", percentage: 50 },
        { month: "FEB", percentage: 10 },
        { month: "MAR", percentage: 70 },
        { month: "APR", percentage: 25 },
        { month: "MAY", percentage: 44 },
        { month: "JUN", percentage: 40 },
        { month: "JUL", percentage: 30 },
        { month: "AUG", percentage: 55 },
        { month: "SEP", percentage: 25 },
        { month: "OCT", percentage: 40 },
        { month: "NOV", percentage: 33 },
        { month: "DEC", percentage: 20 },

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
            // console.log(response.data);
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
                                    <h2>Report Product Selling</h2>
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

export default BsDashboard;
