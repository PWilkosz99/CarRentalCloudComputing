import React, { useState, useEffect } from 'react';

export default function EditCarModelTile(props) {

    const [id, setId] = useState(props.id);
    const [Manufacturer, setManufacturer] = useState(props.manufacturer);
    const [Type, setType] = useState(props.type);
    const [Fuel, setFuel] = useState(props.fuel);
    const [Seats, setSeats] = useState(props.seats);
    const [HPs, setHPs] = useState(props.hPs);
    const [Axes, setAxes] = useState(props.axes);
    const [editMode, setEditMode] = useState(false);

    const editCarModel = async (e, car) => {
        e.preventDefault();

        await fetch(`http://localhost:5000/api/EditCarModel/${id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                Manufacturer,
                Type,
                Fuel,
                Seats,
                HPs,
                Axes
            })
        });

        setEditMode(false);
    }

    const deleteCarModel = (id) => {
        (
            async () => {
                await fetch(`http://localhost:5000/api/DeleteCarModel/${id}`, {
                    method: 'DELETE'
                });
            }
        )();
    }

    if (!editMode) {
        return (
            <div className="edit-model-tile">
                <hr />
                <h3>({id}) {Manufacturer} --- {Type} --- {Fuel} --- {Seats} --- {Axes} --- {HPs}</h3>

                <button className="edit-carmodel" onClick={() => setEditMode(!editMode)}>Edit</button>
                <button className="delete-carmodel" onClick={() => deleteCarModel(props.id)}>Delete</button>
            </div>
        );
    } else {
        return (
            <>
                <hr />
                <form onSubmit={editCarModel} className="edit-model-form">
                    <input className="manufacturer-form" placeholder="Manufacturer" value={Manufacturer} required onChange={e => setManufacturer(e.target.value)} />
                    <select className="type-form" value={Type} onChange={e => setType(e.target.value)}>
                        <option value="Sedan">Sedan</option>
                        <option value="Hatchback">Hatchback</option>
                        <option value="Coupe">Coupe</option>
                    </select>
                    <select className="fuel-form" value={Fuel} onChange={e => setFuel(e.target.value)}>
                        <option value="Petrol">Petrol</option>
                        <option value="Diesel">Diesel</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Electric">Electric</option>
                    </select>
                    <input type="number" className="seats-form" placeholder="Seats" required onChange={e => setSeats(e.target.value)} />
                    <input type="number" className="hps-form" placeholder="HPs" required onChange={e => setHPs(e.target.value)} />
                    <select className="axes-form" value={Axes} onChange={e => setAxes(e.target.value)}>
                        <option value="FWD">FWD</option>
                        <option value="RWD">RWD</option>
                        <option value="AWD">AWD</option>
                    </select>

                    <button className="btn-form" type="submit">Submit</button>
                    <button className="edit-carmodel" onClick={() => setEditMode(!editMode)}>Back</button>
                </form>
            </>
        );
    }
}