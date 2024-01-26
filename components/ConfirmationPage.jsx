import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, QRCode } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const ConfirmationPage = () => {
  const bookedTicket = useSelector((state) => state.bookedTicket);
  
  const downloadQRCode = () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const qrCodeElement = document.getElementById("myqrcode");

    if (qrCodeElement) {
      const qrCodeCanvas = qrCodeElement.querySelector("canvas");

      if (qrCodeCanvas) {
        const paddingX = 20;
        const paddingY = 20;

        canvas.width = qrCodeCanvas.width + 2 * paddingX;
        canvas.height = qrCodeCanvas.height + 2 * paddingY;

        const centerX = (canvas.width - qrCodeCanvas.width) / 2;
        const centerY = (canvas.height - qrCodeCanvas.height) / 2;

        context.fillStyle = "white";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.drawImage(qrCodeCanvas, centerX, centerY);

        const url = canvas.toDataURL();
        const a = document.createElement("a");
        a.download = "QRCode.png";
        a.href = url;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    }
  };
  const printTicket = () => {
    window.print();
  };

  if (!bookedTicket) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#807A79",
          height: "100%",
          paddingBottom: "210px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            backgroundColor: "#333",
            color: "#fff",
            width: "100%",
            textAlign: "center",
          }}
        >
          <h2>
            <Link
              to="/Movies"
              style={{
                position: "absolute",
                left: "30px",
                top: "15px",
                color: "#fff",
                fontSize: "30px",
              }}
            >
              <HomeOutlined />
            </Link>
            Ticket Information
          </h2>
        </div>
        <div style={{ height: "84vh", color: "#fff" }}>
          <h2 style={{ textAlign: "center", height: "100%" }}>
            No ticket booked
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#807A79",
        height: "100%",
        paddingBottom: "210px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#333",
          color: "#fff",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2>
          <Link
            to="/Movies"
            style={{
              position: "absolute",
              left: "30px",
              top: "15px",
              color: "#fff",
              fontSize: "30px",
            }}
          >
            <HomeOutlined />
          </Link>
          Ticket Information
        </h2>
      </div>
      <div
        id="myticket"
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F73A4C",
          color: "#fff",
          border: "2px",
          borderRadius: "20px",
          boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
          padding: "12px 40px",
          marginBottom: "5px",
          marginTop: "20px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            id="myqrcode"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              marginRight: "20px",
            }}
          >
            <QRCode
              bgColor="#fff"
              style={{
                border: "1px solid #297CF7",
                backgroundColor: "transparent",
                borderRadius: "10px",
                padding: "10px",
                margin: "10px auto",
                alignItems: "center",
                justifyContent: "center",
              }}
              value={JSON.stringify(bookedTicket)}
            />
          </div>
          <div style={{ display: "flex" }}>
            <img
              src={bookedTicket.movie.image}
              alt={bookedTicket.movie.title}
              style={{
                borderRadius: "20px",
                height: "200px",
                marginTop: "10px",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "10px 10px 10px 20px",
              }}
            >
              <p>
                <strong>Movie:</strong> {bookedTicket.movie.title}
              </p>
              <p>
                <strong>Screen:</strong> {bookedTicket.theater}
              </p>
              <p>
                <strong>Show Time:</strong> {bookedTicket.show}
              </p>
              <p>
                <strong>Seats:</strong> {bookedTicket.seats.join(", ")}
              </p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", margin: "10px" }}>
          <Button type="primary" onClick={downloadQRCode}>
            Download
          </Button>
          <Button
            type="primary"
            onClick={printTicket}
            style={{ marginLeft: "10px" }}
          >
            Print
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
