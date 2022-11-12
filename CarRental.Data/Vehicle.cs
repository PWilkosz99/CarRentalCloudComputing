﻿namespace CarRental.Data
{
    public class Vehicle
    {
        public int Id { get; set; }
        public VehicleModel? Model { get; set; }
        public int? Mileage { get; set; }
        public DateTime? ProductionDate { get; set; }
        public int? CostPerDay { get; set; }
        public string? Color { get; set; }
        public string? Notes { get; set; }
        public VehicleStates? State { get; set; }
        public String? User { get; set; }
    }
}
