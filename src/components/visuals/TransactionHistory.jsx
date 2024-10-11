import React from 'react'
import TransactionCard from './TransactionCard'

export default function TransactionHistory() {
    return (
        <div className="col-md-4 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                <h4 className="card-title">Historial de Operaciones</h4>
                <canvas id="transaction-history" className="transaction-chart"></canvas>
                <TransactionCard name="Alta de Empleado" date="14/05/2024" info="Empleado: Juan Perez" />
                <TransactionCard name="Alta de Novedad" date="13/05/2024" info="Empleado: Jose Flore - Sueldo=2.000.0000" />
                <TransactionCard name="Baja de Vales" date="10/05/2024" info="Empleado: Manu Caporaso" />

                </div>
            </div>
        </div>
    )         
}