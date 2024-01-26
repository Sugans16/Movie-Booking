import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bookTicket } from "../redux/actions";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { HomeOutlined } from "@ant-design/icons";

function TheaterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedMovie = useSelector((state) => state.selectedMovie);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [selectedShow, setSelectedShow] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [detailsVisible, setDetailsVisible] = useState(false);

  const seatPrice = 120.09;
  const gstRate = 0.18;
  const convenienceFees = 48.74;

  const totalSeats = selectedSeats.length;
  const subtotal = totalSeats * seatPrice;
  const gstAmount = subtotal * gstRate;
  const totalCost = subtotal + gstAmount + convenienceFees;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const Theaters = [
    {
      name: "Awesome Theater",
      shows: [
        {
          id: 1,
          time: "10:30am",
          A: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          B: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          C: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          D: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          E: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          F: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          G: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          H: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          I: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          J: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
        {
          id: 2,
          time: "2:00pm",
          A: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          B: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          C: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          D: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          E: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          F: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          G: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          H: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          I: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          J: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
        {
          id: 3,
          time: "5:30pm",
          A: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          B: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          C: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          D: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          E: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          F: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          G: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          H: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          I: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          J: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
        {
          id: 4,
          time: "9:30pm",
          A: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          B: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          C: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          D: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          E: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          F: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          G: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          H: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          I: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          J: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      ],
    },
    {
      name: "Super Cinema",
      shows: [
        {
          id: 5,
          time: "12:00pm",
          A: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          B: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          C: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          D: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          E: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          F: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          G: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          H: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          I: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          J: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
        {
          id: 6,
          time: "3:30pm",
          A: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          B: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          C: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          D: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          E: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          F: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          G: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          H: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          I: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          J: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
        {
          id: 7,
          time: "7:00pm",
          A: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          B: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          C: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          D: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          E: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          F: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          G: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          H: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          I: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          J: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
        {
          id: 8,
          time: "10:00pm",
          A: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          B: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          C: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          D: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          E: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          F: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          G: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          H: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          I: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          J: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      ],
    },
    {
      name: "Cineplex Deluxe",
      shows: [
        {
          id: 9,
          time: "1:30pm",
          A: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          B: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          C: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          D: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          E: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          F: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          G: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          H: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          I: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          J: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
        {
          id: 10,
          time: "4:45pm",
          A: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          B: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          C: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          D: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          E: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          F: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          G: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          H: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          I: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          J: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
        {
          id: 11,
          time: "8:15pm",
          A: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          B: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          C: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          D: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          E: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          F: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          G: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          H: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          I: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          J: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
        {
          id: 12,
          time: "11:45pm",
          A: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          B: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          C: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          D: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          E: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          F: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          G: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          H: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          I: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          J: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      ],
    },
    {
      name: "Mega Movie Palace",
      shows: [
        {
          id: 13,
          time: "11:00am",
          A: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          B: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          C: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          D: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          E: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          F: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          G: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          H: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          I: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          J: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
        {
          id: 14,
          time: "3:00pm",
          A: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          B: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          C: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          D: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          E: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          F: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          G: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          H: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          I: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          J: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
        {
          id: 15,
          time: "6:30pm",
          A: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          B: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          C: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          D: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          E: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          F: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          G: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          H: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          I: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          J: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
        {
          id: 16,
          time: "10:15pm",
          A: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          B: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          C: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          D: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          E: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          F: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          G: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          H: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          I: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          J: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      ],
    },
    {
      name: "VIP Cinemas",
      shows: [
        {
          id: 17,
          time: "12:45pm",
          A: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          B: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          C: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          D: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          E: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          F: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          G: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          H: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          I: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          J: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
        {
          id: 18,
          time: "4:00pm",
          A: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          B: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          C: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          D: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          E: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          F: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          G: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          H: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          I: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          J: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
        {
          id: 19,
          time: "7:45pm",
          A: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          B: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          C: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          D: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          E: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          F: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          G: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          H: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          I: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          J: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
        {
          id: 20,
          time: "11:00pm",
          A: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          B: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          C: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          D: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          E: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          F: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          G: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          H: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          I: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          J: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        },
      ],
    },
  ];

  const handleTheaterClick = (theater) => {
    setSelectedTheater(theater);
    setSelectedShow(null);
    setSelectedSeats([]);
  };

  const handleShowTimeClick = (show) => {
    setSelectedShow(show);
    setSelectedSeats([]);
  };

  const handleSeatClick = (section, seatNumber) => {
    const seatIdentifier = `${section}${seatNumber}`;
    if (
      !isSeatBooked(
        selectedMovie.title,
        selectedTheater.name,
        selectedShow.time,
        seatIdentifier
      )
    ) {
      if (selectedSeats.includes(seatIdentifier)) {
        setSelectedSeats(selectedSeats.filter((s) => s !== seatIdentifier));
      } else {
        setSelectedSeats([...selectedSeats, seatIdentifier]);
      }
    }
  };

  const isSeatBooked = (movieTitle, theaterName, showTime, seatIdentifier) => {
    const bookedTickets =
      JSON.parse(localStorage.getItem("bookedTickets")) || [];

    const isBooked = bookedTickets.some((ticket) => {
      return (
        ticket.movie.title === movieTitle &&
        ticket.theater === theaterName &&
        ticket.show === showTime &&
        ticket.seats.includes(seatIdentifier)
      );
    });

    return isBooked;
  };

  const handleBookTicket = () => {
    if (selectedTheater && selectedShow && selectedSeats.length > 0) {
      const ticketDetails = {
        movie: selectedMovie,
        theater: selectedTheater.name,
        show: selectedShow.time,
        seats: selectedSeats,
      };

      dispatch(bookTicket(ticketDetails));

      const bookedTickets =
        JSON.parse(localStorage.getItem("bookedTickets")) || [];
      localStorage.setItem(
        "bookedTickets",
        JSON.stringify([...bookedTickets, ticketDetails])
      );

      setSelectedTheater(null);
      setSelectedShow(null);
      setSelectedSeats([]);
      navigate("/confirmation");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#807a79",
        margin: "0px",
        padding: "0px",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <div style={{ display: "flex", backgroundColor: "#333", color: "#fff" }}>
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
        <h2 style={{ textAlign: "left", paddingLeft: "80px" }}>
          Movie Booking
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          fontSize: "20px",
          justifyContent: "center",
          width: "100%",
          height: "50px",
          backgroundColor: "#F73A4C",
          color: "#fff",
        }}
      >
        Choose Your Slot
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {Theaters.map((theater) => (
          <div
            key={theater.name}
            onClick={() => handleTheaterClick(theater)}
            style={{
              textAlign: "center",
              cursor: "pointer",
              border: "none",
              padding: "10px",
              borderRadius: "20px",
            }}
          >
            <div
              style={{
                border: "2px solid #333",
                padding: "10px",
                borderRadius: "20px",
                color:
                  selectedTheater && selectedTheater.name === theater.name
                    ? "#333"
                    : "#fff",
                backgroundColor:
                  selectedTheater && selectedTheater.name === theater.name
                    ? "#04D85D"
                    : "#007BFF",
              }}
            >
              {theater.name}
            </div>
          </div>
        ))}
      </div>

      {selectedTheater && (
        <>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {selectedTheater.shows.map((show) => (
              <div key={show.id} style={{ margin: "1rem" }}>
                <div
                  onClick={() => handleShowTimeClick(show)}
                  style={{
                    border: "2px solid #333",
                    padding: "10px",
                    borderRadius: "20px",
                    cursor: "pointer",
                    color: selectedShow === show ? "#333" : "#fff",
                    backgroundColor:
                      selectedShow === show ? "#04D85D" : "#D88A04",
                  }}
                >
                  Time <b>{show.time}</b>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {selectedShow && (
        <>
          <h3 style={{ textAlign: "center", color: "#fff" }}>
            Select Seats For "{selectedMovie.title}"
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                width: "40%",
                height: "10px",
                justifyContent: "center",
                backgroundColor: "#e0e0e0",
                borderRadius: "50% 50% 0% 0%",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                color: "#fff",
                width: "30%",
                justifyContent: "center",
              }}
            >
              {" "}
              All eyes this way please!{" "}
            </div>
            <div
              style={{
                padding: "10px",
                marginTop: "10px",
                backgroundColor: "#B3B3B3",
              }}
            >
              {Object.keys(selectedShow).map((section) => {
                if (
                  section !== "time" &&
                  section !== "theater" &&
                  Array.isArray(selectedShow[section])
                ) {
                  return (
                    <div
                      key={section}
                      style={{ marginTop: "10px", display: "flex" }}
                    >
                      {section}:
                      {selectedShow[section].map((seatNumber, seatIndex) => {
                        const seatIdentifier = `${section}${seatNumber}`;
                        const isSeatDisabled = isSeatBooked(
                          selectedMovie.title,
                          selectedTheater.name,
                          selectedShow.time,
                          seatIdentifier
                        );

                        return (
                          <div
                            key={seatIndex}
                            onClick={() => handleSeatClick(section, seatNumber)}
                            style={{
                              border: "1px solid black",
                              padding: "3px 10px",
                              margin: "0px 10px",
                              backgroundColor: isSeatDisabled
                                ? "grey"
                                : selectedSeats.includes(seatIdentifier)
                                ? "#04D85D"
                                : "#E1E1E1",
                              color: isSeatDisabled ? "#fff" : "#333",
                              cursor: isSeatDisabled
                                ? "not-allowed"
                                : "pointer",
                            }}
                          >
                            {seatNumber}
                          </div>
                        );
                      })}
                    </div>
                  );
                }
                return null;
              })}{" "}
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <button
              onClick={showModal}
              disabled={selectedSeats.length === 0}
              style={{
                padding: "10px",
                borderRadius: "10px",
                cursor: "pointer",
                backgroundColor: "#04D85D",
                fontSize: "1rem",
                marginBottom: "50px",
              }}
            >
              Book Ticket
            </button>
            {/* <Link to="/confirmation"> */}

            <Modal
              title="Confirm Ticket"
              open={isModalOpen}
              onOk={handleBookTicket}
              onCancel={handleCancel}
              okText="Confirm"
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                  src={selectedMovie.image}
                  alt={selectedMovie.title}
                  style={{
                    borderRadius: "20px",
                    height: "200px",
                    marginTop: "10px",
                  }}
                />
                <div style={{ marginLeft: "10px" }}>
                  <p>
                    <b style={{ color: "red" }}>Movie:</b>{" "}
                    <strong>{selectedMovie.title}</strong>
                  </p>
                  <p>
                    <b style={{ color: "red" }}>Screen:</b>{" "}
                    <strong>{selectedTheater.name}</strong>
                  </p>
                  <p>
                    <b style={{ color: "red" }}>Time:</b>{" "}
                    <strong>{selectedShow.time}</strong>
                  </p>
                  <p>
                    <b style={{ color: "red" }}>Seats:</b>{" "}
                    <strong>{selectedSeats.join(", ")}</strong>
                  </p>
                  <p>
                    <b style={{ color: "red" }}>Amount</b>{" "}
                    <strong>Rs.{totalCost.toFixed(2)}</strong>
                    <button
                      onClick={() => setDetailsVisible(!detailsVisible)}
                      style={{
                        border: "1px solid #807A79",
                        color: "#807A79",
                        borderStyle: "",
                        borderRadius: "50%",
                        padding: "2px 2px",
                        textAlign: "center",
                        marginLeft: "10px",
                      }}
                    >
                      {detailsVisible ? "▲" : "▼"}
                    </button>
                  </p>
                  {detailsVisible && (
                    <div>
                      <p>
                        <b style={{ color: "orangered", marginLeft: "20px" }}>
                          Ticket Cost:
                        </b>{" "}
                        <strong>Rs.{subtotal.toFixed(2)}</strong>
                      </p>
                      <p>
                        <b style={{ color: "orangered", marginLeft: "20px" }}>
                          GST (18%):
                        </b>{" "}
                        <strong>Rs.{gstAmount.toFixed(2)}</strong>
                      </p>
                      <p>
                        <b style={{ color: "orangered", marginLeft: "20px" }}>
                          Convenience Fees:
                        </b>{" "}
                        <strong>Rs.{convenienceFees.toFixed(2)}</strong>
                      </p>
                      <p>
                        <b style={{ color: "orangered", marginLeft: "20px" }}>
                          Total:
                        </b>{" "}
                        <strong>Rs.{totalCost.toFixed(2)}</strong>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </Modal>

            {/* </Link> */}
          </div>
        </>
      )}
    </div>
  );
}

export default TheaterPage;
