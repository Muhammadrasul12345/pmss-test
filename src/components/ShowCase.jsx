import React from 'react';
import "../index.css";

const ShowCase = () => {
    return (
        <div className="container">
            <div
                className="ota mt-[40px] "
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "20px",
                    
                }}
            >
                <div className="card">
                    <h2>3+</h2>
                    <p>Yillik tajriba</p>
                </div>

                <div className="card">
                    <h2>50+</h2>
                    <p>Loyihalar</p>
                </div>

                <div className="card">
                    <h2>11</h2>
                    <p>Mutaxassislar</p>
                </div>

                <div className="card">
                    <h2>100%</h2>
                    <p>Sifat kafolati</p>
                </div>
            </div>
        </div>
    );
};

export default ShowCase;


