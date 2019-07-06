import React from 'react';
import Cita from './Cita.js';

const ListaCitas = ({citas}) => {
    return (
        <div className="card mt-2 my-5">
            <div className="card-body">
                <h2 className="card-title text-center mb-5">Lista de citas</h2>

                <div className="lista-citas">
                    {citas.map(cita => {
                        return (
                            <Cita
                                key={cita.id}
                                cita={cita}
                            />
                        )
                    })}
                </div>
            </div>
        </div>

    )
};

export default ListaCitas;