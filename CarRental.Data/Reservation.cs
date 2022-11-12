﻿namespace CarRental.Data
{
    public class Reservation
    {
        public int Id { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string User { get; set; }
        public Vehicle Vehicle { get; set; }
    }
}
